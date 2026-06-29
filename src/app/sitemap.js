export default function sitemap() {
  const baseUrl = 'https://skystarksa.com' // Using production domain

  const routes = ['', '/about', '/services', '/fleet', '/safety', '/contact', '/contracting']

  const sitemapEntries = []

  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
    })
    
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
    })
  })

  return sitemapEntries
}
