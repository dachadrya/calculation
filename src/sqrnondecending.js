export function sqrnondecending(nums){
let sqr=[];
 sqr=nums.map((e)=> e*e ); 
 //const sortsqr= [...sqr];
 //const decsortsqr=[sortsqr.reverse()];
 console.log(sqr);
let sqrA=sqr.sort((function(a, b){return a-b}));
let sqrB=sqrA.join(", ");
console.log(sqrA);
return sqrB;

}

