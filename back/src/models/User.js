const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userType: {
            type: DataTypes.ENUM("user", "staff"),
        },
    }, { timestamps: false })
}