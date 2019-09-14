# Project Hunt API

Power project search queries.

## Endpoints

### POST /search-projects
Algolia for powering search
https://itnext.io/how-to-add-fast-realtime-search-to-your-firebase-app-with-algolia-2491f7698d52

https://angularfirebase.com/lessons/angular-full-text-search-with-algolia-backend-part-2/

https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/tutorials/firebase-algolia/#create-a-nodejs-application

Sample request
```json
{
    "body": {
      "skills": ["react", "nodejs"],
      "interests": ["healthcare", "non-profit"]
    }
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
        ]
      }
    ]
  }
}
```

