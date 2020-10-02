exports.up = function (knex) {
  return knex.schema.createTable('chatRoomMessages', (table) => {
    table.increments('id')
    table.text('message')
    table.integer('chatroom_id')
    table.integer('user_id')
    table.foreign('chatroom_id').references('chatrooms.id')
    table.foreign('user_id').references('users.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('chatRoomMessages')
}
