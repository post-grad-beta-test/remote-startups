
exports.up = function(knex) {
    return knex.schema.createTable('users_projects', table => {
        table.foreign('user_id').references('id').inTable('users')
        table.foreign('project_id').references('id').inTable('projects')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users_projects')
  };
  