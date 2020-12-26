import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

/* Components */
import Loading from '../../components/loading'

/* Services */
import searchService, { SearchResult } from '../../services/search'

/* Styles */
import * as Styles from './styles'

export default function Home(): JSX.Element {
  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState('')

  const [animesResult, setAnimesResult] = useState<SearchResult[]>([])

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const animes = await searchService(search)

    if (!animes) {
      return alert('Ops! Algo deu errado ao fazer uma busca pelos animes.')
    }

    setAnimesResult(animes)
    setLoading(false)
  }

  function goAnimePage(name: string, page: string, image: string) {
    history.push(`/anime?name=${name}&page=${page}&image=${image}`)
  }

  return (
    <Styles.Container>
      <Styles.Title>Animes-BR Player</Styles.Title>
      <Styles.SearchContainer onSubmit={handleSearch}>
        <Styles.SearchInput
          value={search}
          placeholder="Buscar pelo anime..."
          onChange={event => setSearch(event.target.value)}
        />
        <Styles.SearchButton type="submit">
          <Styles.SearchButtonIcon />
        </Styles.SearchButton>
      </Styles.SearchContainer>

      {loading && (
        <Styles.LoadingContainer>
          <Loading />
        </Styles.LoadingContainer>
      )}

      {animesResult.length > 0 && !loading && (
        <Styles.ResultsContainer>
          {animesResult.map((anime, index) => (
            <Styles.ResultItemContainer
              key={index}
              onClick={() => goAnimePage(anime.name, anime.page, anime.image)}
            >
              <img src={anime.image} alt={anime.name} />
              <div>
                <h5>{anime.name}</h5>
              </div>
            </Styles.ResultItemContainer>
          ))}
        </Styles.ResultsContainer>
      )}
    </Styles.Container>
  )
}
