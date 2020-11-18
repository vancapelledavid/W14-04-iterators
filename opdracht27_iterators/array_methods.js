let colors =['yellow', 'blue', 'red', 'orange'];
colors.forEach(element => console.log(element))


// 1. while loop = 6 regels; for loop = 4 regels;
// 2. forEach method = 2 regels;
// 3. array method is meer semantisch, is daardoor sneller te begrijpen en doorzien. Ook veel minder foutgevoelig.
// 4. zie code hieronder lijkt me toch op itereren

var obj = {
    name: "Simon",
    age: "20",
    clothing: {
        style: "simple",
        hipster: false
    }
}

for(var propt in obj){
    console.log(propt + ': ' + obj[propt]);
}