'use strict';

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
    await queryInterface.bulkInsert('Candidates', [
      {
        vacancy_id: 1,
        first_name: 'John',
        middle_name: 'Doe',
        last_name: 'Smith',
        experience_age: 5,
        phone_number: 1234567890,
        email: 'john.doe@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
        stage_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vacancy_id: 2,
        first_name: 'Jane',
        middle_name: 'Smith',
        last_name: 'Doe',
        experience_age: 3,
        phone_number: 9876543210,
        email: 'jane.smith@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
        stage_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vacancy_id: 3,
        first_name: 'Michael',
        middle_name: 'Johnson',
        last_name: 'Brown',
        experience_age: 7,
        phone_number: 5555555555,
        email: 'michael.johnson@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
        stage_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vacancy_id: 1,
        first_name: 'Emily',
        middle_name: 'Williams',
        last_name: 'Anderson',
        experience_age: 2,
        phone_number: 4444444444,
        email: 'emily.williams@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
        stage_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vacancy_id: 2,
        first_name: 'William',
        middle_name: 'Davis',
        last_name: 'Wilson',
        experience_age: 4,
        phone_number: 7777777777,
        email: 'william.davis@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
        stage_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vacancy_id: 3,
        first_name: 'Olivia',
        middle_name: 'Johnson',
        last_name: 'Smith',
        experience_age: 1,
        phone_number: 6666666666,
        email: 'olivia.johnson@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
        stage_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vacancy_id: 1,
        first_name: 'John',
        middle_name: 'Johnson',
        last_name: 'Connor',
        experience_age: 1,
        phone_number: 8967666666,
        email: 'john.johnson@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
        stage_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vacancy_id: 2,
        first_name: 'Sarah',
        middle_name: 'Johnson',
        last_name: 'Connor',
        experience_age: 2,
        phone_number: 6666566666,
        email: 'sarah.johnson@example.com',
        pdf: '/uploadspdf/1.pdf',
        photo: '/uploadsphoto/Ya.jpg',
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
    await queryInterface.bulkDelete('Candidates', null, {});
  },
};
