'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'Frienemies', 'createdAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('Frienemies', 'createdAt');
  }
};
