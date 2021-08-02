const raw = localStorage.getItem("player");
const person = JSON.parse(raw);
localStorage.clear();
if(localStorage.getItem("player")) {
	for(let i = 0; i < level.array.length; i++) {
        level.array[i].array = person.arrayLevel[i].array;
        level.array[i].complete = person.arrayLevel[i].complete;
        level.array[i].read();
	}
	
} 

function localStorageReturn() {
	let storage = {
	arrayLevel: [],
}
	
	for(let i = 0; i < level.array.length; i++) {
            storage.arrayLevel[i] = level.array[i];
	}
	
	localStorage.setItem("player", JSON.stringify(storage));
}