exports.up = function(knex) {
    return knex.schema.createTable('students', function (table) {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.decimal('email_zoom').notNullable();
      table.string('whatsapp').notNullable();
      table.string('duration').notNullable();
      table.string('classroom_id').notNullable();
      table.foreign('classroom_id').references('id').inTable('classrooms');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('students');
  };