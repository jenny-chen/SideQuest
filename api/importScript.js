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

const seedProjects = [
    {
        "name": "Fun Project",
        "description": "Ipsum Dolor",
        "image": ["https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"],
        "author": "Marko",
        "skills": ["Python", "React", "Firebase"]
    }
];

// // Adding a few projects
// Promise.all(
//     seedProjects.map((project) => {
//         return database.ref('/projects').push(project)
//     })).then(() => {
//     console.log("Project added to Firebase");
//     process.exit(0);
// }).catch(error => {
//     console.error("Error adding contacts to Firebase", error);
//     process.exit(1);
// });


// Importing to Algolia
// Get all contacts from Firebase
database.ref('/projects').once('value', projects => {
    // Build an array of all records to push to Algolia
    const records = [];
    projects.forEach(project => {
        // get the key and data from the snapshot
        const childKey = project.key;
        const childData = project.val();
        // We set the Algolia objectID as the Firebase .key
        childData.objectID = childKey;
        // Add object for indexing
        records.push(childData);
    });

    // Add or update new objects
    index
        .saveObjects(records)
        .then(() => {
            console.log('Contacts imported into Algolia');
        })
        .catch(error => {
            console.error('Error when importing contact into Algolia', error);
            process.exit(1);
        });
});