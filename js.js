let User={
    name:"mada"

    ,
    id:666

    ,
    available:false,
    email:"mada@email,com",
    address:{
        city:"riyadh",
        neighborhood:"Aaridh",
        city:{
        town:"Riyadh",
        district:"Riyadh"
    }},
    skills:["writing","creative","helpful"],
    isAvailable:((available)=>available=true)
}

console.log(User);
console.log(User.name);
User["id"]=777;
console.log(User.id);
console.log(User.email);
delete User.email;

User.isAvailable(User.available);
console.log(User.isAvailable);
console.log(User.address);
console.log(Object.values(User.address.city)[0]);
console.log(User.skills[2]);
console.log(User.skills.join(","));