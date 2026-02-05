const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Your logo file (change if your logo has a different name)
const logoPath = './logo.jpeg';

// Create directories if they don't exist
const publicDir = './public';
const appDir = './app';

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('🎨 Generating PWA icons from your logo...\n');

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.error('❌ Error: logo.jpeg not found in project root!');
  console.log('');
  console.log('Please:');
  console.log('1. Copy your logo.jpeg to the pupilmd folder');
  console.log('2. Make sure it\'s named exactly "logo.jpeg"');
  console.log('');
  process.exit(1);
}

// All icon sizes needed for PWA
const iconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 32, name: 'favicon.ico' },
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 180, name: 'apple-icon.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

// Generate all icons
const promises = iconSizes.map(({ size, name }) => {
  return sharp(logoPath)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 } // White background
    })
    .png()
    .toFile(path.join(publicDir, name))
    .then(() => {
      console.log(`✅ ${name}`);
    })
    .catch(err => {
      console.error(`❌ Error creating ${name}:`, err.message);
    });
});

// Wait for all icons to be generated
Promise.all(promises)
  .then(() => {
    console.log('\n📱 Copying to app directory...\n');
    
    // Copy to app directory for Next.js
    return Promise.all([
      sharp(logoPath)
        .resize(192, 192, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(path.join(appDir, 'icon.png'))
        .then(() => console.log('✅ app/icon.png')),
      
      sharp(logoPath)
        .resize(180, 180, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(path.join(appDir, 'apple-icon.png'))
        .then(() => console.log('✅ app/apple-icon.png'))
    ]);
  })
  .then(() => {
    console.log('\n✨ All icons generated successfully!\n');
    console.log('Generated files:');
    console.log('- 15 icons in public/');
    console.log('- 2 icons in app/');
    console.log('\nNext steps:');
    console.log('1. Start dev server: npm run dev');
    console.log('2. Check: http://localhost:3000/icon-192x192.png');
    console.log('3. Open DevTools → Application → Manifest\n');
  })
  .catch(err => {
    console.error('\n❌ Error generating icons:', err.message);
  });