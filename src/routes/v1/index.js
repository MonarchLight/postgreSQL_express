"use strict";

import { Router } from 'express';

import { routerUser } from './user/user-route.js';
import { routerPost } from './post/post-route.js';

export const router = new Router();

router.use('/user', routerUser)
    .use('/post', routerPost)