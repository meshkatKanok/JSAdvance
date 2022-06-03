const ages=[12,11,14,16,17,10];
const ages2=[3,4,5,6,7,8,9,012];
const allages =[...ages,...ages2];
// const t=allages.reduce((previousValue,currentValue)=>
// previousValue+currentValue
// );
console.log(allages);

const business=650;
const minister=450;
const sochib=250;
const maximam=Math.max(business,minister,sochib);
console.log(maximam);

const tkpoisa=[650,450,250];
const max=Math.max(...tkpoisa);
console.log(max)