import axios from "axios";
import cheerio from "cheerio";

export interface Episode {
  page: string;
  episode: number;
}

export interface Anime {
  sinopse: string;
  episodes: Episode[];
}

export default async function getAnime(page: string): Promise<false | Anime> {
  try {
    const anime: Anime = {} as Anime;
    const episodes: Episode[] = [];

    const { data } = await axios(page);
    const $ = cheerio.load(data);

    anime.sinopse = await (<any>$("div.dci-desc")[0].children[0]).data;

    $(".sli-name > a").each((index, element) => {
      episodes.push({
        page: `${element.attribs.href}/download`,
        episode: index + 1,
      });
    });

    anime.episodes = episodes;

    return anime;
  } catch (err) {
    return false;
  }
}
