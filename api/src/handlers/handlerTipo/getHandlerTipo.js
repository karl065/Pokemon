const {
  getControllerTipo,
} = require('../../controllers/controllersTipo/GetControllerTipo');

const getHandlerTipo = async (req, res) => {
  try {
    const {id, nombre} = req.query;

    const tipos = await getControllerTipo(id, nombre);

    return res.status(200).json(tipos);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {getHandlerTipo};
