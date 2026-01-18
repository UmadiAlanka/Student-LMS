const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/Post'); 

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/lms')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get("/api/post", async (req, res) => {   
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

app.post("/api/post", async (req, res) => {   
  try {
    const post =new Post(req,body);
    await post.save();
    res.json(post);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
