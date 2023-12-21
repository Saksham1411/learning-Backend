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

getBtn.addEventListener("click",getItems);

async function getItems(){
    const res = await axios.get(URL);
    const notes = res.data;
    ul.innerHTML = "";
    notes.forEach(note => {
        const noteHTML = `
        <li>
            <p>${note.content}</p>
            <button class='del' id="${note._id}">delete</button>
        </li>`


        ul.innerHTML+=noteHTML;
    });
}

document.addEventListener("click",async(e) =>{
    const clickedElement = e.target;
    const hasDel = clickedElement.classList.contains("del");
    if(hasDel){
        const delUrl = `http://localhost:3000/notes/${clickedElement.id}`;
        await axios.delete(delUrl);
        
        console.log("delete");
    }
})