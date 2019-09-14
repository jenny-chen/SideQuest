# SideQuest API

Power project search queries. Upload data from Firebase to Algolia to manage searches. Using [Firebase and Algolia](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/tutorials/firebase-algolia/).

## Setup
In Algolia dashboard, set searchable attributes. Also set attributes for faceting. 

Look into importScript.js for functions to import data from .json into firebase and to import firebase data into Algolia.

## Endpoints

### POST /search-projects
Uses Algolia to query most relvant projects based on skills and interests.

Can specify a raw query text along with tags.

Sample request
```json
{
      "skills": ["react", "nodejs"],
      "interests": ["healthcare", "non-profit"],
      "query": "Career Cards"
}
```

Sample response
```json
{
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
        ],
        "interests": [
          "Healthcare",
          "Education"
        ]
      }
    ]
  }
}
```

### POST /submit-project

Allows for users to submit a new project.

Sample request
```json
{
    "name": "Postman Test 123",
    "description": "Testing ...",
    "image": [
        "https://pbs.twimg.com/profile_images/689335847427047425/6cpRle0x.jpg"
    ],
    "author": "Burgers Aditya",
    "skills": [
        "Python",
        "ML"
    ],
    "interests": [
    	"Education",
    	"Healthcare"
    ]
}
```

Sample response
```json
{
    "status": "Success"
}
```

## Next Steps
- [ ] Add firebase security rules
- [ ] Improve Search Algorithm
- [ ] Invoke cloud function to write to Algolia on DB change


