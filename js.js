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

characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

  let person =characters.find((person)=>person.eye_color==="blue");
  console.log(person.name);
  let person1 =characters.find((person)=>person.mass>50);
  console.log(person1.gender);
  const result = characters.filter((person) => person.height<200);

  
console.log(result);

const result2 = characters.filter((person) => person.gender==="male");

  
console.log(result2);

const result3 = characters.map((person) => person["name"]);

  
console.log(result3);

const result4 = characters.map((person) => person["height"]);

  
console.log(result4);


console.log(characters.sort((a, b) => a.mass - b.mass));

console.log(characters.sort((a, b) => a.height - b.height).reverse());

console.log(characters.every((person)=>person.mass>40));
console.log(characters.every((person)=>person.height>200));

console.log(characters.some((person)=>person.eye_color==="blue"));

console.log(characters.some((person)=>person.height>210));