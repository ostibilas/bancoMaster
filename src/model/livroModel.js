const { sql, getConnection } = require("../config/db");

const livroModel = {

    /**
     * busca livros no banco de dados
     * @async
     * @function buscarTodos
     * @returns {Promise<void>} não retorna nada, apenas executa a inserção
     * @throws Mostra no console e propaga o erro
     */
    buscarTodos: async () => {

        try {

            const pool = await getConnection();
            const querySQL = 'SELECT * FROM Livros';
            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {

            console.error("Erro ao buscar livros:", error);
            throw error // reverberar o erro para funcao que 0 chamar.


        }

    },

    /**
     * Insire um livro no banco de dados
     * @async
     * @function inserirLivros
     * @param {string} tituloLivro - nome do livro
     * @param {number} anoPublicacao - ano do livro
     * @param {number} quantDisponivel - quantidade de livros Disponiveis
     * @param {string} nomeAutor - nome do autor
     * @returns {Promise<void>} não retorna nada, apenas executa a inserção
     * @throws Mostra no console e propaga o erro
     */
    inserirLivros: async (tituloLivro, anoPublicacao,quantDisponivel,nomeAutor) => {
        try {
            const pool = await getConnection();
            const querySQL = `
                INSERT INTO Livros (tituloLivro, anoPublicacao,quantDisponivel,nomeAutor)
                VALUES(@tituloLivro, @anoPublicacao,@quantDisponivel,@nomeAutor)
            `
            await pool.request()
                .input("tituloLivro", sql.NVARCHAR(100), tituloLivro)
                .input("anoPublicacao", sql.INT(100), anoPublicacao)
                .input("quantDisponivel", sql.INT(100), quantDisponivel)
                .input("nomeAutor", sql.NVARCHAR(100), nomeAutor)
                .query(querySQL);

            } catch (error) {
            console.error("Erro ao inserir LIVROS:", error);
            throw error // reverberar o erro para funcao que 0 chamar.
        }
    }


}

module.exports = { livroModel };