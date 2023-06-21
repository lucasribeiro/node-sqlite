/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("usuarios", tbl => {
        tbl.increments ('id');
        tbl.text ("nome", 255).notNullable();
        tbl.text ("email", 128).unique ().notNullable();
        tbl.text ("senha", 255).notNullable();
    });    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("usuarios");
};
