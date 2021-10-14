const env = require('./config/env-config')


module.exports = {
    "presets": [
        "next/babel"
    ],
    "plugins": [['transform-define', env]]
}