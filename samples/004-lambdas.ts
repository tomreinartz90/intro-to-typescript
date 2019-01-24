// see the difference in "this" using lambdas 

let x4 = 42; // outside everything

const app4 = () => {

    this.x4 = 12;

    // iterations as a function, not a lambda expression
    let app4_x4 = this.x4;
    function iterations() {
        let idx: number;
        for (idx = 0; idx < 10; idx += 1) {
            app4_x4 += 1;
            // what is "this"?
            console.log(`iterations_x: ${app4_x4}`);
            // nested function 
            setTimeout(function () {
                console.log(`iterations: ${app4_x4}`);
            }, 0);
        }
    }

    // iterations as a lambda expression 
    let lambda = () => {
        let idx: number;
        for (idx = 0; idx < 10; idx += 1) {
            this.x4 += 1;
            console.log(`lambda_x: ${this.x4}`);
            // nested lambda expression
            setTimeout(() => console.log(`lambda: ${this.x4}`), 0);
        }
    }

    // try it old school 
    iterations();

    // now with lambda
    // lambda();
};

// call the whole thing
app4();