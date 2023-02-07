"use strict";

import { Router } from "express";

import * as controller from '../../../controllers/user-controller.js';

export const routerUser = new Router();

routerUser.post('/', controller.createUser)
    .get('/', controller.getUser)
    .get('/:id', controller.getOneUser)
    .put('/:id', controller.updateUser)
    .delete('/:id', controller.deleteUser);