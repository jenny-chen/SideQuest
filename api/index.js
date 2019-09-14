'use strict';

exports.searchProjects = (request, response) => {

    // TODO: see how to parse post requests https://cloud.google.com/functions/docs/writing/http#parsing_http_requests
    // TODO: read token from firebase

    const data = {
        "body": {
            "projects": [
                {
                    "name": "Fun Project",
                    "description": "Ipsum Dolor",
                    "image": [
                        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"
                    ],
                    "author": "Marko",
                    "skills": [
                        "Python",
                        "React",
                        "Firebase"
                    ]
                },
                {
                    "name": "Fun Project 2",
                    "description": "Ipsum Dolor 2",
                    "image": [
                        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"
                    ],
                    "author": "Anthony",
                    "skills": [
                        "Python",
                        "React",
                        "Machine Learning"
                    ]
                }
            ]
        }
    };

    response.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });

    response.set('Content-Type', 'application/json');
    response.status(200).send(data);

};



