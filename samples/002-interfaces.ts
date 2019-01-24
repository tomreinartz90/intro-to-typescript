let objectWithIdentifier: { id: number } = { id: 1 };
//objectWithIdentifier.foo = 'x';
//objectWithIdentifier.id = '5';

interface IHaveAnIdentifier {
    id: number;
}

interface IHaveOneToo {
    id: number;
}

let myObject: IHaveOneToo = { id: 1 };
// myObject.foo = 'x';
// myObject.desc = 'description';

let myObjectToo: IHaveAnIdentifier = myObject;

function showId(obj: IHaveAnIdentifier): void {
    console.log(`Showing id: ${obj.id}`);
}

showId(myObject);
showId({ id: 3.14 }); // <IHaveAnIdentifier>
// showId({id:42, foo: 'x'}) // as IHaveOneToo);

interface IHaveAnOptionalDescription {
    desc?: string;
}

interface IHaveIdAndMaybeDescription extends IHaveAnIdentifier, IHaveAnOptionalDescription {

}

function showDesc(obj: IHaveAnOptionalDescription): void {
    if (obj.desc) {
        console.log(obj.desc);
    }
}

let myObjectWithDescription: IHaveIdAndMaybeDescription = {
    id: 1974,
    desc: "Rock it!"
};

//showDesc(myObject);
showDesc(myObjectWithDescription);

// I am a function: f(r, xn)
interface IXnPlusOne {
    (r: number, xn: number): number;
}

// I am the implementation of the function: x(n+1) = r * xn * (1.0 - xn);
let bifurcation: IXnPlusOne = (r, x) => {
    return r * x * (1.0 - x);
}

let r2: number = 3, x2: number = 0.5, idx2: number = 0;
for (idx2 = 0; idx2 < 10; idx2 += 1) {
    x2 = bifurcation(r2, x2);
    console.log(`bifurcation value: ${x2}`);
}
