import { DataTypes } from 'sequelize'
import sequelize  from '../config/database.js'

const Transaction = sequelize.define('Transaction', {
    id : {
        type: DataTypes.BIGINT, 
        primaryKey: true, 
        autoIncrement: true, 
    }, 
    fund_id: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    category_id: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    amount: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false,
    }, 
    type: {
        type: DataTypes.SMALLINT, 
        allowNull: false, 
        validate: { isIn: [[1,2]] } 
    }, 
    note: {
        type: DataTypes.STRING,
        allowNull: true 
    }, 
    created_at: {
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW
    }, 
    updated_at : {
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'transactions', 
    timestamps: false, 
    underscored: true, 
    schema: 'public' 
})

export default Transaction