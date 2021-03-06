
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'blog app', description: 'personal blog chronicaling my exploration of creative coding', complete: 0},
        {id: 2, name: 'notes app', description: 'notes taking app for younger sister', complete: 0},
        {id: 3, name: 'OilBay website', description: 'band website for friends looking to not use wix or squarespace', complete: 0}
      ]);
    });
};
