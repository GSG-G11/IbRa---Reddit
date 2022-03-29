const getPostsQuery = require("../database/queries/getPostsQuery");
const customizedError = require("../errors/cutomizedError")
const getPosts = (req, res) => {
  getPostsQuery()
    .then((data) => {
      if (data.rows.length > 0) {
        res.status(200).json(data.rows);
      } else {
        throw customizedError(404, "No posts found");
      }
    })
    .catch((err) => {
      if (err.status === 404) {
        return res.status(404).json({ message: err.message });
      }
    });
};

module.exports = getPosts;
