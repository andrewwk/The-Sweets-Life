
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
  .then(function() {
    return knex('restaurant').del()
      .then(function() {
          return knex('restaurant').insert({name: 'Carol\'s Cupcakes'})
            .then(function() {
              return knex('products').insert({
                restaurant_id: 1,
                name: 'Chocolate Cupcake',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
                price: 2.99
              });
            }).then(function() {
                return knex('products').insert({
                  restaurant_id: 1,
                  name: 'Vanilla Cupcake',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
                  price: 1.99
                });
            }).then(function() {
                return knex('products').insert({
                  restaurant_id: 1,
                  name: 'Blueberry Cupcake',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
                  price: 2.49
                });
            }).then(function() {
                return knex('products').insert({
                  restaurant_id: 1,
                  name: 'Raspberry Cupcake',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
                  price: 2.49
                });
            }).then(function() {
                return knex('products').insert({
                  restaurant_id: 1,
                  name: 'Extreme Chocolate Cupcake',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
                  price: 3.99
                });
            }).then(function() {
                return knex('products').insert({
                  restaurant_id: 1,
                  name: 'Cinnamon Cupcake',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
                  price: 2.99
                });
            });
      });
  });
};