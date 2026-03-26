const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = 'public/images';
const outputDir = 'public/images-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🚀 Starting image optimization...');

// Get all images
const images = fs.readdirSync(inputDir).filter(file => 
  file.match(/\.(jpg|jpeg|png)$/i)
);

console.log(`📁 Found ${images.length} images to optimize`);

// Convert each image to WebP using cwebp (built into many systems)
images.forEach((image, index) => {
  const inputPath = path.join(inputDir, image);
  const webpName = image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(outputDir, webpName);
  
  try {
    // Try using cwebp (comes with prebuilt WebP tools)
    execSync(`cwebp -q 80 "${inputPath}" -o "${outputPath}"`, { stdio: 'pipe' });
    console.log(`✅ ${image} → ${webpName}`);
  } catch (err) {
    // Fallback: just copy the file
    console.log(`⚠️  ${image} → copied (WebP conversion failed)`);
    fs.copyFileSync(inputPath, path.join(outputDir, image));
  }
});

// Calculate size savings
let originalSize = 0;
let optimizedSize = 0;

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    originalSize += fs.statSync(path.join(inputDir, file)).size;
  }
});

fs.readdirSync(outputDir).forEach(file => {
  optimizedSize += fs.statSync(path.join(outputDir, file)).size;
});

const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
console.log(`\n📊 Original size: ${(originalSize / 1024 / 1024).toFixed(1)}MB`);
console.log(`📊 Optimized size: ${(optimizedSize / 1024 / 1024).toFixed(1)}MB`);
console.log(`💾 Space saved: ${savings}% (${((originalSize - optimizedSize) / 1024 / 1024).toFixed(1)}MB)`);

console.log('\n🎯 Next step: Update your components to use .webp images with fallbacks');
