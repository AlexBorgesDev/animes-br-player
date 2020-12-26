import { FormEvent, useState } from "react";

/* Services */
import searchService, { SearchResult } from "../../services/search";

import * as Styles from "./styles";

export default function Home() {
  const [search, setSearch] = useState("");

  const [animesResult, setAnimesResult] = useState<SearchResult[]>([]);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const animes = await searchService(search);

    if (!animes)
      return alert("Ops! Algo deu errado ao fazer uma busca pelos animes.");

    setAnimesResult(animes);
  }

  return (
    <Styles.Container>
      <Styles.Title>Animes-BR Player</Styles.Title>
      <Styles.SearchContainer onSubmit={handleSearch}>
        <Styles.SearchInput
          value={search}
          placeholder="Buscar pelo anime..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <Styles.SearchButton type="submit">
          <Styles.SearchButtonIcon />
        </Styles.SearchButton>
      </Styles.SearchContainer>

      {animesResult.length > 0 && (
        <Styles.ResultsContainer>
          {animesResult.map((anime, index) => (
            <Styles.ResultItemContainer key={index}>
              <img src={anime.image} alt={anime.name} />
              <div>
                <h5>{anime.name}</h5>
              </div>
            </Styles.ResultItemContainer>
          ))}
        </Styles.ResultsContainer>
      )}
    </Styles.Container>
  );
}
