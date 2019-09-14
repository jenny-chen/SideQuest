const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
let firebase = require('firebase-admin');

// load values from the .env file in this directory into process.env
dotenv.config();

let serviceAccount = require("./graph-intelligence-e29273f12d3b.json");
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://graph-intelligence.firebaseio.com"
});

const database = firebase.database();


// configure algolia
const algolia = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
);
const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

const queryProjects = async (skills, interests) => {

    return (await index.search('projects', {
        // filters: 'skills:Python AND store:Gibert Joseph Saint-Michel',
        // TODO: better filter method
        query: skills.join(),
        // filters: 'skills:Python OR skills:Ascii'
    }));
};

// TODO: add cors, wirte to firebase
const addProject = async(data) => {
    console.log('data 1');
    index.addObject(data);
    return (await database.ref('/projects').push(data));
};

// addProject({
//     "name": "Test 123",
//     "description": "Testing",
//     "image": [
//         "https://pbs.twimg.com/profile_images/689335847427047425/6cpRle0x.jpg"
//     ],
//     "author": "Burgers Aditya",
//     "skills": [
//         "Python",
//         "ML"
//     ]
// });

module.exports = {
    queryProjects,
    addProject
};

