const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waste_transportation_group', {
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
    total_bags_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    total_weight_in_kgs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transporter_vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transporter_operator_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    handover_lattitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: true
    },
    handover_longitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: true
    },
    transportation_status: {
      type: DataTypes.ENUM('GENERATED','CLASSIFIED','SCALED','STORED_FOR_TREATMENT','STORED_FOR_TRANSPORT','TREATED','RESIDUE_CLASSIFIED','RESIDUE_SCALED','RESIDUE_STORED_FOR_TRANSPORT','IN_TRANSIT','DISPOSED'),
      allowNull: false,
      defaultValue: "STORED_FOR_TRANSPORT"
    }
  }, {
    sequelize,
    tableName: 'waste_transportation_group',
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
