import { Router } from 'express';
import produtosRouter from  './aparelhos.router';
import segurancaRouter from './seguranca.router';

const routes = Router();

routes.use('/aparelhos', produtosRouter);
routes.use('/seguranca', segurancaRouter);

export default routes;