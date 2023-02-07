"use strict";

import { pool } from '../models/config-psql.js';

export const createPost = async (id, title, content) => {

    const post = await pool.query('insert into post(title, content, user_id) values($1,$2,$3) returning *', [title, content, id]);

    return post.rows[0];
};

export const getPosts = async (id) => {

    const posts = await pool.query('select * from post where user_id = $1', [id]);

    return posts.rows;
};