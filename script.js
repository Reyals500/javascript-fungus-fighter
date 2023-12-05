// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//creating an object array with all the attack names 
let attack = [
{
    name: 'Arcane Septar',
    apCost: 12,
    hpDamage: 14
},
{
    name: 'Entangle',
    apCost: 23,
    hpDamage: 9
},
{
    name: 'Dragon Blade',
    apCost: 38,
    hpDamage: 47
},
{
    name: 'Star Fire',
    apCost: 33,
    hpDamage: 25
}
]

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

//start by making a function
function onAttackCommand(event){
    event.preventDefault()
    console.log('Inside the attack function');

}