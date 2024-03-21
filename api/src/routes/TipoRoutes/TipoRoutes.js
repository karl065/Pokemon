const {
  deleteHandlerTipo,
} = require('../../handlers/handlerTipo/deleteHandlerTipo');
const {getHandlerTipo} = require('../../handlers/handlerTipo/getHandlerTipo');
const {postHandlerTipo} = require('../../handlers/handlerTipo/postHandlerTipo');
const {putHandlerTipo} = require('../../handlers/handlerTipo/putHandlerTipo');

const router = require('express').Router();

router.post('/', postHandlerTipo);
router.get('/', getHandlerTipo);
router.put('/:id', putHandlerTipo);
router.delete('/:id', deleteHandlerTipo);

module.exports = router;
