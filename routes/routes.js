const pool = require('../data/config');

const router = (app) => {
app.get('/', (request, response) => {
    response.send({
        message: 'Bienvenido a Node.js Express REST API con Juan Carlos Guerrro  '
    });
});
app.get('/users', async (request, response) => {
    const db = await pool;
    const result = await db.request().query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
        response.send(result.recordset);
    });
});

app.get('/users/:id', async (request, response) => {
    const db = await pool;
    const id = request.params.id;
    const result = await db.request().query(`SELECT * FROM users WHERE id = ${id}`, (error, result) => {
        if (error) throw error;
        response.send(result.recordset);
    });
});

app.post('/users', async (req, res) => {
    const { id, nombre, apellido } = req.body;
    try {
        const db = await pool;
        const result = await db.request()
            .input('id', id)
            .input('nombre', nombre)
            .input('apellido', apellido)
            .query('INSERT INTO users (id, nombre, apellido) VALUES (@id, @nombre, @apellido)');
        res.send(result.rowsAffected);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting user');
    }
});

app.put('/users/:id', async (request, response) => {
    const db = await pool;
    const { id } = request.params;
    const { nombre, apellido } = request.body;

    const result = await db.request()
        .input('nombre', nombre)
        .input('apellido', apellido)
        .input('id', id)
        .query('UPDATE users SET nombre = @nombre, apellido = @apellido WHERE id = @id');
    response.send(result);
});

app.delete('/users/:id', async (request, response) => {
    const db = await pool;
    const id = request.params.id;
    const result = await db.request().query(`DELETE FROM users WHERE id = ${id}`, (error, result) => {
        if (error) throw error;
        response.send(result.recordset);
    });
});

app.get('/productos', async (request, response) => {
  const db = await pool;
  const result = await db.request().query('SELECT * FROM productos', (error, result) => {
    if (error) throw error;
    response.send(result.recordset);
  });
});

app.get('/productos/:id', async (request, response) => {
  const db = await pool;
  const id = request.params.id;
  const result = await db.request().query(`SELECT * FROM productos WHERE id = ${id}`, (error, result) => {
    if (error) throw error;
    response.send(result.recordset);
  });
});

app.post('/productos', async (req, res) => {
  const { id, nombre, descripcion } = req.body;
  try {
    const db = await pool;
    const result = await db.request()
      .input('id', id)
      .input('nombre', nombre)
      .input('descripcion', descripcion)
      .query('INSERT INTO productos (id, nombre, descripcion) VALUES (@id, @nombre, @descripcion)');
    res.send(result.rowsAffected);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting product');
  }
});

app.put('/productos/:id', async (request, response) => {
  const db = await pool;
  const { id } = request.params;
  const { nombre, descripcion } = request.body;

  const result = await db.request()
    .input('nombre', nombre)
    .input('descripcion', descripcion)
    .input('id', id)
    .query('UPDATE productos SET nombre = @nombre, descripcion = @descripcion WHERE id = @id');
  response.send(result);
});

app.delete('/productos/:id', async (request, response) => {
  const db = await pool;
  const id = request.params.id;
  const result = await db.request().query(`DELETE FROM productos WHERE id = ${id}`, (error, result) => {
    if (error) throw error;
    response.send(result.recordset);
  });
});
};

module.exports = router;