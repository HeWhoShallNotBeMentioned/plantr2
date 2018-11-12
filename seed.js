const { db, Vegetable, Plot, Gardener } = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    let veg1 = Vegetable.create({
      name: 'carrot',
      color: 'orange',
      planted_on: '2018-06-1',
    });
    let veg2 = Vegetable.create({
      name: 'cabbage',
      color: 'green',
      planted_on: '2018-04-22',
    });
    let veg3 = Vegetable.create({
      name: 'pumpkin',
      color: 'black',
      planted_on: '2018-10-31',
    });
    return Promise.all([veg1, veg2, veg3]);
  })
  .then(() => {
    return Gardener.create({
      name: 'Jay',
      age: 22,
      favoriteVegetableId: 2,
    }).then(gardener => {
      console.log('gardner.....................', gardener.id);
      return Plot.create({
        size: 100,
        shaded: 'yes',
        gardenerId: gardener.id,
      });
    });
  })

  .catch(error => {
    console.log('Something went wrong! Error: ', error);
  })
  .finally(() => {
    db.close();
  });
