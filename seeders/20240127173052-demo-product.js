'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [{
      name: 'BTS JUNGKOOK',
      description: 'Lorem ipsum dolo amet, consectetur adipiscing elit. Integer iaculis sagittis purus, at mollis sem dapibus in. Donec vehicula iaculis nunc quis volutpat. Maecenas ipsum tellus, maximus feugiat orci non, scelerisque ornare nulla. Nunc faucibus vivamus.',
      image_product: 'test',
      price: '200000',
      sku:"test",
      categories_id:"1",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
