const { execSync } = require('child_process');

console.log('Starting database setup...');

try {
  console.log('Running migrations...');
  execSync('npm run db:migrate', { stdio: 'inherit', cwd: process.cwd() });
  console.log('Migrations completed successfully');
  
  console.log('Seeding categories...');
  execSync('npm run db:seed', { stdio: 'inherit', cwd: process.cwd() });
  console.log('Database setup completed successfully');
  console.log('Database is ready to use');
  
} catch (error) {
  console.error('Database setup failed:', error.message);
  process.exit(1);
}
