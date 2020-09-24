exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.timestamp('created_at')
    table.string('password_hash')
    table.timestamp('reset_expires_at')
    table.string('reset_password_key')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
