const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('healthcare_facility_settings', {
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
    healthcare_facility_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    setting_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    setting_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'healthcare_facility_settings',
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
        name: "healthcare_facility_setting_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "healthcare_facility_id" },
          { name: "setting_name" },
        ]
      },
    ]
  });
};
