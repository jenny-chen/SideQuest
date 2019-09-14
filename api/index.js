const { queryProjects, addProject } = require('./utils');

exports.searchProjects = async (request, response) => {

    if (request.method === 'OPTIONS') {
        // Handle pre-flight cors
        // Send response to OPTIONS requests
        response.set('Access-Control-Allow-Methods', 'POST');
        response.set('Access-Control-Allow-Headers', 'Content-Type');
        response.set('Access-Control-Allow-Origin', '*');
        response.set('Access-Control-Max-Age', '3600');
        response.status(204).send('');

    } else {

        const data = request.body;
        console.log("Request Data Body", data);

        const {skills, interests} = data;

        let results = await queryProjects(skills, interests);
        console.log('Query Result', results);

        results = results.hits.map((result) => {
            delete result._highlightResult;
            return result
        });

        response.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type,Authorization'
        });

        response.set('Content-Type', 'application/json');
        response.status(200).send({
            "body": {
                "projects": results
            }
        });
    }
};

exports.addProject = async (request, response) => {

    if (request.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        response.set('Access-Control-Allow-Methods', 'POST');
        response.set('Access-Control-Allow-Headers', 'Content-Type');
        response.set('Access-Control-Allow-Origin', '*');
        response.set('Access-Control-Max-Age', '3600');
        response.status(204).send('');

    } else {
        const data = request.body;

        let status = await addProject(data);

        response.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type,Authorization'
        });

        response.set('Content-Type', 'application/json');
        response.status(200).send({
            "status": status
        });
    }
};


