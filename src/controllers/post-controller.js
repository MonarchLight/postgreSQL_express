"use strict";

import * as postService from '../service/post-service.js';

export const createPost = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { title, content } = req.body;

        const newPost = await postService.createPost(id, title, content);

        return res.status(201).json({ status: true, error: null, payload: newPost });
    } catch (error) {
        next(error);
    }
};

export const getPosts = async (req, res, next) => {
    try {

        const { id } = req.query;

        const post = await postService.getPosts(id);

        return res.status(201).json({ status: true, error: null, payload: post });
    } catch (error) {
        next(error);
    }
};