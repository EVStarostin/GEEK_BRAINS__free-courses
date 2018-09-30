const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

const http = require('http');

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server has been started');
});

const { User, Post, Comment } = require('./models');

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json(user);
});

app.post('/api/users', async (req, res) => {
  let user = new User(req.body);
  user = await user.save();

  res.json(user);
});

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.get('/api/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.json(post);
});

app.post('/api/posts', async (req, res) => {
  let post = new Post(req.body);
  post = await post.save();

  res.json(post);
});

app.get('/api/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

app.get('/api/comments/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  res.json(comment);
});

app.post('/api/comments', async (req, res) => {
  let comment = new Comment(req.body);
  comment = await comment.save();

  res.json(comment);
});
