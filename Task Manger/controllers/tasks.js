const getAllTasks = ((req,res)=>{
    res.send('workingg')
})

const createTask = (req,res) => {
    res.json(req.body);
} 
const getTask = (req,res) => {
    res.json({ id: req.params.id});
} 
const updateTask = (req,res) => {
    res.send('update task');
} 
const deleteTask = (req,res) => {
    res.send('create task');
} 

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};