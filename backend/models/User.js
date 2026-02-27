const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clanTag: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'member'
    },
    preferences: {
        type: DataTypes.JSON,
        defaultValue: {
            notifications: true,
            dmAlerts: true,
            language: 'Português',
            darkMode: false
        }
    }
}, {
    timestamps: true
});

module.exports = User;
