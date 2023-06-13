/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('aparelhos').del()
  await knex('aparelhos').insert([
    { id: 1, descricao: "Galaxy S22", valor: 4500.00, marca: "Samsung"  },
    { id: 2, descricao: "iPhone 14", valor: 7000.00, marca: "Apple"  },
    { id: 3, descricao: "Moto G9", valor: 2500.00, marca: "Motorola"  },
    { id: 4, descricao: "Egde 5G", valor: 5000.00, marca: "Motorola"  },
    { id: 5, descricao: "Xperia Z9", valor: 8000.00, marca: "Sony"  },
  ]);
};
