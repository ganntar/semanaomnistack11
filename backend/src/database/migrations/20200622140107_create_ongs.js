
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
  };
  //comando para criar o migrate: npx knex migrate:make nomedobanco
  //comando para executar: npx knex migrate:latest
  
  