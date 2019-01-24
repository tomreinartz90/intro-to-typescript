let x1: number = 2;
console.log(`x = ${x1}`);
x1 = "hello";


let str: string = "Hello, World.";
console.log(`str = ${str}`);
str = 2;


let checked: boolean = false;
console.log(`checked = ${checked}`);
checked = "true";

let list: number[] = [1, 2, 3];
list.push(4);
list.push("5");

console.log(`list = ${list}`);

enum Interest {
    Bored = 0,
    Interested = 1,
    Neutral = 2
};


enum Interest2 {
    Bored = "BORED",
    Interested = "INTERESTED",
    Neutral = "NEUTRAL"
};

let myInterest: Interest = Interest2.Bored;
console.log(`Interest Level = ${Interest[myInterest]}`);

function returnsNada(): void {
    return 1;
}

function returnsWhatever(): any {
    if (Math.random() < 0.5) {
        return "1";
    }
    return 1;
}

let result = returnsWhatever();
console.log(`result = ${result}`);