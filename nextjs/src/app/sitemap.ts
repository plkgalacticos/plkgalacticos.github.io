import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const home = {
        url: 'https://plkgalacticos.hr/',
        lastModified: new Date().toString(),
    }

    return [home]
}