# Project Hunt API

Power project search queries.

## Endpoints

### POST /search-projects

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