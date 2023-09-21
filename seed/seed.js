import mongoose from 'mongoose';
import Shop from './models/shop.js';
import { mongoURL } from '../config/db.config.js';

async function seedDatabase() {
  try {
    // Connect to the MongoDB database
    mongoose.connect(mongoURL, { socketTimeoutMS: 0 });

    // Check if the 'shops' collection exists
    const shopCount = await Shop.countDocuments();

    if (shopCount === 0) {
      // If 'shops' collection is empty, seed it with initial data
      const initialShops = [
        { name: 'Shop 1', location: 'Location 1' },
        { name: 'Shop 2', location: 'Location 2' },
      ];

      await Shop.insertMany(initialShops);
      console.log('Database seeded successfully');
    } else {
      console.log('Database already seeded');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from the database after seeding
    mongoose.disconnect();
  }
}

// Run the seeding function
seedDatabase();
