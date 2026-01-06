import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js' 

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE, 
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    schema: 'public',
    tableName: 'users',
    timestamps: false,
    underscored: true
})

export default User;