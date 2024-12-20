import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
}, {
    freezeTableName:true
});

export default User;

// Untuk generate table jika tidak ada pada db
(async()=>{
    await db.sync();
})();