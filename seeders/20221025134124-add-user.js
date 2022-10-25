'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: 'Jean',
        email: 'correo.correo@coreo.co',
        password: 'abc123'
     },
     {
      name: 'María Paula',
      email: 'paularc717@gmail.com',
      password: 'chacal'
     }
    ], 
     {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
