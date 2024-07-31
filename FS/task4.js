const fs = require('fs/promises');

const filePath = 'data.json';

(async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(data);

    const newUser = {
      id: 3,
      name: 'User3',
      age: 18
    };
    users.push(newUser);

    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
})();
