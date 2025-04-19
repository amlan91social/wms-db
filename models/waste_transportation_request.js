const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waste_transportation_request', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    created_by: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    request_status: {
      type: DataTypes.ENUM('PENDING','ACCEPTED','REJECTED'),
      allowNull: true
    },
    transportation_group_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    request_creator_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    request_approver_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'waste_transportation_request',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
