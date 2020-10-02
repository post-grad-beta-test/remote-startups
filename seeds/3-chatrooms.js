exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('chatrooms')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('chatrooms').insert([
        { id: 1, name: 'Remote Startups', project_id: 1 },
        { id: 2, name: 'Tea Time', project_id: 2 },
        { id: 3, name: 'financy', project_id: 3 },
      ])
    })
}
