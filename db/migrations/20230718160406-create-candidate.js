'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vacancy_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vacancies',
          key: 'id',
        },
      },
      first_name: {
        type: Sequelize.STRING,
      },
      middle_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      experience_age: {
        type: Sequelize.INTEGER,
      },
      phone_number: {
        type: Sequelize.BIGINT,
      },
      email: {
        type: Sequelize.STRING,
      },
      pdf: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.STRING,
      },
      stage_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidates');
  },
};
