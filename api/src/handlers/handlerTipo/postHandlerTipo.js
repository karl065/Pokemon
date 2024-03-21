const {
  postControllerTipo,
} = require('../../controllers/controllersTipo/PostControllerTipo');

const postHandlerTipo = async (req, res) => {
  try {
    const nuevoTipo = req.body;
    const tipoCreado = await postControllerTipo(nuevoTipo);
    return res.status(200).json(tipoCreado);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {postHandlerTipo};
