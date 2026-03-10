const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgsDir = './imgs';

const images = [
    { name: 'dom.PNG', quality: 80, maxWidth: 800 },
    { name: 'comidadebarrio.PNG', quality: 80, maxWidth: 800 },
    { name: 'pisku-cli.png', quality: 80, maxWidth: 800 },
    { name: 'polymarktporyect.PNG', quality: 80, maxWidth: 800 },
    { name: 'job-bot.png', quality: 80, maxWidth: 800 },
    { name: 'dashboard-franquiciados.PNG', quality: 80, maxWidth: 800 },
    { name: 'futtracker.PNG', quality: 80, maxWidth: 800 },
    { name: 'og-image.png', quality: 85, maxWidth: 1200 },
    { name: 'portfolio-v1.png', quality: 80, maxWidth: 800 },
    { name: 'yo.jfif', quality: 85, maxWidth: 400 },
];

async function optimizeImages() {
    console.log('🖼️  Optimizando imágenes...\n');
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    
    for (const img of images) {
        const inputPath = path.join(imgsDir, img.name);
        
        if (!fs.existsSync(inputPath)) {
            console.log(`❌ No encontrado: ${img.name}`);
            continue;
        }
        
        const originalSize = fs.statSync(inputPath).size / 1024;
        
        try {
            let pipeline = sharp(inputPath);
            
            // Resize if too big
            const metadata = await pipeline.metadata();
            if (metadata.width > img.maxWidth) {
                pipeline = pipeline.resize(img.maxWidth, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });
            }
            
            // Convert to WebP
            const ext = path.extname(img.name);
            const baseName = path.basename(img.name, ext);
            const outputPath = path.join(imgsDir, `${baseName}.webp`);
            
            await pipeline
                .webp({ quality: img.quality })
                .toFile(outputPath);
            
            const optimizedSize = fs.statSync(outputPath).size / 1024;
            const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(0);
            
            console.log(`✅ ${img.name}`);
            console.log(`   ${originalSize.toFixed(0)} KB → ${optimizedSize.toFixed(0)} KB (${reduction}% menos)`);
            
            totalOriginal += originalSize;
            totalOptimized += optimizedSize;
            
        } catch (err) {
            console.log(`❌ Error con ${img.name}: ${err.message}`);
        }
    }
    
    console.log('\n📊 Resumen:');
    console.log(`   Total original: ${totalOriginal.toFixed(0)} KB`);
    console.log(`   Total optimizado: ${totalOptimized.toFixed(0)} KB`);
    console.log(`   Ahorrado: ${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%`);
}

optimizeImages();
