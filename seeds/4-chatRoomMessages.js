exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('chatRoomMessages')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('chatRoomMessages').insert([
        { id: 1, message: 'Hello my pretties', chatroom_id: 1, user_id: 2 },
        { id: 2, message: 'Yo whatsup', chatroom_id: 1, user_id: 1 },
        { id: 3, message: 'Hello my friend', chatroom_id: 1, user_id: 1 },
      ])
    })
}
