const student = [
    { id: 21, name: 'omar sunny' },
    { id: 31, name: "mannadey" },
    { id: 35, name: " moyori" },
    { id: 36, name: " deepjol" },
    { id: 37, name: "jems" },
    { id: 38, name: "kumar sanu" },
];
const name = student.map(x => x.name);
const ids = student.map(r => r.id)
const Fil = student.filter(t => t.id > 10);
const Find = student.find(y => y.id > 35)
console.log(Find)