const petModel = require('../model/pet');

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet) ?
            res.send(`${novoPet.nome} foi adicionado com sucesso!`):
            res.send(`Ops, occoreu um erro ao salvar ${novoPet.nome}.`);
    },
    buscar: (req, res) => {
        let nomePet = req.params.nome;
        let petsEncontrados = petModel.buscarPet(nomePet);
        petsEncontrados.length > 0 ?
            res.send(`Foram encontrados <b>${petsEncontrados.length}</b> com o nome <b>${nomePet}</b>`):
            res.send(`Não encontramos nenhum pet com esse nome.`)
    }
};

module.exports = petController;