const Article = require('../models/article.models');

class SiteController {

    //[GET] /news
    home(req, res) {
        res.render('home');

        Article.find({}, function(err, articles){
            if(!err){
                res.json(articles)
            } else{
                res.status(400).json({error: "ERROR!!!"});
            }
        });
    }

    //[GET] /news/:slug
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController;