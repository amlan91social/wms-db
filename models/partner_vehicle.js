const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_vehicle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
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
    vehicle_type: {
      type: DataTypes.ENUM('BOX','VAN'),
      allowNull: false
    },
    vehicle_number: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: "Unique Vehicle Number"
    },
    capacity_in_kgs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    is_approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    approved_by: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    approved_on: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner_vehicle',
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
      {
        name: "Unique Vehicle Number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vehicle_number" },
        ]
      },
    ]
  });
};
