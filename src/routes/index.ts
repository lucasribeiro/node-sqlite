import { Router } from 'express';
import produtosRouter from  './aparelhos.router';

const routes = Router();

routes.use('/aparelhos', produtosRouter);

export default routes;