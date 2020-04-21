exports.up = function(knex) {
    return knex.schema.createTable('teachers', function (table) {
      table.increments();
      table.string('name').notNullable();
      table.string('whatsapp').notNullable();
      table.string('email').notNullable();
      table.string('email_zoom').notNullable();
      table.string('cpf').notNullable();
      table.string('password').notNullable();
      table.bool('is_active').notNullable();
    });
  };
  
exports.down = function(knex) {
  return knex.schema.dropTable('teachers');
};
