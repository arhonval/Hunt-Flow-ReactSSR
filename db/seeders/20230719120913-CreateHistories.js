"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Histories", [
      {
        candidate_id: 1,
        stage_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        candidate_id: 2,
        stage_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        candidate_id: 3,
        stage_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        candidate_id: 4,
        stage_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        candidate_id: 5,
        stage_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        candidate_id: 6,
        stage_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        candidate_id: 7,
        stage_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        candidate_id: 8,
        stage_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Histories", null, {});
  },
};
