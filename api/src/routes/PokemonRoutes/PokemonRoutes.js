const {
  deleteHandlerPokemon,
} = require('../../handlers/handlerPokemon/deleteHandlerPokemon');
const {
  getHandlerPokemon,
} = require('../../handlers/handlerPokemon/getHandlerPokemon');
const {
  postHandlerPokemon,
} = require('../../handlers/handlerPokemon/postHandlerPokemon');
const {
  putHandlerPokemon,
} = require('../../handlers/handlerPokemon/putHandlerPokemon');

const router = require('express').Router();

router.post('/', postHandlerPokemon);
router.delete('/:id', deleteHandlerPokemon);
router.put('/:id', putHandlerPokemon);
router.get('/', getHandlerPokemon);

module.exports = router;
