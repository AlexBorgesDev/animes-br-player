import axios from "axios";
import cheerio from "cheerio";

export interface SearchResult {
  name: string;
  page: string;
  image: string;
}

export default async function (value: string): Promise<SearchResult[] | false> {
  const baseURL = "https://animesvision.biz";
  const url = `${baseURL}/search?query=${value}`;

  try {
    const results: SearchResult[] = [];

    const { data } = await axios(url);
    const $ = cheerio.load(data);

    $(".thumb").each((i, element) => {
      results.push({
        name: element.attribs.title,
        page: `${baseURL}${element.attribs.href}`,
        image: (<any>element.children[1]).attribs.src,
      });
    });

    return results;
  } catch (err) {
    return false;
  }
}
