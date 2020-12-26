import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* Services */
import getAnime, { Episode } from "../../services/getAnime";

/* Styles */
import * as Styles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface AnimeObject {
  name: string;
  image: string;
  sinopse: string;
  episodes: Episode[];
}

export default function Anime() {
  const query = useQuery();

  const [anime, setAnime] = useState<AnimeObject>({} as AnimeObject);
  const [loading, setLoading] = useState(false);

  const [episode, setEpisode] = useState("");

  useEffect(() => {
    const initAnime = {} as AnimeObject;
    initAnime.name = query.get("name") || "";
    initAnime.image = query.get("image") || "";

    setAnime(initAnime);

    async function handleGetAnime() {
      const page = query.get("page");
      if (!page)
        return alert(
          "Error ao buscar informações do anime. Page link not provider."
        );

      const result = await getAnime(page);

      if (!result) return alert("Error ao buscar informações do anime.");

      setAnime({ ...initAnime, ...result });
    }

    handleGetAnime();
  }, []);

  return (
    <Styles.Container>
      <Styles.TopBarContainer>
        <Link to="/">
          <Styles.BackIcon />
        </Link>
      </Styles.TopBarContainer>

      <Styles.AnimeContainer>
        <Styles.AnimeImageContainer>
          {anime.image && <img src={anime.image} alt={anime.name} />}
        </Styles.AnimeImageContainer>
        <Styles.AnimeInfoItemsContainer>
          <div>
            <h3>Nome:</h3>
            <h4>{anime.name}</h4>
          </div>

          <div className="sinopse">
            <h3>Sinopsia:</h3>
            <h4>{anime.sinopse}</h4>
          </div>
        </Styles.AnimeInfoItemsContainer>
      </Styles.AnimeContainer>

      <Styles.EpisodesContainer>
        <Styles.SearchEpisode>
          <input
            type="number"
            value={episode}
            placeholder="Buscar pelo episódio..."
            onChange={(event) => setEpisode(event.target.value)}
          />
          <button type="submit">
            <Styles.SearchButtonIcon />
          </button>
        </Styles.SearchEpisode>
      </Styles.EpisodesContainer>
    </Styles.Container>
  );
}
