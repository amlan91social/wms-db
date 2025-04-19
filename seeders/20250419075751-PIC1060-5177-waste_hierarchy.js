'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('waste_hierarchy', [{
      created_by: 'system_init',
      updated_by: 'system_init',
      region_id: 1,
      name: 'Medical',
      description: 'Medical Waste',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('waste_hierarchy', null, {});
  }
};
