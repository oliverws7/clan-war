const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Clan = sequelize.define('Clan', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    medals: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    members: {
        type: DataTypes.JSON,
        defaultValue: []
    }
}, {
    timestamps: true
});

module.exports = Clan;
