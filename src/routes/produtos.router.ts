import { Router } from 'express';

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
    const id: number = parseInt(request.params.id, 10);

    const produto = produtos.find(p => p.id === id);

    response.status(200).json(produto);

 });

 produtosRouter.get('/', async (request, response) => {
    response.status(200).json(produtos);

 });

 produtosRouter.post('/', (request, response) => {
    console.log(request.body);
    const {descricao, valor, marca } = request.body;

    const id = Math.max(...produtos.map(p => p.id)) + 1;
    console.log(id);
    produtos.push({id, descricao, valor, marca});
    response.status(200).send(`Produto ${descricao} gravado na lista`);
 });

 produtosRouter.put('/:id', (request, response) => {
    
    const id: number = parseInt(request.params.id, 10);

    const index = produtos.findIndex(p => p.id === id);

    const {descricao, valor, marca } = request.body;

    produtos[index].descricao = descricao;
    produtos[index].marca = marca;
    produtos[index].valor = valor;
    
    response.status(201).json(produtos[index]);
 });

 produtosRouter.delete('/:id', async (request, response) => {
    const id: number = parseInt(request.params.id, 10);

    const index = produtos.findIndex(p => p.id === id);

    produtos.splice(index, 1);

    response.status(202).json(`Produto removido na lista`);

 });

export default produtosRouter;