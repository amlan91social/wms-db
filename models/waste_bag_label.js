const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waste_bag_label', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    created_by: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    waste_bag_collection_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    qr_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    waste_label_purpose: {
      type: DataTypes.ENUM('TRANSPORTATION','TREATMENT'),
      allowNull: false
    },
    waste_label_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'waste_bag_label',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
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
