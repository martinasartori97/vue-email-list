console.log("hello");

const email = [
    "mario.rossi@gmail.com",
    "giulia.bianchi@yahoo.com",
    "marco.verdi@outlook.com",
    "sara.neri@icloud.com",
    "luca.ferri@hotmail.com",
    "chiara.romano@mail.com",
    "antonio.gallo@live.com",
    "elena.moretti@protonmail.com",
    "francesco.rinaldi@zoho.com",
    "laura.conti@aol.com"
];
console.log(email);

//ciclo for
for (let i = 0; i < 10; i++) {
    const element = email[i];

}
console.log(email);

// forEach
email.forEach(element => {
    console.log(email);

});




axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
        console.log(response.data)
    });
    
