const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("Ticket", {
        ticketId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        issueTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        issueDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        issueType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            default: 'Not Started',
            enum: ['Not Started', 'In Progress', 'Completed', 'Closed'],
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            default: Date.now,
        },
        updatedAt: {
            type: DataTypes.STRING,
            default: Date.now,
        },
        assignedTo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        closedBy: {
            type: DataTypes.STRING,
        },
    }, { timestamps: false })
}