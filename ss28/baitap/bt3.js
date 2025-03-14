const person = {
    title: 'JavaScript Basics',
    author: 'John Smith',
    page: 200,
};
delete person.page;
console.log(person.title); // JavaScript Basics
console.log(person.author); // John Smith
console.log(person.page); // undefined