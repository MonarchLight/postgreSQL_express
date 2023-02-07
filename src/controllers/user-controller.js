"use strict";

import * as userService from '../service/user-service.js';

export const createUser = async (req, res, next) => {
    try {
        const { name, surname } = req.body;

        const newUser = await userService.createUser(name, surname);

        return res.status(201).json({ status: true, error: null, payload: newUser });
    } catch (error) {
        next(error);
    }
};

export const getUser = async (req, res, next) => {
    try {

        const users = await userService.getUser();

        return res.status(201).json({ status: true, error: null, payload: users });
    } catch (error) {
        next(error);
    }
};

export const getOneUser = async (req, res, next) => {
    try {

        const { id } = req.params;

        const user = await userService.getOneUser(id);

        return res.status(201).json({ status: true, error: null, payload: user });
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { name, surname } = req.body;

        const user = await userService.updateUser(id, name, surname);


        return res.status(201).json({ status: true, error: null, payload: user });
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {

        const { id } = req.params;

        const user = await userService.deleteUser(id);

        return res.status(201).json({ status: true, error: null, payload: user });
    } catch (error) {
        next(error);
    }
};