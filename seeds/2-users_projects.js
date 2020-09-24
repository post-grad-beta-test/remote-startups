
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_projects').insert([
        { user_id: 1, project_id: 1 }
      ]);
    });
};
