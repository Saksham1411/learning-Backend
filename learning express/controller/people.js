
let {people} = require('../data')

const getPeople = (req, res) => {
    const { name } = req.body;
    res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide the valid input' })
    }
    res.status(201).json({ success: true, person: name });
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide the valid input' })
    }
    res.status(201).send({ success: true, person: [...people, name] })
}

const updatePerson = (req, res) => {  //put method is use to update the data
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

}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide the valid input' })
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    res.status(201).send({ success: true, person: newPeople })

}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    deletePerson,
    updatePerson
}