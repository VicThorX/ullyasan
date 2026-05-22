# Ull Yasan — Premium Seafood Export
### Catálogo Corporativo B2B Estático de Alta Gama

Este es el repositorio oficial del sitio web corporativo de **Ull Yasan** (disponible en [https://ullyasan.com](https://ullyasan.com)), empresa argentina líder en la exportación y distribución mayorista de pescados y mariscos capturados en las frías aguas del Atlántico Sur (Patagonia, FAO 41).

El proyecto ha sido concebido bajo los más altos estándares de desarrollo web moderno: una arquitectura **Jamstack estática de ultra-alto rendimiento**, 100% autogestionada, totalmente adaptada a dispositivos móviles (Responsive), y optimizada específicamente para la captación de cotizaciones corporativas internacionales.

---

## 🏛️ Características y Arquitectura Técnica

### 1. Sistema i18n Estático Multilingüe (5 Idiomas)
La plataforma cuenta con un sistema de internacionalización (i18n) completo que da soporte a **5 idiomas clave** para el comercio global:
*   **Español (ES)** 🇪🇸 / **English (EN)** 🇬🇧 / **Português (PT)** 🇵🇹 / **Deutsch (DE)** 🇩🇪 / **Français (FR)** 🇫🇷
*   **Cero Latencia / Cero Server Overhead**: Las traducciones se resuelven de forma estática en tiempo de compilación. No requiere middlewares en tiempo de ejecución, permitiendo que la web sea servida directamente desde redes CDN globales (como Vercel, Cloudflare o Netlify) a velocidades instantáneas.
*   **Seguridad de Tipos (TypeScript)**: El esquema de traducciones está validado por interfaces estrictas (`src/types/dictionary.ts`), asegurando que todos los diccionarios implementen exactamente las mismas claves de traducción.

### 2. Cumplimiento de Tipos Dinámicos de Next.js 16
Diseñado y adaptado para cumplir estrictamente con las directrices más recientes de **Next.js 16 (App Router)**:
*   Resolución segura de segmentos asíncronos (`params` y `searchParams` tipados estrictamente como promesas `Promise<{ lang: string }>`).
*   Configuración dinámica y robusta de rutas estáticas (`generateStaticParams` y `generateMetadata`) que evita fallos de compilación y optimiza el SEO técnico.

### 3. Maquetación Inmersiva y Diseño Visual Premium (Full-Bleed)
*   **Navegación Fluida**: El encabezado ([Header.tsx](src/components/Header.tsx)) implementa transiciones fluidas. En la página de inicio, el header es totalmente transparente sobre la imagen de fondo oscura para realzar las fotografías de captura patagónica. En las subpáginas de catálogo y contacto, adopta un sólido color azul marino (`bg-ocean-black/95`) con efecto de desenfoque de fondo (*glassmorphic backdrop blur*) para garantizar un contraste del 100%.
*   **Layout Full-Bleed**: Eliminamos el padding global del layout para permitir que la sección Hero de la página de inicio se extienda hasta el borde superior absoluto de la pantalla (`y=0`). Las subpáginas manejan su espaciado de manera contextual, garantizando una consistencia de píxel perfecta.
*   **Paleta Premium Atlántica**: Diseño estructurado sobre tonos fríos corporativos, azules árticos, verdes azulados (*ice-teal*) y tipografías elegantes (Inter y Playfair Display de Google Fonts).

### 4. Automatización del Embudo B2B (Cotizaciones Directas)
Al tratarse de una plataforma enfocada exclusivamente al sector B2B (importadores, distribuidores y cadenas de restauración premium), el catálogo integra:
*   **Fichas Técnicas Dinámicas**: Detalle de zona de captura (FAO 41), método de glaseado, tipo de congelamiento a bordo/en tierra y formatos de embalaje.
*   **Formularios con Pre-llenado**: Los CTAs de cotización enlazan directamente al formulario de contacto, pre-seleccionando la especie de interés en base al contexto del usuario.
*   **Integración Comercial Directa**: CTAs optimizados para WhatsApp Business y correo comercial con plantillas de texto pre-estructuradas por idioma que facilitan el primer contacto del importador.

### 5. Optimización SEO Técnica y SEO Internacional
*   Estructura semántica HTML5 estricta (jerarquía de encabezados `h1`-`h6`, etiquetas descriptivas).
*   Generación automática de etiquetas canónicas dinámicas para evitar contenido duplicado.
*   Implementación de etiquetas de indexación internacional `<link rel="alternate" hreflang="..." />` para todas las variantes regionales e idioma por defecto (`x-default` apuntando a Español).

---

## 🛠️ Estructura del Código

La base de código está estructurada de forma modular, limpia y escalable:

```bash
ullyasan/
├── public/                       # Activos estáticos (Logos, imágenes de productos en alta resolución)
│   ├── logo-ull-yasan-color.png  # Logo corporativo oficial a todo color
│   └── images/
│       ├── hero-sea.jpg          # Fondo inmersivo del mar frío patagónico
│       └── products/             # Fotos de alta calidad para las especies comercializadas
├── src/
│   ├── app/                      # Rutas de la aplicación (Next.js App Router)
│   │   ├── [lang]/               # Segmento dinámico de idioma
│   │   │   ├── contacto/         # Página del formulario de cotizaciones
│   │   │   ├── productos/        # Catálogo comercial general
│   │   │   │   └── [slug]/       # Detalle y especificaciones de producto por especie
│   │   │   ├── layout.tsx        # Layout con estructura de idiomas
│   │   │   └── page.tsx          # Homepage comercial de Ull Yasan
│   │   ├── globals.css           # Estilos globales y variables de Tailwind CSS v4
│   │   ├── layout.tsx            # Layout raíz de Next.js (Pass-through para locales)
│   │   └── page.tsx              # Redirección raíz al idioma por defecto (/es)
│   ├── components/               # Componentes UI encapsulados
│   │   ├── CatalogGrid.tsx       # Filtro dinámico de catálogo por categoría (Congelados/Frescos)
│   │   ├── ContactForm.tsx       # Formulario B2B con soporte de pre-llenado
│   │   ├── Footer.tsx            # Pie de página corporativo con logo integrado
│   │   ├── Header.tsx            # Barra de navegación con dropdown de idiomas y logo
│   │   ├── ProductCard.tsx       # Tarjeta de producto con micro-animaciones
│   │   └── ProductGallery.tsx    # Galería interactiva de imágenes de producto
│   ├── data/
│   │   └── products.ts           # Base de datos estática de especies (Langostinos, Calamares, Merluza)
│   ├── lib/
│   │   └── dictionary.ts         # Cargador estático de archivos de traducción JSON
│   ├── messages/                 # Diccionarios JSON de traducción (es, en, pt, de, fr)
│   └── types/
│       ├── dictionary.ts         # Contratos y tipos estrictos de traducción
│       └── product.ts            # Tipado de modelos de producto y ficha técnica
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
Asegúrate de contar con [Node.js](https://nodejs.org) (versión 18.0 o superior recomendada) y `npm` instalados en tu sistema.

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone https://github.com/VicThorX/ullyasan.git
cd ullyasan
npm install
```

### 2. Levantar el servidor de desarrollo
Para iniciar el servidor de desarrollo con el motor de alto rendimiento **Turbopack**:
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 3. Compilación de producción (Static Site Generation - SSG)
Para verificar la seguridad de tipos de TypeScript, validar imports y compilar la web en un conjunto de archivos estáticos HTML/CSS optimizados:
```bash
npm run build
```
La compilación generará **34 páginas estáticas** de forma limpia y ultrarrápida, listas para ser desplegadas en cualquier servidor estático.

---

## 💎 Créditos de Desarrollo y Licencia

*   **Desarrollado para**: Ull Yasan S.A.
*   **Tecnologías**: Next.js 16, TypeScript, Tailwind CSS v4.
*   **Licencia**: Derechos reservados. Prohibida su reproducción comercial externa sin consentimiento de Ull Yasan.
