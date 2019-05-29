console.log('------ Task First -------');

const first = "Hello";
const second = "World";

console.log(`${first} ${second}`);

console.log('----- Task Second -----');

const multiply = (x, y = 1) => console.log(`Result ${x} * ${y} = ${x * y}`);

multiply(2, 5);
multiply(6, 6);
multiply(9);

console.log('---- Task Third -----');

const average = (...args) => {
    let result = 0;
    args.forEach(arg => result += arg);
    console.log(`Result = ${result / args.length}`);
};

average(1);
average(1, 3);
average(1, 3, 6, 6, 8);
average(1, 6, 2, 5, 5, 9);

console.log('----- Task Four -----');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

console.log('----- Task Five ------');

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, , lastName] = data;

console.log(`Name: ${firstName} ${lastName}`);