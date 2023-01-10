let myEmojis=["a","s","r"]

const emjContainer=document.getElementById("emContainer")
const pushBtn=document.getElementById("push-btn")
const emojiInput=document.getElementById("emoji-input")
const unshiftBtn=document.getElementById("unshift-btn")
const popBtn=Document.getElementById("pop-btn")
const shiftBtn=document.getElementById("shift-btn")

function render(){
    emjContainer.innerHTML=""
    for(let i=0;i<myEmojis.length;i++)
{
    // emContainer.innerHTML+=`<span> ${myEmojis[i]} </span>`
    //or
    let emoji=document.createElement('span')
    emoji.textContent=myEmojis[i]
    emjContainer.append(emoji)
}
}

render()

pushBtn.addEventListener("click", function(){

    // if(emojiInput.value!=""){ //if true 
    if(emojiInput.value){ // if true
    myEmojis.push(emojiInput.value)
    emojiInput.value=""
    // console.log(emojiInput.value)
    render()
    }
})

unshiftBtn.addEventListener("click",function(){
    myEmojis.unshift(emojiInput.value)
    emojiInput.value=""
    render()
})

// popBtn.addEventListener("click",function(){
//     myEmojis.pop()
//     render()
// })
// shiftBtn.addEventListener("click",function(){
//     myEmojis.shift()
//     render()
// })

