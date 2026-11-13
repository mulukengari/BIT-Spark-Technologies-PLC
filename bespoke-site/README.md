This is the BIT Spark Technologies website, built with [Next.js](https://nextjs.org).

## Getting Started

From the workspace root (`D:\programming projects\BITSpark`), run:

```bash
npm run dev
```

The root `package.json` forwards development, build, start, and lint commands to `bespoke-site`. You can also run commands directly from that folder.

Open [http://localhost:3000](http://localhost:3000) to view the site.

Edit pages in `src/app`; shared components are in `src/components`.

## SEO deployment configuration

The canonical site origin defaults to `https://bitspark-tech.pro.et`. If the
production site moves, set `NEXT_PUBLIC_SITE_URL` to its canonical HTTPS origin
at build time. Keep that value aligned with the domain's redirects and search
console property; it is used for canonical links, structured data, robots, and
the sitemap.

The sitemap intentionally lists only substantive, indexable pages. Pages
marked as demonstrations or placeholders stay out of search until their content
is ready for publication.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
