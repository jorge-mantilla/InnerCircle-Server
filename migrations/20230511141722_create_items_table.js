exports.up = function(knex) {
    return knex.schema.createTable('items', (table) => {
        table.uuid('id').primary();
        table
            .uuid('user_id')
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('price').notNullable();
        table.string('image').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('items');
};


// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
//     return knex.schema.createTable('items', (table) => {
//         table.uuid('id').primary();
//         table
//           .uuid('user_id')
//           .references('users.id')
//           .onUpdate('CASCADE')
//           .onDelete('CASCADE');
//         table.string('title').notNullable();
//         table.string('description').notNullable();
//         table.string('price').notNullable();
//         table.string('image').notNullable();
//     });
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//     return knex.schema.dropTable('items');
// };
