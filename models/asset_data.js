const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asset_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.DATE(3),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    asset_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "asset_id_UNIQUE"
    },
    value: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('OPERATIONAL','UNDER_MAINTAINENCE','OUT_OF_SERVICE','IDLE','RETIRED'),
      allowNull: false,
      defaultValue: "IDLE"
    }
  }, {
    sequelize,
    tableName: 'asset_data',
    timestamps: false,
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
        name: "asset_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
    ]
  });
};
