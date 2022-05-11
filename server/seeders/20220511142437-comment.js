'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const user_id = await queryInterface.rawSelect('Users', {
      where: {
        nickname: 'Stakulik',
      },
      plain: true,
    }, ['id']);

    if (user_id) {
      await queryInterface.bulkInsert('Comments', [{
        body: 'Some comment',
        userId: user_id,
        published_at: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        body: 'One more comment',
        userId: user_id,
        published_at: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        body: 'Another comment',
        userId: user_id,
        published_at: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }],
      {});
    }
  }
};
