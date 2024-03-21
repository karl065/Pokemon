const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const tipo = require('./TipoRoutes/TipoRoutes');
const pokemon = require('./PokemonRoutes/PokemonRoutes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/tipo', tipo);
router.use('/pokemon', pokemon);

module.exports = router;
