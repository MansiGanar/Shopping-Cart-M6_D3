import { Sequelize } from "sequelize";

const { DB_URL } = process.env;
const sequelize = new Sequelize(DB_URL);

export const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
  } catch (error) {
    console.log(error.message);
  }
};
