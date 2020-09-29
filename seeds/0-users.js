exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Aidan', last_name: 'Starke', username: 'aidanS', email: 'starke.aidan@gmail.com', image: 'gee_mee_012' },
        { id: 2, first_name: 'Shane', last_name: 'Chapman', username: 'Chap', email: 'test@mail.com', image: 'gee_mee_011' },
        { id: 3, first_name: 'Tia', last_name: 'Te Hiko', username: 'Tia', email: 'test@mail.com', image: 'gee_mee_025' }
      ])
    })
}
