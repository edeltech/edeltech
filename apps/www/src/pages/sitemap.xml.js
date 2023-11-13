import {strapiFetcher} from '../../configs/server'

const staticPaths = [
  '/',
  '/blog',
  '/about',
  '/book-a-call'
]

function generateSiteMap(hostname, posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
    .map((path) => {
      return `
       <url>
           <loc>${hostname}${path}</loc>
       </url>
     `
    })
    .join('')}
   </urlset>
 `
}

async function getArticlePaths() {
  const articles = await strapiFetcher.call({
    path: '/api/articles-slugs'
  })

  return articles.map((article) => {
    return `/blog/${article.slug}`
  })
}

async function getSolutionsPaths() {
  const articles = await strapiFetcher.call({
    path: '/api/solutions-slugs'
  })
  
  return articles.map((article) => {
    return `/solutions/${article.slug}`
  })
}

async function getServicesPaths() {
  const articles = await strapiFetcher.call({
    path: '/api/services-slugs'
  })
  
  return articles.map((article) => {
    return `/services/${article.slug}`
  })
}

function SiteMap() {
}

export async function getServerSideProps({req, res}) {
  let hostname = req.headers.host.startsWith('localhost') ? `http://${req.headers.host}` : `https://${req.headers.host}`
  const paths = [
    ...staticPaths,
    ...await getArticlePaths(),
    ...await getSolutionsPaths(),
    ...await getServicesPaths()
  ]
  const sitemap = generateSiteMap(hostname, paths)
  
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
