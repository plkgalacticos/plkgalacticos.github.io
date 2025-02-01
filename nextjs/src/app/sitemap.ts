import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const links = [
        'https://plkgalacticos.hr/cibalae-open-kup',
        'https://plkgalacticos.hr/cibalae-open-kup/prijava',
        'https://plkgalacticos.hr/cibalae-open-kup/smjestaj',
        'https://plkgalacticos.hr/cibalae-open-kup/nominacije',
        'https://plkgalacticos.hr/cibalae-open-kup/upute-za-strane-natjecatelje',
        
        'https://plkgalacticos.hr/en/cibalae-open-cup',
        'https://plkgalacticos.hr/en/cibalae-open-cup/registration',
        'https://plkgalacticos.hr/en/cibalae-open-cup/accommodation',
        'https://plkgalacticos.hr/en/cibalae-open-cup/nominations',
        'https://plkgalacticos.hr/en/cibalae-open-cup/instructions-for-foreign-athletes',

        'https://plkgalacticos.hr/clanovi',
        'https://plkgalacticos.hr/en/members'
    ];

    const sitemap = links.map(url => ({
        url: url,
        lastModified: new Date().toISOString(), // ISO format is better for timestamps
    }));

    return sitemap;
}