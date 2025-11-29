const { livroModel } = require("../model/livroModel");

const livroController = {
    /**
     * controlador que lista todos os Livros do banco de dados
     * @async
     * @function listarLivros
     * @param {object} req Objeto da quisicao (recebido por http)
     * @param {object} res Objeto da resposta (recebido por http)
     * @returns {Promise<void>} retorna com a lista de Livros
     * @throws Mostra no console e retorna erro 500 se ocorrer falha ao buscar os Livros
     *
     **/
    listarLivros: async (req, res) => {
        
        try {
                    
            const livros = await livroModel.buscarTodos();
            res.status(200).json(livros);

        } catch (error) {
            console.log('erro ao listar Livros', error);
            res.status(500).json({ error: 'Erro ao listar Livros' });

        }

    },
    /**
   * Controlador que cria um novo Livro no banco de dados.
   * 
   * @async
   * @function criarLivro
   * @param {Object} req - Obejto de requisição (recebido por HTTP)
   * @param {Object} res - Obejto de RESPOSTA (recebido por HTTP)
   * @returns {Promise<void>} não retorna nada, apenas executa a inserção
   * @throws {400} Se algum campo obrigatorio não for adicionado
   * @throws {500} Se ocorrer qualquer erro interno no servidor.
   */
    criarLivro: async (req, res) => {
        try {
 
            let { tituloLivro, anoPublicacao,quantDisponivel,nomeAutor } = req.body;

            if (tituloLivro == undefined || anoPublicacao == undefined || quantDisponivel == undefined || nomeAutor == undefined ) {
                return res.status(400).json({ error: "Campos Obrigatorios não preencidos" });

            }

            await livroModel.inserirLivros(tituloLivro, anoPublicacao,quantDisponivel,nomeAutor);

            res.status(201).json({ message: "Livro cadastrado com sucesso!" });

        } catch (error) {
            console.log('erro ao listar Livros', error);
            res.status(500).json({ error: 'Erro ao Cadastrar Livros' });
            res.status(500).json

        }
    },

}

module.exports = { livroController };
