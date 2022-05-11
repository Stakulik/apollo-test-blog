const DateTime = require('./custom_scalars/date_time');

const resolvers = {
  Query: {
    posts: (_, __, {models}) => {
      return models.Post.findAll({
        include: {
          model: models.User,
          as: 'user',
          required: true
        },
        order: [
          ['published_at', 'DESC']
        ]
      })
    },
    post: (_, {id}, {models}) => {
      return models.Post.findByPk(id);
    }
  },
  Post: {
    author: (post) => {
      return post.getUser();
    },
  },
  DateTime: DateTime
}

module.exports = resolvers;
