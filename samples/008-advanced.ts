type Awesomeness = "Low" | "Medium" | "High";

interface Advocate {
    name: string;
    twitter: string;
    awesome: Awesomeness;
}

let advocate: Advocate = { name: "Jeremy Likness", twitter: "@JeremyLikness", awesome: "High" };
let advocate2: Advocate = { name: "John Papa", twitter: "@John_Papa", awesome: "Low" };

const getProperty = (adv: Advocate, key: keyof Advocate) => adv[key];
console.log(getProperty(advocate, "twitter"));
//console.log(getProperty(advocate, "linkedin"));

console.log("...");

// explicit type guard
const isNumber = (inp: any): inp is number => {
    console.log(`inp: ${inp} typeof inp: ${typeof inp}`);
    return typeof inp === "number";
}

let test:any = 5;
console.log(test.toFixed(0)); // no intellisense
if (isNumber(test)) {
    console.log(test.toFixed(0)); // intellisense
}

let secret:any = "my secret";
console.log(secret.charAt(0)); // no intellisense
if (typeof secret === "string") { // implicit type guard
    console.log(secret.charAt(0)); // intellisense
}