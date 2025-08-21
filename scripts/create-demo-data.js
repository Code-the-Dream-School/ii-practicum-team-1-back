const { User, Item, Category, sequelize } = require('../src/models');
const bcrypt = require('bcrypt');

const demoUsers = [
  {
    email: 'sarah.johnson@example.com',
    password: 'password123',
    first_name: 'Sarah',
    last_name: 'Johnson',
    phone_number: '+1-555-0101',
    zip_code: '10001',
    is_verified: true,
    avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b5e50d72?w=150&h=150&fit=crop&crop=face'
  },
  {
    email: 'mike.chen@example.com',
    password: 'password123',
    first_name: 'Mike',
    last_name: 'Chen',
    phone_number: '+1-555-0102',
    zip_code: '10002',
    is_verified: true,
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    email: 'elena.rodriguez@example.com',
    password: 'password123',
    first_name: 'Elena',
    last_name: 'Rodriguez',
    phone_number: '+1-555-0103',
    zip_code: '10003',
    is_verified: true,
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    email: 'david.kim@example.com',
    password: 'password123',
    first_name: 'David',
    last_name: 'Kim',
    phone_number: '+1-555-0104',
    zip_code: '10004',
    is_verified: true,
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    email: 'amanda.white@example.com',
    password: 'password123',
    first_name: 'Amanda',
    last_name: 'White',
    phone_number: '+1-555-0105',
    zip_code: '10005',
    is_verified: true,
    avatar_url: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face'
  }
];

const demoItems = [
  {
    title: 'MacBook Pro 13" 2021',
    description: 'Gently used MacBook Pro in excellent condition. Perfect for students or professionals. Comes with original charger and box.',
    category_name: 'Electronics',
    item_status: 'available',
    zip: '10001',
    can_deliver: true,
    user_email: 'sarah.johnson@example.com'
  },
  {
    title: 'Complete Harry Potter Book Series',
    description: 'All 7 Harry Potter books in hardcover. Great condition, perfect for young readers or collectors.',
    category_name: 'Books',
    item_status: 'available',
    zip: '10002',
    can_deliver: false,
    user_email: 'mike.chen@example.com'
  },
  {
    title: 'IKEA Desk Chair - Ergonomic',
    description: 'Comfortable office chair from IKEA. Used for 1 year, still in great shape. Perfect for home office setup.',
    category_name: 'Furniture',
    item_status: 'available',
    zip: '10003',
    can_deliver: true,
    user_email: 'elena.rodriguez@example.com'
  },
  {
    title: 'Professional Art Supply Set',
    description: 'Complete set of professional art supplies including paints, brushes, canvas, and sketchbooks. Great for aspiring artists.',
    category_name: 'Art Supplies',
    item_status: 'available',
    zip: '10004',
    can_deliver: false,
    user_email: 'david.kim@example.com'
  },
  {
    title: 'Kids Bicycle - Age 8-12',
    description: 'Blue kids bicycle in excellent condition. My child outgrew it. Includes helmet and safety gear.',
    category_name: 'Kids',
    item_status: 'available',
    zip: '10005',
    can_deliver: true,
    user_email: 'amanda.white@example.com'
  },
  {
    title: 'Power Drill Set with Bits',
    description: 'Professional cordless drill with complete bit set. Perfect for home improvement projects.',
    category_name: 'Tools',
    item_status: 'available',
    zip: '10001',
    can_deliver: false,
    user_email: 'sarah.johnson@example.com'
  },
  {
    title: 'Yoga Mat and Accessories',
    description: 'High-quality yoga mat with blocks and strap. Barely used, perfect for home workouts.',
    category_name: 'Fitness',
    item_status: 'available',
    zip: '10002',
    can_deliver: true,
    user_email: 'mike.chen@example.com'
  },
  {
    title: 'Coffee Table - Modern Design',
    description: 'Sleek modern coffee table in dark wood. Perfect for living room. Some minor scratches but very functional.',
    category_name: 'Furniture',
    item_status: 'available',
    zip: '10003',
    can_deliver: false,
    user_email: 'elena.rodriguez@example.com'
  }
];

async function createDemoData() {
  try {
    console.log('Creating demo users and items...');
    await sequelize.authenticate();
    console.log('Connected to database');

    // Create demo users
    for (const userData of demoUsers) {
      try {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        await User.create({
          ...userData,
          password: hashedPassword
        });
        console.log(`User "${userData.first_name} ${userData.last_name}" created`);
      } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          console.log(`User "${userData.email}" already exists`);
        } else {
          console.error(`Error creating user "${userData.email}":`, error.message);
        }
      }
    }

    // Create demo items
    for (const itemData of demoItems) {
      try {
        await Item.create(itemData);
        console.log(`Item "${itemData.title}" created`);
      } catch (error) {
        console.error(`Error creating item "${itemData.title}":`, error.message);
      }
    }

    console.log('Demo data created successfully!');
    console.log('\nDemo users credentials (all passwords: password123):');
    demoUsers.forEach(user => {
      console.log(`- ${user.email} (${user.first_name} ${user.last_name})`);
    });

  } catch (error) {
    console.error('Error creating demo data:', error);
  } finally {
    await sequelize.close();
  }
}

createDemoData();
