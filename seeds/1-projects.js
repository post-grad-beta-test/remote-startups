exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, user_id: 1, name: 'Remote Startups', description: 'Tech startups from home!', date_start: '23/09/20', date_end: '30/09/20' },
        { id: 2, user_id: 2, name: 'Tea time', description: 'Shopping list based on selected recipes for tea time', date_start: '23/09/20', date_end: '30/09/20' },
        { id: 3, user_id: 3, name: 'Financy', description: 'A website built to help making saving fun and interactive', date_start: '23/09/20', date_end: '30/09/20' }
      ])
    })
}
