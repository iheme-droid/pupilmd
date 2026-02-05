const fs = require('fs');
const path = require('path');

// Path to your extracted PWABuilder folder
const sourceDir = './pwabuilder-images'; // Change this to your extracted folder name
const publicDir = './public';

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Icon mappings: [source file name, destination file name]
const iconMappings = [
  // Android icons
  ['android-launchericon-192-192.png', 'icon-192x192.png'],
  ['android-launchericon-192-192.png', 'android-chrome-192x192.png'],
  ['android-launchericon-512-512.png', 'icon-512x512.png'],
  ['android-launchericon-512-512.png', 'android-chrome-512x512.png'],
  
  // iOS/Apple icons - look for files with these dimensions
  ['android-launchericon-144-144.png', 'icon-144x144.png'],
  ['android-launchericon-96-96.png', 'icon-96x96.png'],
  ['android-launchericon-72-72.png', 'icon-72x72.png'],
  ['android-launchericon-48-48.png', 'icon-72x72.png'], // Fallback if 72 doesn't exist
  
  // Apple touch icons (use the largest available)
  ['android-launchericon-192-192.png', 'apple-touch-icon.png'], // 180 preferred, 192 fallback
  ['android-launchericon-192-192.png', 'apple-icon.png'],
  
  // Additional sizes
  ['android-launchericon-512-512.png', 'icon-384x384.png'], // Use 512 as fallback
  ['android-launchericon-192-192.png', 'icon-152x152.png'],
  ['android-launchericon-144-144.png', 'icon-128x128.png'],
  
  // Favicons
  ['32.png', 'favicon-32x32.png'],
  ['16.png', 'favicon-16x16.png'],
  ['32.png', 'favicon.ico'],
];

console.log('Copying icons from PWABuilder...\n');

iconMappings.forEach(([source, dest]) => {
  const sourcePath = path.join(sourceDir, source);
  const destPath = path.join(publicDir, dest);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied ${source} → ${dest}`);
    } else {
      console.log(`⚠ Skipped ${source} (not found)`);
    }
  } catch (error) {
    console.log(`✗ Error copying ${source}:`, error.message);
  }
});

// Copy to app directory for Next.js
try {
  fs.copyFileSync(
    path.join(publicDir, 'icon-192x192.png'),
    './app/icon.png'
  );
  console.log('\n✓ Copied icon-192x192.png → app/icon.png');
  
  fs.copyFileSync(
    path.join(publicDir, 'apple-icon.png'),
    './app/apple-icon.png'
  );
  console.log('✓ Copied apple-icon.png → app/apple-icon.png');
} catch (error) {
  console.log('⚠ Could not copy to app directory:', error.message);
}

console.log('\n✅ Icon setup complete!');