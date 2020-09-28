exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_projects').insert([
        { team_id: 1, user_id: 1, project_id: 1 },
        { team_id: 2, user_id: 1, project_id: 2 },
        { team_id: 3, user_id: 1, project_id: 3 },
        { team_id: 4, user_id: 2, project_id: 2 },
        { team_id: 5, user_id: 3, project_id: 1 },
        { team_id: 6, user_id: 3, project_id: 3 }
      ])
    })
}
