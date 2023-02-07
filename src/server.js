"use strict";

import express from "express";

import { config } from "../config.js";
import { router } from "./routes/v1/index.js";
import { errorMiddlewares } from "./middlewares/error-middleware.js";

const app = express();

app.use(express.json());
app.use("/api", router);
app.use(errorMiddlewares);

const start = async () => {
    try {
        app.listen(config.PORT, () =>
            console.log(`Server started on port ${config.PORT}`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();