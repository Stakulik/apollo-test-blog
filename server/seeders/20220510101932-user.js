'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      nickname: 'Stakulik',
      email: 'stakulik@example.com',
      password: '123123',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }],
    {});
  }
};
