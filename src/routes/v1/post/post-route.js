"use strict";

import { Router } from "express";

import * as controller from '../../../controllers/post-controller.js';

export const routerPost = new Router();

routerPost.post('/:id', controller.createPost)
    .get('/', controller.getPosts);