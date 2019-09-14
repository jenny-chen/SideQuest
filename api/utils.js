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
    /**
     * Use Algolia search sdk to fetch projects based on skills and interests.
     */

    return (await index.search('projects', {
        // Use Algolia search sdk to fetch projects based on skills and interests.

        // The query string works well for matching the most relevant project based on contecated tags
        query: skills.join() + interests.join(),

        // TODO: Can also specify filters to limit search results to a few skills or interests
        // https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-arrays/
        // filters: 'skills:Python OR skills:Ascii'
    }));
};


const addProject = (data) => {
    /**
     * Add a new project to Firebase as well as submit to Algolia Index.
     */

    index.addObject(data);
    // TODO: Enforce uniquness: https://medium.com/@jqualls/firebase-firestore-unique-constraints-d0673b7a4952
    return new Promise((resolve) => {
        // Set will overwrite a project with the same
        database.ref('/projects').child(data.name).set(data, (error) => {
            if (error) {
                resolve('Error');
            } else {
                resolve('Success');
            }
        });
    })
};

module.exports = {
    queryProjects,
    addProject
};

console.log(addProject({
    "name": "Test 123",
    "description": "Testing",
    "image": [
        "https://pbs.twimg.com/profile_images/689335847427047425/6cpRle0x.jpg"
    ],
    "author": "Burgers Aditya",
    "skills": [
        "Python",
        "ML"
    ]
}).then((res) => {
    console.log(res);
}));

