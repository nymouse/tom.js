

function mouse(name, age, wieght){
	this.name = name;
	this.age = age;
	this.wieght = wieght;
	this.dead = fault
}
mouse.prototype.die = function(){
	this.dead = true
}
var mickey = new mouse("mickey",12,12)
console.log(mickey)

module.exports = mouse;
