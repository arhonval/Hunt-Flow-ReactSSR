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
    await queryInterface.bulkInsert("Stages", [
      {
        name: "Письмо",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Звонок-скрининг",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Видео-интервью",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Резюме у заказчика",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Интервью с заказчиком",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Выставлен оффер",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Вышел на работу",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Отказ",
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
    await queryInterface.bulkDelete("Stages", null, {});
  },
};
