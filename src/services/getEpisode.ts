import axios from 'axios'
import cheerio from 'cheerio'

export default async function getEpisode(
  page: string,
  quality: 'SD' | 'HD' | 'FullHD'
): Promise<string | undefined | false> {
  const qualitySearch =
    quality === 'SD' ? '/480p/' : quality === 'HD' ? '/720p/' : '/1080p/'

  try {
    let episode: undefined | string

    const { data } = await axios(page)
    const $ = cheerio.load(data)

    $('a[type=button].btn').each((index, element) => {
      if (element.attribs.href.indexOf(qualitySearch) !== -1) {
        episode = element.attribs.href
      }
    })

    return episode
  } catch (err) {
    return false
  }
}
