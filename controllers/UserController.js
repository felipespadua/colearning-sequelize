const db = require("../database/models");

const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await db.user.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).send("Erro ao consultar usuários");
    }
  },
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await db.user.findOne({ where: { id } });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Usuario não encontrado " });
      }
    } catch (error) {
      res.status(500).send("Erro ao consultar usuários");
    }
  },
  async create(req, res) {
    const { body } = req;
    try {
      await db.user.create(body);
      res.send("Usuario criado com sucesso");
    } catch (error) {
      console.log(error)
      res.status(500).send("Erro ao criar usuário");
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const result = await db.user.update(body, { where: { id } });
      if (result[0]) {
        res.json("Usuario atualizado com sucesso");
      } else {
        res.status(404).json({ message: `Usuário de id ${id} não encontrado` });
      }
    } catch (error) {
      res.status(500).send("Erro ao consultar usuários");
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await db.user.destroy({
        where: {
          id,
        },
      });
      if (result) {
        res.json("Usuario excluido com sucesso!");
      } else {
        res.status(404).json({ message: `Usuário de id ${id} não encontrado` });
      }
    } catch (error) {
      res.status(500).send("Erro ao deletar usuário");
    }
  },
};

module.exports = UserController;
