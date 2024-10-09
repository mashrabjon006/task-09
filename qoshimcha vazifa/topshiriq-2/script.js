


var pro=prompt("so'z kiriting! (olma, davlat, xalq, dasturchi, dasturlash, google, boolean)");
var a=false;
var arr = ["olma","davlat","xalq","dasturchi","dasturlash","google","boolean"];
function name() {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == pro) {
			console.log(arr[i] + " so'zi bor");
			a=true;
		}
	}
	if (!a) {
	console.log("Yo'q so'z kiritildi.");
	}
}
console.log(name());

//So'zlardan iborat array berilgan bo'lsin. So'zlarni ichidan funksiya
//parametri sifatida berilgan so'z topilsin. 
//Array : ["olma","davlat","xalq","dasturchi","dasturlash","google","boolean"]
