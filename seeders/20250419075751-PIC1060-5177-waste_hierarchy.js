'use strict';
const db = require('../models');
var initModels = require("../models/init-models");
var models = initModels(db.sequelize);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const indonesia = await models.region.findOne({
      where: {
        code: 'INDO',
      },
    });
    if (!indonesia) {
      throw new Error('Region with code "INDO" not found');
    }
    const indonesiaRegionId = indonesia.dataValues.id;

    // Waste Groups
    const hazardousWasteGroup = await models.waste_hierarchy.create({
      created_by: 'system_init',
      updated_by: 'system_init',
      region_id: indonesiaRegionId,
      name: 'Hazardous Waste (B3 Waste)',
      description: 'Hazardous waste is any waste that poses a substantial or potential hazard to human health or the environment.',
    });
    const specializedWasteGroup = await models.waste_hierarchy.create({
      created_by: 'system_init',
      updated_by: 'system_init',
      region_id: indonesiaRegionId,
      name: 'Specialized Waste',
      description: 'Specialized waste refers to waste that requires special handling and disposal methods due to its unique characteristics. This can include medical waste, electronic waste, and construction debris.',
    });
    const domesticWasteGroup = await models.waste_hierarchy.create(
      {
        created_by: 'system_init',
        updated_by: 'system_init',
        region_id: indonesiaRegionId,
        name: 'Domestic Waste',
        description: 'Domestic waste refers to waste generated from households and residential areas. This includes everyday items such as food scraps, packaging materials, and other non-hazardous waste.',
      }
    );

    const hazardousWasteGroupId = hazardousWasteGroup.dataValues.id;
    const hazardousWasteTypes = await models.waste_hierarchy.bulkCreate(
      [
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: hazardousWasteGroupId,
          name: 'Medical Waste',
          description: 'Medical waste is any waste that is generated in the diagnosis, treatment, or immunization of humans or animals.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id:  hazardousWasteGroupId,
          name: 'Industrial Waste',
          description: 'Industrial waste refers to waste generated from manufacturing and industrial processes. This can include scrap metal, chemicals, and other materials that are byproducts of production.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id:  hazardousWasteGroupId,
          name: 'Immunization Waste',
          description: 'Immunization waste refers to waste generated from vaccination activities. This includes used syringes, vials, and other materials that may be contaminated with infectious agents.',
        },
      ]
    );

    const specializedWasteGroupId = specializedWasteGroup.dataValues.id;
    const specializedWasteTypes = await models.waste_hierarchy.bulkCreate(
      [
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: specializedWasteGroupId,
          name: 'Specialized Waste',
          description: 'Specialized waste refers to waste that requires special handling and disposal methods due to its unique characteristics. This can include medical waste, electronic waste, and construction debris.',
        },
      ]
    );
    const domesticWasteGroupId = domesticWasteGroup.dataValues.id;
    const domesticWasteTypes = await models.waste_hierarchy.bulkCreate(
      [
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: domesticWasteGroupId,
          name: 'Orgnaic Waste',
          description: 'Organic waste refers to biodegradable waste that comes from plants and animals. This includes food scraps, yard waste, and other materials that can decompose naturally.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: domesticWasteGroupId,
          name: 'Inorganic Waste',
          description: 'Inorganic waste refers to non-biodegradable waste that does not come from living organisms. This includes materials such as metals, plastics, and glass.',
        },
      ]
    );

    const [
      medicalWasteTypeId,
      industrialWasteTypeId,
      immunizationWasteTypeId,
    ] = hazardousWasteTypes.map((wasteType) => wasteType.dataValues.id);
    const specializedWasteTypeId = specializedWasteTypes[0].dataValues.id;
    const [
      organicWasteTypeId,
      inorganicWasteTypeId,
    ] = domesticWasteTypes.map((wasteType) => wasteType.dataValues.id);

    // Create waste characteristics
    await models.waste_hierarchy.bulkCreate(
      [
        // Waste Characteristics - Medical Waste
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: medicalWasteTypeId,
          name: 'Infectious',
          description: 'Infectious waste is any waste that is capable of causing infectious diseases in humans or animals.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: medicalWasteTypeId,
          name: 'Infectious - Plastic',
          description: 'Infectious plastic waste is any plastic waste that is capable of causing infectious diseases in humans or animals.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: medicalWasteTypeId,
          name: 'Infectious - Non-Plastic',
          description: 'Infectious non-plastic waste is any non-plastic waste that is capable of causing infectious diseases in humans or animals.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: medicalWasteTypeId,
          name: 'Sharp',
          description: 'Sharp waste refers to any waste that can cause cuts or punctures. This includes items such as needles, blades, and other sharp objects that can pose a risk of injury or infection.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: medicalWasteTypeId,
          name: 'Pathological',
          description: 'Pathological waste refers to any waste that contains human or animal tissues, organs, or body fluids.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: medicalWasteTypeId,
          name: 'Unsegregated - Infectious',
          description: 'Unsegregated infectious waste refers to any waste that is capable of causing infectious diseases in humans or animals, but has not been properly segregated from other types of waste.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: medicalWasteTypeId,
          name: 'Unsegregated - Non-Infectious',
          description: 'Unsegregated non-infectious waste refers to any waste that is not capable of causing infectious diseases in humans or animals, but has not been properly segregated from other types of waste.',
        },
        // Waste Characteristics - Industrial Waste
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Pharmaceutical',
          description: 'Pharmaceutical waste refers to any waste that contains unused or expired medications, vaccines, or other pharmaceutical products.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Antimicrobial/Antibiotic',
          description: 'Antimicrobial waste refers to any waste that contains antimicrobial or antibiotic substances. This includes items such as unused medications, vials, and other materials that may be contaminated with infectious agents.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Chemical',
          description: 'Chemical waste refers to any waste that contains hazardous chemicals or substances. This includes items such as unused medications, vials, and other materials that may be contaminated with infectious agents.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Cytotoxic',
          description: 'Cytotoxic waste refers to any waste that contains cytotoxic substances, which are harmful to living cells. This includes items such as unused medications, vials, and other materials that may be contaminated with infectious agents.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Incineration/Pyrolysis Residue',
          description: 'Incineration or pyrolysis residue refers to any waste that remains after the incineration',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Electronic',
          description: 'Electronic waste refers to any waste that contains electronic components or devices. This includes items such as computers, televisions, and other electronic equipment that may contain hazardous materials.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Lamps/Fluorescent Tubes',
          description: 'Lamps and fluorescent tubes refer to any waste that contains lamps or fluorescent tubes. This includes items such as used light bulbs, tubes, and other materials that may contain hazardous substances.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Batteries',
          description: 'Batteries refer to any waste that contains batteries. This includes items such as used batteries, chargers, and other materials that may contain hazardous substances.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Oil',
          description: 'Oil waste refers to any waste that contains oil or oil-based substances. This includes items such as used oil filters, containers, and other materials that may contain hazardous substances.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: industrialWasteTypeId,
          name: 'Sludge',
          description: 'Sludge waste refers to any waste that contains sludge or sludge-like substances. This includes items such as used oil filters, containers, and other materials that may contain hazardous substances.',
        },
        // Waste Characteristics - Immunization  Waste
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: immunizationWasteTypeId,
          name: 'Infectious',
          description: 'Infectious waste is any waste that is capable of causing infectious diseases in humans or animals. This includes items such as used syringes, bandages, and other materials that may be contaminated with infectious agents.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: immunizationWasteTypeId,
          name: 'Sharp',
          description: 'Sharp waste refers to any waste that can cause cuts or punctures. This includes items such as needles, blades, and other sharp objects that can pose a risk of injury or infection.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: immunizationWasteTypeId,
          name: 'Vaccination',
          description: 'Vaccination waste refers to any waste that is generated from vaccination activities. This includes used syringes, vials, and other materials that may be contaminated with infectious agents.',
        },
        // Waste Characteristics - Specialized  Waste
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: specializedWasteTypeId,
          name: 'Radioactive',
          description: 'Radioactive waste refers to any waste that contains radioactive materials. This includes items such as used medical equipment, vials, and other materials that may contain hazardous substances.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: specializedWasteTypeId,
          name: 'Heavy Metal',
          description: 'Heavy metal waste refers to any waste that contains heavy metals, which are toxic and can pose a risk to human health and the environment.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: specializedWasteTypeId,
          name: 'Pressurized Container',
          description: 'Pressurized container waste refers to any waste that contains pressurized containers, such as aerosol cans or gas cylinders. This includes items such as used containers, tubes, and other materials that may contain hazardous substances.',
        },
        // Waste Characteristics - Organic Waste
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: organicWasteTypeId,
          name: 'Paper',
          description: 'Paper waste refers to any waste that contains paper or paper-based materials. This includes items such as used paper, cardboard, and other materials that can be recycled or composted.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: organicWasteTypeId,
          name: 'Food',
          description: 'Food waste refers to any waste that contains food or food-based materials. This includes items such as used food scraps, packaging materials, and other materials that can be recycled or composted.',
        },
        // Waste Characteristics - Inorganic Waste
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: inorganicWasteTypeId,
          name: 'Metal',
          description: 'Metal waste refers to any waste that contains metal or metal-based materials. This includes items such as used metal scraps, containers, and other materials that can be recycled or reused.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: inorganicWasteTypeId,
          name: 'Plastic',
          description: 'Plastic waste refers to any waste that contains plastic or plastic-based materials. This includes items such as used plastic containers, bags, and other materials that can be recycled or reused.',
        },
        {
          created_by: 'system_init',
          updated_by: 'system_init',
          region_id: indonesiaRegionId,
          parent_hierarchy_id: inorganicWasteTypeId,
          name: 'Disinfection/Autoclave Residue',
          description: 'Disinfection or autoclave residue refers to any waste that remains after the disinfection or autoclaving process. This includes items such as used containers, tubes, and other materials that may contain hazardous substances.',
        },
      ]
    );
    
    return;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('waste_hierarchy', null, {});
  }
};
