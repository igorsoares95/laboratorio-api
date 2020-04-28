exports.up = function(knex) {
    return knex.schema.createTable('classrooms', function (table) {
      table.increments();
      table.string('code').notNullable();
      table.string('schedule').notNullable();
      table.datetime('start_date').notNullable();
      table.integer('teacher_id').notNullable();
      table.foreign('teacher_id').references('id').inTable('teachers');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('classrooms');
  };