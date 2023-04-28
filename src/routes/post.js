const express = require('express');
const router = express.Router();
const PostController = require('../app/controllers/PostController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         _id:
 *           type: Schema.Types.ObjectId
 *           description: User Id
 *         user_id:
 *           type: string
 *           description: User Id
 *         user_name:
 *           type: string
 *           description: user name
 *         full_name:
 *           type: string
 *           description: full name user
 *         user_bio:
 *           type: string
 *           description: user bio in here
 *         like_count:
 *           type: number
 *           description: like
 *         total_comment:
 *           type: number
 *           description: comment
 *         profile_pic_url:
 *           type: string
 *           description: link image avatar user
 *         friendship_status:
 *           type: object
 *           properties:
 *             following:
 *               type: boolean
 *             outgoing_request:
 *               type: boolean
 *         media:
 *           type: object
 *           properties:
 *             src:
 *               type: string
 *               description: link image
 *             poster:
 *               type: string
 *               description: link image poster
 *         caption_text:
 *           type: string
 *           description: write something tin here
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date create post
 *         updateAt:
 *           type: string
 *           format: date
 *           description: The date update post
 *       required:
 *         - _id
 *         - user_id
 *         - user_name
 *         - full_name
 *         - user_bio
 *         - like_count
 *         - total_comment
 *         - profile_pic_url
 *         - friendship_status
 *         - following
 *         - outgoing_request
 *         - media
 *         - src
 *         - poster
 *         - caption_text
 *         - createdAt
 *         - updateAt
 *       example:
 *         _id: 64489373407be50ac8911e6a
 *         user_id: 1
 *         user_name: AnLV
 *         full_name: Le Van An
 *         user_bio: Nothing!!!
 *         like_count: 100
 *         total_comment: 100
 *         profile_pic_url: "https://abc.com"
 *         friendship_status:
 *           following: true
 *           outgoing_request: true
 *         media:
 *           src: "https://image.com"
 *           poster: "https://image_poster.com"
 *         caption_text: some thing in here
 *         createdAt: "Wed Apr 26 2023 10:20:48 GMT+0700Date"
 *         updateAt: "Wed Apr 26 2023 10:22:48 GMT+0700Date"
*/
/**
 * @swagger
 *  /post/create:
 *   get:
 *     summary: create new post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: the user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: "#/components/schemas/Post"
 *     responses:
 *       200:
 *         description: new post created!!!
*/
router.get('/create', PostController.create);

/**
 * @swagger
 *  /post/:id/edit:
 *   get:
 *     summary: edit post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: "#/components/schemas/Post"
 *     responses:
 *       200:
 *         description: new post created!!!
*/
router.get('/:id/edit', PostController.edit);

/**
 * @swagger
 *  /post/:slug:
 *   get:
 *     summary: display post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: "#/components/schemas/Post"
 *     responses:
 *       200:
 *         description: new post created!!!
*/
router.get('/:slug', PostController.show);

/**
 * @swagger
 *  /post/:id:
 *   put:
 *     summary: update post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: the user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: "#/components/schemas/Post"
 *     responses:
 *       200:
 *         description: update post completed!!!
*/
router.put('/:id', PostController.update);


/**
 * @swagger
 *  /post/store:
 *   post:
 *     summary: store post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: "#/components/schemas/Post"
 *     responses:
 *       200:
 *         description: new post created!!!
*/
router.post('/store', PostController.store);

/**
 * @swagger
 *  /post/:id:
 *   delete:
 *     summary: delete post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: "#/components/schemas/Post"
 *     responses:
 *       200:
 *         description: new post created!!!
*/
router.delete('/:id', PostController.delete);


module.exports = router;