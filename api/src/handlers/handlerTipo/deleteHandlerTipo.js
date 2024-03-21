const {
  deleteControllerTipo,
} = require('../../controllers/controllersTipo/DeleteControllerTipo');

const deleteHandlerTipo = async (req, res) => {
  try {
    const {id} = req.params;

    const tipoEliminado = await deleteControllerTipo(id);

    return res.status(200).json(tipoEliminado);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {deleteHandlerTipo};
