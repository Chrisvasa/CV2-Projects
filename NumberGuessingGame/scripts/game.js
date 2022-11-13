const buttons = document.querySelectorAll('.btn').values;

/*
1. 


*/

buttons.forEach(button => {
    button.addEventListener('click', handleclick, false)
});

function handleclick() {
    console.log(this.textContent);
}



btn.addEventListener("click", function consolePrint() {
    console.log(`${move} was pressed`);

});