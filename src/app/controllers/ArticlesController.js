const Article = require('../models/article.models');

class ArticleController {
    //GET
    index(req, res){
        Article.find({}, function(err, articles){
            if(!err) {
                res.json(articles);
                return;
            };
            res.status(400).json({error: 'ERROR!!!'});
        }) 
    }
}

