# Portfolio Ignacio Palmeri

## 📋 Notas Importantes

### ⚠️ Imágenes - REQUIEREN OPTIMIZACIÓN

Las imágenes en `/imgs/` tienen tamaños excesivos que afectan la performance:

| Archivo | Tamaño Actual | Tamaño Recomendado |
|---------|--------------|-------------------|
| dom.PNG | 3.2 MB | < 100 KB |
| comidadebarrio.PNG | 1.2 MB | < 150 KB |
| pisku-cli.png | 1 MB | < 150 KB |
| polymarktporyect.PNG | 529 KB | < 150 KB |
| job-bot.png | 231 KB | < 150 KB |
| og-image.png | 214 KB | < 200 KB |
| yo.jfif | 49 KB | OK |

**Acción requerida:** Convertir todas las imágenes a WebP y optimizar.

```bash
# Ejemplo con squoosh-cli (instalar primero)
npx squoosh-cli --webp {"quality":80} imgs/dom.PNG
npx squoosh-cli --webp {"quality":80} imgs/comidadebarrio.PNG
# ... etc
```

## 🎯 Estructura

```
/portafolio
├── index.html      # Portfolio unificado con toggle V1/V2
├── v1.html         # Versión legacy (ya no usada)
├── v2.html         # Versión legacy (ya no usada)
├── robots.txt      # SEO
├── sitemap.xml     # SEO
├── imgs/           # Imágenes del portfolio
│   └── *.PNG, *.png, *.jfif
└── assets-v2/      # Assets de V2 (no usados actualmente)
```

## 🚀 Toggle V1/V2

El sistema de toggle es **instantáneo** (< 100ms):
- Usa JavaScript para mostrar/ocultar versiones
- Persiste la elección en localStorage
- No requiere recarga de página

## 📱 Proyectos Incluidos

| Proyecto | URL | Estado |
|----------|-----|--------|
| Pisculichi Labs (Polymarket) | https://polytools-omega.vercel.app/ | ✅ |
| Franqui-YA Dashboard | https://franqui-ya.vercel.app/ | ✅ |
| PISKU CLI | https://pisku-production.up.railway.app/ | ✅ |
| Job Bot | https://job--bot.vercel.app/ | ✅ |
| Fútbol Tracker | https://fulbotracker.vercel.app/ | ✅ |
| Comida de Barrio | https://comidadebarrio.vercel.app/ | ✅ |

## 🔧 Deploy

Este portfolio está deployado en Vercel desde el directorio `/portafolio`.

## ✅ Checklist de Mantenimiento

- [ ] Verificar links de proyectos mensual
- [ ] Optimizar imágenes nuevas
- [ ] Actualizar año en footer
- [ ] Revisar console errors
