const { addPostQuery } = require("../database/queries");

const addPost = (req, res) => {
  console.log(req.body, 123222)
    const {
        content, media 
    } = req.body;
    addPostQuery(content, media)
      .then(() => {
        res.redirect('/');
      });
}

module.exports = addPost;