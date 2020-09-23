exports.up = function (knex) {
  return knex.schema.createTable('users_projects', (table) => {
    table.integer('user_id')
    table.integer('project_id')
    table.increments('team_id')
    table.foreign('user_id').references('users.id')
    table.foreign('project_id').references('projects.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users_projects')
}
