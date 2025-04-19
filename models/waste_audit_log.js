const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waste_audit_log', {
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
    audit_type: {
      type: DataTypes.ENUM('TRANSACTION','TREATMENT_GROUP','TRANSPORTATION_GROUP'),
      allowNull: false
    },
    action_type: {
      type: DataTypes.ENUM('CREATE','UPDATE','DELETE'),
      allowNull: false
    },
    from_status: {
      type: DataTypes.ENUM('GENERATED','CLASSIFIED','SCALED','STORED_FOR_TREATMENT','STORED_FOR_TRANSPORT','TREATED','RESIDUE_CLASSIFIED','RESIDUE_SCALED','RESIDUE_STORED_FOR_TRANSPORT','IN_TRANSIT','DISPOSED'),
      allowNull: false
    },
    to_status: {
      type: DataTypes.ENUM('GENERATED','CLASSIFIED','SCALED','STORED_FOR_TREATMENT','STORED_FOR_TRANSPORT','TREATED','RESIDUE_CLASSIFIED','RESIDUE_SCALED','RESIDUE_STORED_FOR_TRANSPORT','IN_TRANSIT','DISPOSED'),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    workflow_engine_command: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    reference_table_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'waste_audit_log',
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
