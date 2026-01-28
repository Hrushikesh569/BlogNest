const asyncHandler = require('express-async-handler');
const Blog = require('../models/Blog');

// @desc    Fetch all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({}).populate('author', 'name email').sort({ createdAt: -1 });
    res.json(blogs);
});

// @desc    Fetch single blog
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate('author', 'name email');

    if (blog) {
        res.json(blog);
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
});

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private
const createBlog = asyncHandler(async (req, res) => {
    const { title, content, image } = req.body;

    const blog = new Blog({
        title,
        content,
        image,
        author: req.user._id,
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
});

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = asyncHandler(async (req, res) => {
    const { title, content, image } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (blog) {
        if (blog.author.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error('Not authorized to update this blog');
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.image = image || blog.image;

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
});

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
        if (blog.author.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error('Not authorized to delete this blog');
        }

        await blog.deleteOne();
        res.json({ message: 'Blog removed' });
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
});

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};
