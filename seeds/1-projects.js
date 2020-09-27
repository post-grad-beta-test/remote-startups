exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, user_id: 2, name: 'Remote Startups', description: 'Tech startups from home!', date_start: 20 / 12 / 10, date_end: 20 / 12 / 14 },
        { id: 2, user_id: 3, name: 'Test one', description: 'this is an event', date_start: 20 / 11 / 20, date_end: 20 / 11 / 24 },
        { id: 3, user_id: 2, name: 'test Two', description: 'this is another event', date_start: 20 / 11 / 13, date_end: 20 / 11 / 18 }

      ])
    })
}
