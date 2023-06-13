import { Router } from 'express';
const knex = require('knex')(require('../../knexfile.js').development);

const produtosRouter = Router();

const produtos = [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]

// Cria um manipulador da rota padrão
produtosRouter.get('/:id', async (request, response) => {
   await knex('produtos').where('id', request.params.id)
   .first()
    .then((produto: any) => {
         response.status(200).json(produto)
    });

 });

 produtosRouter.get('/', async (request, response) => {
    await knex('produtos').select('*')
    .then((produtos: any) => {
         response.status(200).json(produtos)
    });
 });

 produtosRouter.post('/', async (request, response) => {

   await knex('produtos').insert(request.body, ['id'])
         .then((produtos: any) => {
            if (produtos)
            {
               let id = produtos[0].id;
               response.status(201).json({
                  message: "Produto criado com sucesso",
                  data: {
                     'id': id
                  }
               });
            }
            else
            {
               response.status(400).json(`{messagem: "Erro ao criar o produto"}`);
            }               
         }).catch((err: any) => {
            response.status(500).json(`{messagem: "Erro ao criar o produto: " ${err.message}}`);
         });
 });

 produtosRouter.put('/:id', async (request, response) => {

   const {descricao, valor, marca } = request.body;

   await knex('produtos').where('id', request.params.id)
   .update({
      descricao: descricao,
      marca: marca,
      valor: valor
    }, ['id', 'descricao', 'valor', 'marca'])
    .then((produto: any) => {
         response.status(201).json(produto)
    });    
 });

 produtosRouter.delete('/:id', async (request, response) => {

   await knex('produtos').where('id', request.params.id)
   .del()
    .then((produto: any) => {
      response.status(202).json(`Produto removido na lista`);
    });  
 });

export default produtosRouter;