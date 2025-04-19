const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_role_system_feature_access', {
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
    user_role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    system_feature_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    access_type: {
      type: DataTypes.ENUM('ALL','NONE','READ-ONLY','WRITE','DELETE'),
      allowNull: false,
      defaultValue: "NONE"
    }
  }, {
    sequelize,
    tableName: 'user_role_system_feature_access',
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
        name: "user_role_id_system_feature_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_role_id" },
          { name: "system_feature_id" },
        ]
      },
    ]
  });
};
