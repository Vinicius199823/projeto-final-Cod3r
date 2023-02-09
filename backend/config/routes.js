module.exports = app => {

    app.post('/signup', app.API.user.save)
    app.post('/signin', app.API.auth.signin)
    app.post('/validateToken', app.API.auth.validateToken)


    app.route('/users')
        .post(app.API.user.save)
        .get(app.API.user.get)

    app.route('/users/:id')
        .put(app.API.user.save)


    app.route('/categories')
        .get(app.API.category.get)
        .post(app.API.category.save)

    app.route('/categories/tree')
        .get(app.API.category.getTree)

    app.route('/categories/:id')
        .get(app.API.category.getById)
        .put(app.API.category.save)
        .delete(app.API.category.remove)
    
    app.route('/articles')
        .get(app.API.article.get)
        .post(app.API.article.save)

    app.route('/articles/:id')
        .get(app.API.article.getById)
        .put(app.API.article.save)
        .delete(app.API.article.remove)

    app.route('/categories/:id/articles')
        .get(app.API.article.getByCategory)
}