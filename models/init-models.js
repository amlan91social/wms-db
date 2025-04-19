var DataTypes = require("sequelize").DataTypes;
var _asset_data = require("./asset_data");
var _asset_manufacturer = require("./asset_manufacturer");
var _asset_model = require("./asset_model");
var _healthcare_facility = require("./healthcare_facility");
var _healthcare_facility_asset = require("./healthcare_facility_asset");
var _healthcare_facility_settings = require("./healthcare_facility_settings");
var _partner = require("./partner");
var _partner_vehicle = require("./partner_vehicle");
var _partnership = require("./partnership");
var _region = require("./region");
var _scale_data = require("./scale_data");
var _system_feature = require("./system_feature");
var _transporter_operator_coodinates = require("./transporter_operator_coodinates");
var _user = require("./user");
var _user_role = require("./user_role");
var _user_role_system_feature_access = require("./user_role_system_feature_access");
var _user_to_user_role_map = require("./user_to_user_role_map");
var _waste_audit_log = require("./waste_audit_log");
var _waste_bag_collection = require("./waste_bag_collection");
var _waste_bag_label = require("./waste_bag_label");
var _waste_classification = require("./waste_classification");
var _waste_hierarchy = require("./waste_hierarchy");
var _waste_source = require("./waste_source");
var _waste_source_group = require("./waste_source_group");
var _waste_transportation_group = require("./waste_transportation_group");
var _waste_transportation_request = require("./waste_transportation_request");
var _waste_treatment_group = require("./waste_treatment_group");
var _waste_treatment_request = require("./waste_treatment_request");

function initModels(sequelize) {
  var asset_data = _asset_data(sequelize, DataTypes);
  var asset_manufacturer = _asset_manufacturer(sequelize, DataTypes);
  var asset_model = _asset_model(sequelize, DataTypes);
  var healthcare_facility = _healthcare_facility(sequelize, DataTypes);
  var healthcare_facility_asset = _healthcare_facility_asset(sequelize, DataTypes);
  var healthcare_facility_settings = _healthcare_facility_settings(sequelize, DataTypes);
  var partner = _partner(sequelize, DataTypes);
  var partner_vehicle = _partner_vehicle(sequelize, DataTypes);
  var partnership = _partnership(sequelize, DataTypes);
  var region = _region(sequelize, DataTypes);
  var scale_data = _scale_data(sequelize, DataTypes);
  var system_feature = _system_feature(sequelize, DataTypes);
  var transporter_operator_coodinates = _transporter_operator_coodinates(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_role = _user_role(sequelize, DataTypes);
  var user_role_system_feature_access = _user_role_system_feature_access(sequelize, DataTypes);
  var user_to_user_role_map = _user_to_user_role_map(sequelize, DataTypes);
  var waste_audit_log = _waste_audit_log(sequelize, DataTypes);
  var waste_bag_collection = _waste_bag_collection(sequelize, DataTypes);
  var waste_bag_label = _waste_bag_label(sequelize, DataTypes);
  var waste_classification = _waste_classification(sequelize, DataTypes);
  var waste_hierarchy = _waste_hierarchy(sequelize, DataTypes);
  var waste_source = _waste_source(sequelize, DataTypes);
  var waste_source_group = _waste_source_group(sequelize, DataTypes);
  var waste_transportation_group = _waste_transportation_group(sequelize, DataTypes);
  var waste_transportation_request = _waste_transportation_request(sequelize, DataTypes);
  var waste_treatment_group = _waste_treatment_group(sequelize, DataTypes);
  var waste_treatment_request = _waste_treatment_request(sequelize, DataTypes);


  return {
    asset_data,
    asset_manufacturer,
    asset_model,
    healthcare_facility,
    healthcare_facility_asset,
    healthcare_facility_settings,
    partner,
    partner_vehicle,
    partnership,
    region,
    scale_data,
    system_feature,
    transporter_operator_coodinates,
    user,
    user_role,
    user_role_system_feature_access,
    user_to_user_role_map,
    waste_audit_log,
    waste_bag_collection,
    waste_bag_label,
    waste_classification,
    waste_hierarchy,
    waste_source,
    waste_source_group,
    waste_transportation_group,
    waste_transportation_request,
    waste_treatment_group,
    waste_treatment_request,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
