module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "apollo_blog_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "migrationStorage": "json"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "apollo_blog_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "apollo_blog_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
