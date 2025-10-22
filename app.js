import express from 'express';

//Instancia de la app:
const app = express();

app.use(express.json());

const users = [
        {id: 1, name: 'Alan Covarrubias'},
        {id: 2, name: 'Miguel Alvarez'},
        {id: 3, name: 'Juan Garcia'}
    ];

app.get('/', (req, res) => {
    res.send('<h1>Hello backend!</h1>');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const findUser = users.find(user => user.id == id);
    res.send(findUser);
});

app.post('/users', (req,res)=>{
    const user = req.body;
    users.push(user);
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    console.log(req.body);
    const findUser = users.find(user => user.id == id);
    findUser.nombre = user.nombre;
    res.send(findUser);
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const findUser = users.find(user => user.id == id);
    const index = users.indexOf(findUser);
    users.splice(index, 1);
    res.send(findUser);
});


const port = 3000;
app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});