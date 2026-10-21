# INntratec — Landing

Sitio institucional de [INntratec SAS](https://www.linkedin.com/company/inntratec-sas/) (Cuenca, Ecuador): investigación, innovación y transferencia tecnológica.

🌐 **https://inntratec.com** · Bilingüe: español (`/`) e inglés (`/en/`)

## Stack

- [Astro](https://astro.build) (sitio estático, sin JS en cliente) + CSS propio
- Tipografía: Montserrat (`@fontsource-variable/montserrat`, autoalojada)
- i18n nativo de Astro, sitemap con `@astrojs/sitemap`
- Hosting: GitHub Pages, deploy con GitHub Actions

## Desarrollo

Requiere Node ≥ 22.22.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Estructura

```
src/
  pages/index.astro        # ES
  pages/en/index.astro     # EN
  layouts/Base.astro       # meta, OpenGraph, hreflang, JSON-LD
  components/Landing.astro # secciones de la página
  i18n/{es,en}.ts          # textos; site.ts: email y LinkedIn
  styles/global.css        # paleta y estilos
public/
  CNAME                    # dominio personalizado
  logo.png, icon.png       # marca
  og.png                   # imagen OpenGraph (1200×630)
.github/workflows/deploy.yml
```

## Contenido

- **Textos:** editar `src/i18n/es.ts` y `src/i18n/en.ts` (mantener ambos en paralelo).
- **Email y LinkedIn:** `src/i18n/site.ts`.
- **Colores:** variables CSS en `:root` de `src/styles/global.css` (azul `#049FE1`, turquesa `#55D1C6`, marino `#00244C`).

## Deploy

Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica en GitHub Pages
(Settings → Pages → Source: **GitHub Actions**).

### DNS (Cloudflare, modo "DNS only")

| Tipo | Nombre | Contenido |
|---|---|---|
| A | `@` | 185.199.108.153 / .109.153 / .110.153 / .111.153 |
| CNAME | `www` | `inntratec.github.io` |

Activar **Enforce HTTPS** en Settings → Pages.

## Pendiente

- Reemplazar `public/logo.png` e `icon.png` (recortes de la portada de LinkedIn) por el logo vectorial/transparente original.
- Regenerar `og.png` si cambia el titular o la marca.
