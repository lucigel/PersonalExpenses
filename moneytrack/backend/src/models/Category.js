import { DataTypes } from 'sequelize' 
import sequelize from '../config/database.js'  

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.BIGINT, 
        primaryKey: true, 
        autoIncrement: true,
    }, 
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false, 
        references: {
            model: 'users', 
            key: 'id'            
        }
    }, 
    category_name: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true, 
    }, 
    type: {
        type: DataTypes.SMALLINT,
        allowNull: false, 
        validate: {
            isIn: [[1, 2]]
        },
    },
    created_at: {
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW
    },
}, {
    schema: 'public',
    tableName: 'categories', 
    timestamps: false, 
    underscored: true
})

export default Category 