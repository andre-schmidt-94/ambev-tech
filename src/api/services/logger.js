const pino = require('pino')({
    level: 'info',
    prettyPrint: {
        levelFirst: true,
        colorize: true
    }
});

module.exports = pino;

