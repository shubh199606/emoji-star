const stars = document.querySelectorAll(".fa-star") 
const emojis = document.querySelectorAll(".far")
const colorArray = ["red","orange","lightblue","lightgreen","green"]
updatedRating(0);

stars.forEach((stars,index)=>{
    stars.addEventListener("click",()=>{
        updatedRating(index)
    })
})
function updatedRating(index){
stars.forEach((stars,idx)=>{
if(idx<index+1){
    stars.classList.add("active")
}else{
    stars.classList.remove("active")
}
});
emojis.forEach((emojis)=>{
    emojis.style.transform= `translateX(-${index*50}px)`;
    emojis.style.color = colorArray[index]
})
}