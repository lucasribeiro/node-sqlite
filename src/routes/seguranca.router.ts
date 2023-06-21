import { Router } from 'express';
import { hash } from 'bcryptjs';
const knex = require('knex')(require('../../knexfile.js').development);

const segurancaRouter = Router();


segurancaRouter.post('/register', async (request, response) => {

    const { nome, email, senha } = request.body;

    const hashPassword = await hash(senha, 8);

    await knex('usuarios').insert({nome: nome, email: email, senha: hashPassword}, ['id'])
    .then((seguranca: any) => {
       if (seguranca)
       {

          let id = seguranca[0].id;
          response.status(201).json({
             message: "Usuário criado com sucesso",
             data: {
                'id': id
             }
          });
       }
       else
       {
          response.status(400).json(`{messagem: "Erro ao criar o usuário"}`);
       }               
    }).catch((err: any) => {
       response.status(500).json(`{messagem: "Erro ao criar o usuário: " ${err.message}}`);
    });    
});    

export default segurancaRouter;


