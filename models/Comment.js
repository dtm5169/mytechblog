const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'id'
            },
        },
        post_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        blog_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'blog',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;