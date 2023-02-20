let x = 5; // var x = 5;

const y = 10;

x = 15;

console.log(x);

console.log('const' + y);

if(true) {
    let x = 20;

    console.log(x);

    const y =50;

    console.log('const if' + y);
}

console.log(x);

if(20 > 10) {
    const y = 100;

    console.log('const if 3' + y);
}
