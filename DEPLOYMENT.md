# Deployment — Vercel + Namecheap

Guía paso a paso para desplegar el portafolio en Vercel con un dominio comprado en Namecheap.

---

## Resumen del proceso

1. Subir el código a GitHub
2. Crear cuenta en Vercel y conectar el repositorio
3. Comprar el dominio en Namecheap
4. Conectar el dominio a Vercel configurando los DNS

---

## Paso 1 — Subir el código a GitHub

Si aún no tienes el repositorio en GitHub:

1. Ve a [github.com](https://github.com) y crea un repositorio nuevo (puede ser privado).
2. En la terminal, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

A partir de aquí, cada vez que hagas `git push`, Vercel redesplegará automáticamente.

---

## Paso 2 — Crear cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com) y haz clic en **Sign Up**.
2. Selecciona **Continue with GitHub** para vincular tu cuenta.
3. Autoriza los permisos que Vercel solicita.

---

## Paso 3 — Importar el proyecto en Vercel

1. En el dashboard de Vercel, haz clic en **Add New → Project**.
2. Busca tu repositorio en la lista y haz clic en **Import**.
3. Vercel detectará automáticamente que es un proyecto Astro. Verifica que la configuración sea:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Haz clic en **Deploy**.

Vercel construirá el proyecto y te dará una URL temporal del tipo `tu-repo.vercel.app`. El sitio ya está en internet.

---

## Paso 4 — Comprar el dominio en Namecheap

1. Ve a [namecheap.com](https://www.namecheap.com).
2. Busca el dominio que quieres (ej. `nicolasrodriguez.dev`) en la barra de búsqueda.
3. Agrégalo al carrito y completa la compra.
   - El precio varía según la extensión (`.dev`, `.com`, `.co`, etc.).
   - Se recomienda activar **WhoisGuard** (privacidad del dominio) — Namecheap lo incluye gratis.
4. Una vez comprado, ve a tu panel en Namecheap: **Dashboard → Domain List → Manage** (en el dominio que compraste).

---

## Paso 5 — Agregar el dominio en Vercel

1. En Vercel, entra a tu proyecto y ve a **Settings → Domains**.
2. Escribe tu dominio (ej. `nicolasrodriguez.dev`) y haz clic en **Add**.
3. Agrega también la versión con `www`: `www.nicolasrodriguez.dev`.
4. Vercel te mostrará los registros DNS que debes configurar. Toma nota de ellos — los necesitarás en el siguiente paso. Serán algo así:

| Tipo | Nombre | Valor |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

> Los valores exactos los da Vercel en pantalla. Usa los que aparezcan ahí, no los de esta tabla.

---

## Paso 6 — Configurar los DNS en Namecheap

1. En Namecheap, en la página de gestión de tu dominio, ve a la pestaña **Advanced DNS**.
2. Elimina los registros que Namecheap pone por defecto (suelen ser registros A y CNAME de parking).
3. Agrega los registros que Vercel indicó:

**Registro A (dominio raíz):**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21` *(usar el valor exacto que muestra Vercel)*
- TTL: `Automatic`

**Registro CNAME (subdominio www):**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com` *(usar el valor exacto que muestra Vercel)*
- TTL: `Automatic`

4. Guarda los cambios.

---

## Paso 7 — Esperar la propagación DNS

La propagación de DNS toma entre **5 minutos y 48 horas** dependiendo del proveedor y la región. En la mayoría de casos Namecheap propaga en menos de 30 minutos.

Mientras esperas, puedes verificar el estado en Vercel: **Settings → Domains**. Cuando el dominio esté activo verás una marca verde junto a él.

Vercel también activa **HTTPS automáticamente** (certificado SSL via Let's Encrypt) en cuanto detecta los DNS correctos. No hay que configurar nada extra.

---

## Paso 8 — Verificar que todo funciona

1. Abre `https://tudominio.com` en el navegador.
2. Verifica que cargue el sitio con candado HTTPS.
3. Verifica que `https://www.tudominio.com` redirija al dominio sin `www` (o viceversa, según cómo configuraste el redirect en Vercel).

---

## Actualizaciones futuras

Cada vez que hagas cambios y los subas a GitHub:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

Vercel detecta el push automáticamente, construye el nuevo build y lo despliega en segundos. El dominio sigue apuntando al sitio actualizado sin ninguna configuración adicional.

---

## Variables de entorno (si se necesitan en el futuro)

Si en algún momento el proyecto necesita claves API u otras variables privadas:

1. En Vercel: **Settings → Environment Variables**.
2. Agrega la variable con su nombre y valor.
3. Selecciona en qué entornos aplica (Production, Preview, Development).
4. Haz un nuevo deploy para que tome efecto.

En el código se acceden con `import.meta.env.NOMBRE_VARIABLE` (sintaxis de Astro/Vite).

---

## Solución de problemas frecuentes

**El dominio no carga después de 48 horas**
- Verifica que los registros DNS en Namecheap estén exactamente como los indica Vercel.
- Usa [dnschecker.org](https://dnschecker.org) para ver el estado de propagación desde distintas regiones.

**El build falla en Vercel**
- Revisa los logs en Vercel: **Deployments → [el deploy fallido] → Build Logs**.
- El error más común es una versión de Node incompatible. Verifica en **Settings → General → Node.js Version** que sea >= 22.

**El sitio carga pero las imágenes no aparecen**
- Confirma que las imágenes estén en la carpeta `public/images/` y que los nombres coincidan exactamente (son case-sensitive en Linux/Vercel).
