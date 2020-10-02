exports.up = function (knex) {
  return knex.schema.createTable('chatrooms', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('project_id')
    table.foreign('project_id').references('projects.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('chatrooms')
}
