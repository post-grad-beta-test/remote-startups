exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Aidan', last_name: 'Starke', username: 'aidanS', email: 'starke.aidan@gmail.com' },
        { id: 2, first_name: 'Bob', last_name: 'builder', username: 'bbuilder', email: 'builder@gmail.com' },
        { id: 3, first_name: 'Sponge', last_name: 'Squarepants', username: 'SBSquare', email: 'iamsquare@gmail.com' }
      ])
    })
}
