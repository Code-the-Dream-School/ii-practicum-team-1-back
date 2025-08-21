# Database Setup for Render Deployment

## When Render deletes the database after 90 days

### 1. Create a new PostgreSQL database on Render
1. Go to [render.com](https://render.com)
2. Click "New +" → "PostgreSQL"
3. Fill in:
   - Name: `kindnet-db`
   - Database: `kindnet`
   - User: `kindnet_user`
   - Plan: Free

### 2. Update .env file
Copy the new connection details from Render to your `.env`:
```
DB_NAME=kindnet
DB_USER=kindnet_user
DB_PASSWORD=[new_password_from_render]
DB_HOST=[new_host_from_render]
DB_PORT=5432
```

### 3. Run database setup
```bash
npm run db:reset
```

This script will:
- Run all migrations
- Create categories
- Setup database for production

### 4. Test connection
```bash
npm run dev
```

## Alternative commands

```bash
# Migrations only
npm run db:migrate

# Categories only
npm run db:seed

# Full setup (migrations + categories)
npm run db:setup
```

## Automatic production deployment

Add to your Render Web Service settings:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

The `build` script will automatically setup the database during deployment.
