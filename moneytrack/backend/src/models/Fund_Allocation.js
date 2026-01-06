import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const FundAllocation = sequelize.define('FundAllocation', {
    id: {
        type: DataTypes.BIGINT, 
        primaryKey: true, 
        autoIncrement: true,
    }, 
    wallet_id: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    fund_id: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    amount: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false, 
        defaultValue: 0
    }, 
    created_at: {
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW
    }
}, {
    schema: 'public', 
    tableName: 'fund_allocations', 
    underscored: true, 
    timestamps: false
})

export default FundAllocation