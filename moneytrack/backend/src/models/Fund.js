import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'


const Funds = sequelize.define('Funds', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true, 
        autoIncrement: true
    }, 
    user_id: {
        type: DataTypes.BIGINT, 
        allowNull: true
    }, 
    fund_name: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    balance: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false,
        defaultValue: 0
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
    tableName: 'funds',
    timestamps: false,
    underscored: true
})

export default Funds