const db = require('../db')

class PostController {
    async createPost(req,res) {
        const {title, body, dat, typ} = req.body
        const newPost = await db.query('INSERT INTO posts (title, dat, typ, body) values ($1, $2, $3, $4) RETURNING *', [title, dat, typ, body])

        res.json(newPost.rows[0])
    }
    async getPost(req,res) {
        const posts = await db.query('SELECT * FROM posts')
        res.json(posts.rows)
    }
    async getOnePost(req,res) {
        const id = req.params.id
        const post = await db.query('SELECT * FROM posts where id = $1', [id])
        res.json(post.rows[0])
    }
    async deletePost(req,res) {
        const id = req.params.id
        const post = await db.query('DELETE FROM posts where id = $1', [id])
        res.json(post.rows[0])
    }
}


module.exports = new PostController()