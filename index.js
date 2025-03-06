// Add JavaScript below
function orange(){
    alert("hello");
}

window.onload =function(){
const purple = document.getElementById("purple");

purple.addEventListener("click", (event) => {
    orange();
});}