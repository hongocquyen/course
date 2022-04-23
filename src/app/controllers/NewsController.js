
class NewsController {

    // [GET] /news
    index(req,res) {
        res.render("news");
    }
    
    // [GET] /news/:slug
    showSlug(req,res){
        res.render("slug");
    }
}

module.exports = new NewsController;