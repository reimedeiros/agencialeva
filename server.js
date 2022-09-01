const express = require('express');
const path = require('path');
const Leva = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/${Leva}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${Leva}/index.html`));
});

app.listen(process.env.PORT || 8080);
