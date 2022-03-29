const connection = require('../config/connection');

const getPostsQuery = () => {
    const sql = {
        text: 'SELECT p.id,p.content,p.media, p.created_at, u.name, u.id as user_id ,(select count(*) from votes v where v.post_id = p.id and v.vote = true) - (select count(*) from votes v where v.post_id = p.id and v.vote = false) as votes_number,count(c.post_id) as comments FROM posts p INNER JOIN users u ON u.id = p.user_id LEFT JOIN commnets c ON c.post_id = p.id group by p.id, u.name, u.id ORDER BY votes_number desc',
    }
    return connection.query(sql)
}

module.exports = getPostsQuery;