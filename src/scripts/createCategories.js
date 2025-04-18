const { Category, sequelize } = require('../models');

const categories = [
  'furniture',
  'electronics',
  'clothing',
  'books',
  'toys',
  'kitchen',
  'sports',
  'other'
];

async function createCategories() {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');
    
    for (const categoryName of categories) {
      try {
        await Category.create({ category_name: categoryName });
        console.log(`Category "${categoryName}" created`);
      } catch (error) {
        // Handle unique constraint error
        if (error.name === 'SequelizeUniqueConstraintError') {
          console.log(`Category "${categoryName}" already exists`);
        } else {
          console.error(`Error creating category "${categoryName}":`, error);
        }
      }
    }
    
    console.log('All categories created successfully');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

createCategories();