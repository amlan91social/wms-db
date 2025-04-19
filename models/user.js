const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    entity_id: {
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
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    entity_tags: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    entity_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    head_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    head_gender: {
      type: DataTypes.ENUM('MALE','FEMALE','OTHER'),
      allowNull: false
    },
    head_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    head_phone: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
};
