var id="3_1";
var sid=id.split("");
console.log(sid);
console.log(sid.length);
if(sid.length===3)
console.log(Number(sid[0]-1)*40+Number(sid[2]));
else
console.log(Number(sid[0]-1)*40+Number(sid[2]*10)+Number(sid[3]));