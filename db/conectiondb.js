const knex = require('knex');

const base = knex({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: '',
      password: '',
      database: 'app'
    },
    pool: { min: 0, max: 7 }
  })

  module.exports = {base}