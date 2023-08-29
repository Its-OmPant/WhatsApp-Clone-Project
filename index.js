// let dismissable_alert = document.getElementById('alert');
// let delete_btn = document.getElementById('delete')

// delete_btn.onclick = ()=>{
//     dismissable_alert.classList.add('hidden')
// }

let rightDiv = document.getElementById('right')
let chats = document.getElementById('chats')
let back_btn = document.getElementById('back_btn');
let chat_title = document.getElementById('chat_title');

let chats_collection = Array.from(chats.children);

chats_collection.forEach((i)=>{
    i.addEventListener('click', (e)=>{
        // console.log(i);
        let i_name = i.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.textContent;
        chat_title.textContent = i_name;
        // console.log(i_name)
        rightDiv.classList.add('z-50');
    })
})


back_btn.onclick = ()=>{
    rightDiv.classList.remove('z-50');
}