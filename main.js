import LinkedList from './linkedList.js';

const list = new LinkedList();

console.log('initial size:', list.size());

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log('toString:', list.toString());
console.log('appended size:', list.size());
// console.log('head:', list.head);
// console.log('tail:', list.tail());
// console.log('at (-1):', list.at(-1));
// console.log('at (0):', list.at(0));
// console.log('at (2):', list.at(2));
// console.log('at (4):', list.at(4));
// list.pop();
// console.log('toString:', list.toString());
// console.log('contains(parrot):', list.contains('parrot'));
// console.log('contains(frog):', list.contains('frog'));
// console.log('find(hamster)', list.find('hamster'));
// console.log('find(rabbit)', list.find('rabbit'));
// list.insertAt('frog',1);

console.log('toString:', list.toString());