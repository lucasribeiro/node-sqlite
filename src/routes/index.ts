import { Router } from 'express';
import produtosRouter from  './produtos.router';

const routes = Router();

routes.use('/produtos', produtosRouter);

export default routes;