"use strict";

import { pool } from '../models/config-psql.js';

export const createUser = async (name, surname) => {

    const user = await pool.query('insert into person(name, surname) values($1,$2) returning *', [name, surname]);

    return user.rows[0];
};

export const getUser = async () => {

    const user = await pool.query('select * from person');

    return user.rows;
};

export const getOneUser = async (id) => {

    const user = await pool.query('select * from person where id = $1', [id]);

    return user.rows[0];
};

export const updateUser = async (id, name, surname) => {

    const user = await pool.query('update person set name = $1, surname = $2 where id = $3 returning *', [name, surname, id]);

    return user.rows;
};

export const deleteUser = async (id) => {

    const user = await pool.query('delete from person where id = $1 returning *', [id]);

    return user.rows;
};