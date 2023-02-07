"use strict";

import pg from 'pg';

export const pool = new pg.Pool({
    username: 'dnieper',
    password: 'start2023',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});