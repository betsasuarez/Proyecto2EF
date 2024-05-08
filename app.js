const express = require('express');
const app = express();
const playersRoutes = require('./routes/players-routes');

app.use('/api/players', playersRoutes);

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
