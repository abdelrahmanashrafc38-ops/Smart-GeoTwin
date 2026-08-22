/**
 * MongoDB Backup Script
 * Exports all collections from the Atlas database as JSON files.
 */
require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const BACKUP_DIR = path.join(__dirname, '..', 'database-backup');

async function backup() {
  console.log('🔌 Connecting to MongoDB Atlas...');
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ Connected to:', mongoose.connection.db.databaseName);

  // Create backup directory
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  const db = mongoose.connection.db;
  const collections = await db.listCollections().toArray();

  console.log(`📦 Found ${collections.length} collections to export:\n`);

  for (const col of collections) {
    const name = col.name;
    const docs = await db.collection(name).find({}).toArray();
    const filePath = path.join(BACKUP_DIR, `${name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(docs, null, 2), 'utf-8');
    console.log(`  ✅ ${name}: ${docs.length} documents → ${name}.json`);
  }

  console.log(`\n🎉 Backup complete! Files saved to: ${BACKUP_DIR}`);
  await mongoose.disconnect();
  process.exit(0);
}

backup().catch(err => {
  console.error('❌ Backup failed:', err.message);
  process.exit(1);
});
