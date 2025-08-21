#!/bin/bash

echo "Starting database setup..."

echo "Running migrations..."
npm run db:migrate

if [ $? -eq 0 ]; then
    echo "Migrations completed successfully"
    
    echo "Seeding categories..."
    npm run db:seed
    
    if [ $? -eq 0 ]; then
        echo "Database setup completed successfully"
        echo "Database is ready to use"
    else
        echo "Seeding failed"
        exit 1
    fi
else
    echo "Migrations failed"
    exit 1
fi
