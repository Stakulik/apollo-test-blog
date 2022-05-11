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
      await queryInterface.bulkInsert('Posts', [{
        title: 'Some post',
        body: 'Some body',
        userId: user_id,
        published_at: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        title: 'One more post',
        body: 'One more body',
        userId: user_id,
        published_at: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, {
        title: 'Another post',
        body: 'Another body',
        userId: user_id,
        published_at: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }],
      {});
    }
  }
};
