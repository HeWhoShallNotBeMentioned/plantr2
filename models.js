const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardeners', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

const Plot = db.define('plots', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN,
});

const Vegetable = db.define('vegetables', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE,
});

Vegetable.belongsToMany(Plot, { through: 'vegetablesInPlot' });
Plot.belongsToMany(Vegetable, { through: 'vegetablesInPlot' });

Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });
Plot.belongsTo(Gardener);

module.exports = { db, Vegetable, Plot, Gardener };
