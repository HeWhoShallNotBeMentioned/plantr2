const db = require('./models');

db.sync({force: true})
  .then(() => {
    console.log('Database synced!');
  })
  .catch(error => {
    console.log('Something went wrong! Error: ', error);
  })
  .finally(() => {
    db.close();
  })

