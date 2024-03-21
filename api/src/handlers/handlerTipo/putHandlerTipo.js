const {
  putControllerTipo,
} = require('../../controllers/controllersTipo/PutControllerTipo');

const putHandlerTipo = async (req, res) => {
  try {
    const {id} = req.params;

    const dataUpdate = req.body;

    const tipoUpdate = await putControllerTipo(dataUpdate, id);

    return res.status(200).json(tipoUpdate);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {putHandlerTipo};
