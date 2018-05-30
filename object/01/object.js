var user = {};
console.log('user.name: ' + user.name);
user.name = 'Вася';
console.log('user.name: ' + user.name);
user['surname'] = 'Петров';
console.log('user surname: ' + user.surname);
user['name'] = 'Сергей';
console.log('user.name: ' + user.name);
delete user.name
console.log('user.name: ' + user.name);