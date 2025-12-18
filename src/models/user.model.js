import sequelize from "../common/config/db1.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user" , 
    {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },      
        otp: {
            type: DataTypes.STRING,
            allowNull: true, // stored as bcrypt hash
        },
        otp_expires: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        dateofbirth:  {
            type: DataTypes.DATE,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        }        
    },
    {
        tableName: "user",
        timestamps: true
    }
)

export default User