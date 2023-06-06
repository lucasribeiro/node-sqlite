/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {id: 1, descricao: 'Biscoito de Maizena', marca: 'Aymmoré', valor: 3.5},
    {id: 2, descricao: 'Cerveja 335ml', marca: 'Heineken', valor: 10.99},
    {id: 3, descricao: 'Filé Mignon', marca: 'Marfrig', valor: 78.99},
    {id: 4, descricao: 'Refrigerante 2L', marca: 'Coca-Cola', valor: 15.50}
  ]);
};
