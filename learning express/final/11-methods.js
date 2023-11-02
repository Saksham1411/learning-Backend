const express = require('express');
const app = express();

let { people } = require('./data');

//static assets
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false })); // built-in middleware function yeh url-encoded data ko json type me convert krdeta hai
// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
    const { name } = req.body;
    res.status(200).json({ success: true, data: people });
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide the valid input' })
    }
    res.status(201).json({ success: true, person: name });
})



app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide the valid input' })
    }
    res.status(201).send({ success: true, person: [...people, name] })
})

app.post('/login', (req, res) => {
    //console.log(req.body);// this is url-encoded data
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {  //put method is use to update the data
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide the valid input' })
    }
    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })

    return res.status(201).json({ success: true, person: [newPerson] });

})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide the valid input' })
    }

    const newPeople = people.filter((person)=> person.id !== Number(req.params.id));
    res.status(201).send({ success: true, person: newPeople })

})

app.listen(5000, () => {
    console.log("server is running.....");
})



// 6.49
// post method



