
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');

    table.string('username').notNullable().unique();

    table.string('password').notNullable();

    table
      .integer('deptID') // the column name in this table (users)
      .unsigned()
      .references('id') // primary key in the related (parent) table (roles)
      .inTable('depts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
