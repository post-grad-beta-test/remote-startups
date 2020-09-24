
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Aidan', last_name: 'Starke', email: 'starke.aidan@gmail.com' }
      ]);
    });
};
