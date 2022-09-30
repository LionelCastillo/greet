function greet(person){
    console.log("!Buen dia ", person,"!");
}    
greet("Anakin");

//Nivel 2
function greet2(person, hora){
    if(hora > 12){
        console.log("!Buenas tardes ", person,"!");
}    
    else{
        console.log("!Buen dia ", person,"!")
    }
}
greet2("Anakin", 17);

//Nivel 3
function greet3(person, hora){
    if(person == "Count Dooku"){
        console.log("¡Voy por ti, Dooku!")}
    else{
        if(hora > 12){
        console.log("!Buenas tardes ", person,"!");
        }    
        else{
        console.log("!Buen dia ", person,"!")
        }
    }
}
greet3("Count Dooku", 17);
