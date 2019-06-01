const bodyParser = require('body-parser');
const path = require("path");


module.exports = (app, express) => {
    app.use(express.static(path.resolve(__dirname, "../../build")));
    app.use(bodyParser.json());

}
