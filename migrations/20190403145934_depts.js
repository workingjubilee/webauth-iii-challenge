
exports.up = function(knex) {
  return knex.schema.createTable('depts', table => {
    table.increments('id');

    table.string('department')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('depts')
};
