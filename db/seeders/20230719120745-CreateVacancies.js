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
    await queryInterface.bulkInsert("Vacancies", [
      {
        name: "Web Developer",
        description: "We are looking for a skilled web developer.",
        needs: "Proficiency in HTML, CSS, and JavaScript.",
        salary: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Software Engineer",
        description: "Join our software engineering team.",
        needs: "Experience in C++, Python, and algorithms.",
        salary: 60000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marketing Specialist",
        description: "We are hiring a marketing specialist.",
        needs: "Experience in digital marketing and social media.",
        salary: 52000,
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
    await queryInterface.bulkDelete("Vacancies", null, {});
  },
};
