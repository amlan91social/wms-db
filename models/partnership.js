const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partnership', {
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
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    contract_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    partnership_status: {
      type: DataTypes.ENUM('PENDING','ACTIVE','SUSPENDED','TERMINATED','EXPIRED'),
      allowNull: false,
      defaultValue: "PENDING"
    },
    provider_type: {
      type: DataTypes.ENUM('RECYCLER','TRANSPORTER','TRANSPORTER_SPECIALIZED','TRANSPORTER_LANDFILL','TRANSPORTER_TREATMENT','TRANSPORTER_GOVERNMENT','LANDFILLER','TREATMENT_PROVIDER'),
      allowNull: false
    },
    can_landfill: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    landfilling_provider: {
      type: DataTypes.ENUM('SELF','THIRD_PARTY'),
      allowNull: true
    },
    can_recycle: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    recyling_provider: {
      type: DataTypes.ENUM('SELF','THIRD_PARTY'),
      allowNull: true
    },
    has_incinerator: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    incinerator_provider: {
      type: DataTypes.ENUM('SELF','THIRD_PARTY'),
      allowNull: true
    },
    has_autoclave: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    autoclave_provider: {
      type: DataTypes.ENUM('SELF','THIRD_PARTY'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partnership',
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
