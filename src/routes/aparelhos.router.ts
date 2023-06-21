import { Router } from 'express';
const knex = require('knex')(require('../../knexfile.js').development);

const aparelhosRouter = Router();

// Cria um manipulador da rota padrão
aparelhosRouter.get('/:id', async (request, response) => {
   await knex('aparelhos').where('id', request.params.id)
   .first()
    .then((produto: any) => {
      if (produto)
      {
         response.status(200).json(produto)
      }
      else
      {
         response.status(400).json(`{messagem: "Aparelho não encontrado"}`);
      }   
   });


 });

 aparelhosRouter.get('/', async (request, response) => {
    await knex('aparelhos').select('*')
    .then((aparelhos: any) => {
         response.status(200).json(aparelhos)
    });
 });

 aparelhosRouter.post('/', async (request, response) => {

   await knex('aparelhos').insert(request.body, ['id'])
         .then((aparelhos: any) => {
            if (aparelhos)
            {
               let id = aparelhos[0].id;
               response.status(201).json({
                  message: "Aparelho criado com sucesso",
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

 aparelhosRouter.put('/:id', async (request, response) => {

   const {descricao, valor, marca } = request.body;

   await knex('aparelhos').where('id', request.params.id)
   .update({
      descricao: descricao,
      marca: marca,
      valor: valor
    }, ['id', 'descricao', 'valor', 'marca'])
    .then((produto: any) => {
         response.status(201).json(produto)
    });    
 });

 aparelhosRouter.delete('/:id', async (request, response) => {

   await knex('aparelhos').where('id', request.params.id)
   .del()
    .then((produto: any) => {
      response.status(202).json(`Aparelho removido na lista`);
    });  
 });

export default aparelhosRouter;