
function writeCards(name, event){
    const Messages = [];
    for ( let i = 0; i < name.length; i++){
        Messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return Messages;
}
function countDown(number) {
    while(number >= 0){
        console.log(number);
        number--;
    }
}

countDown();

