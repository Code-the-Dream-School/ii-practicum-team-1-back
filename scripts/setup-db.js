const { execSync } = require('child_process');

console.log('Starting database setup...');

try {
  console.log('Creating database tables from models...');
  execSync('node scripts/sync-db.js', { stdio: 'inherit', cwd: process.cwd() });
  console.log('Database tables created successfully');
  
  console.log('Seeding categories...');
  execSync('npm run db:seed', { stdio: 'inherit', cwd: process.cwd() });
  console.log('Categories created successfully');
  
  console.log('Creating demo users and items...');
  execSync('npm run db:demo', { stdio: 'inherit', cwd: process.cwd() });
  console.log('Demo data created successfully');
  
  console.log('Database setup completed successfully');
  console.log('Database is ready to use with demo data');
  
} catch (error) {
  console.error('Database setup failed:', error.message);
  process.exit(1);
}
