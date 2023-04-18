const Article = require('../models/article.models');

class ArticleController {
    //GET
    index(req, res){
        Article.find({}, function(err, article){
            if(!err) {
                res.json(article);
                return;
            };
            res.status(400).json({error: 'ERROR!!!'});
        }) 
    }
}

