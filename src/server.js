import express from "express";
import cors from "cors";
import productRouter from "./services/product/index.js";
import sequelize, { testDB } from "./services/db/index.js";

const server = express();

server.use(cors);
server.use(express.json());
server.use("/product", productRouter);

server.listen(process.env.PORT || 3002, async () => {
  console.log("Server is running on port: ", process.env.PORT || 3002);
  await testDB();
  await sequelize.sync();
});
