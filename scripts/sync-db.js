const { sequelize } = require('../src/models');

async function syncDatabase() {
  try {
    console.log('Connecting to database...');
    await sequelize.authenticate();
    console.log('Database connection successful');
    
    console.log('Creating tables from models...');
    await sequelize.sync({ force: false });
    console.log('Database sync completed');
    
    console.log('Database is ready for migrations');
  } catch (error) {
    console.error('Database sync failed:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
