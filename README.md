# Photo Album App

![Photo Album Logo](static/images/cap1.png)<img title="" src="static/images/cap2.png" alt="Photo Album Logo" data-align="inline">

**Photo Album App** es una aplicación web que te permite crear y explorar galerías de fotos de manera fácil y rápida. Esta aplicación está construida utilizando **Next.js**, **Tailwind CSS**, **TypeScript** y **Cloudinary** para almacenar y gestionar las imágenes.

## Características

- Crea y personaliza tus propias galerías de fotos.
- Sube imágenes a Cloudinary para un almacenamiento seguro y eficiente.
- Explora tus galerías y visualiza las fotos en una interfaz atractiva.
- Interfaz receptiva y amigable para dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web modernas.
- **Tailwind CSS**: Un framework de CSS utilitario para diseñar interfaces rápidamente.
- **TypeScript**: Añade tipado estático a JavaScript para mejorar el desarrollo.
- **Cloudinary**: Servicio de almacenamiento y manipulación de imágenes en la nube.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/jairayafranco/Photo-Album.git
```

2. Navega al directorio del proyecto:

```bash
cd photo-album
```

3. Instala las dependencias utilizando npm o yarn:

```bash
npm install
# o
yarn install
```

4. Configuración de Cloudinary:
   
   - Crea una cuenta en Cloudinary si aún no la tienes.
   - Obtén tu **Cloud Name** y **Cloudinary URL** desde el panel de control de Cloudinary.
   - Configura estas credenciales en el archivo `.env.local`:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_URL=""
```

## Uso

1. Inicia el servidor de desarrollo: `npm run dev # o yarn dev`

2. Abre tu navegador y navega a `http://localhost:3000` para acceder a la aplicación.

3. Explora las diferentes características de la aplicación, crea nuevas galerías, sube imágenes y disfruta de tus fotos.
