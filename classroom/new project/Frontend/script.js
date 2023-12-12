const input = document.querySelector('input');
const ul = document.querySelector('ul');
const addBtn = document.querySelector('#add-btn');
const getBtn = document.querySelector('#get-btn');

const URL = 'http://localhost:3000/notes';

addBtn.addEventListener("click",async ()=>{
    const content = input.value;
    const newNote = {
        content
    }
    try {
        await axios.post(URL,newNote)
        alert("note created");
    } catch (error) {
        console.log(error);
        alert("not is not created");
    }
})

getBtn.addEventListener("click",async()=>{
    const res = axios.get(URL);
})