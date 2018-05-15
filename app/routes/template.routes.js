module.exports = (app)=> {
    const templates = require('../controllers/templateController.js');

    //create a new template
    app.post('/templates', templates.create);

    //retrive all templates
    app.get('/templates', templates.findAll);

    //retrive a single template with templateID
    app.get('/templates/:templateId', templates.findOne);

    //Update a template with templateID
    app.put('/templates/:templateId', templates.update);

    //Delete a template with templateID
    app.delete('/templates/:templateId', templates.delete);
}