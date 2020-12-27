import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* Components */
import Player from '../../components/player'
import Loading from '../../components/loading'

/* Services */
import getAnime, { Episode } from '../../services/getAnime'
import getEpisode from '../../services/getEpisode'

/* Styles */
import * as Styles from './styles'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

interface View {
  episode: number
  currentTime?: number
}

interface AnimeObject {
  name: string
  image: string
  sinopse: string
  episodes: Episode[]
}

export default function Anime(): JSX.Element {
  const query = useQuery()

  const [views, setViews] = useState<View[]>([])

  const [anime, setAnime] = useState<AnimeObject>({} as AnimeObject)
  const [episodes, setEpisodes] = useState<Episode[]>([])

  const [loading, setLoading] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const [playerInfo, setPlayerInfo] = useState({ url: '', episode: 0 })
  const [activePlayer, setActivePlayer] = useState(false)

  const [episodeSearch, setEpisodeSearch] = useState('')

  function handleSearchEpisodes(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!anime.episodes) return
    const results: Episode[] = []

    for (const episode of anime.episodes) {
      if (String(episode.episode).includes(episodeSearch)) results.push(episode)
    }

    setEpisodes(results)
  }

  function closePlayer(player: Plyr) {
    const newViews = views.filter(view => view.episode !== playerInfo.episode)
    newViews.push({
      episode: playerInfo.episode,
      currentTime: player.currentTime
    })

    setViews(newViews)
    const animePage = query.get('page')
    animePage && localStorage.setItem(animePage, JSON.stringify(newViews))

    player.destroy()
    setPlayerInfo({ url: '', episode: 0 })
    setActivePlayer(false)

    document.title = `Animes-BR Player - ${anime.name}`
  }

  async function getVideoLink(
    page: string,
    quality: 'SD' | 'HD' | 'FullHD',
    ep: number
  ) {
    if (disabled) return
    setDisabled(true)

    const episodeURL = await getEpisode(page, quality)

    if (episodeURL === undefined) return alert('Ops! Qualidade indisponível.')
    else if (!episodeURL) {
      return alert('Ops! Erro ao buscar o link do episódio.')
    }

    setPlayerInfo({ url: episodeURL, episode: ep })
    setActivePlayer(true)

    const title = document.title
    document.title = `${title} - Assistindo Episódio ${ep}`

    setDisabled(false)
  }

  function getViews() {
    const page = query.get('page')
    if (!page) return

    const storage = localStorage.getItem(page)
    storage && setViews(JSON.parse(storage))
  }

  useEffect(() => {
    getViews()

    const initAnime = {} as AnimeObject
    initAnime.name = query.get('name') || ''
    initAnime.image = query.get('image') || ''

    document.title = `Animes-BR Player - ${initAnime.name}`

    setAnime(initAnime)

    async function handleGetAnime() {
      const page = query.get('page')
      if (!page) {
        return alert(
          'Error ao buscar informações do anime. Page link not provider.'
        )
      }

      const result = await getAnime(page)

      if (!result) return alert('Error ao buscar informações do anime.')

      setAnime({ ...initAnime, ...result })
      setEpisodes(result.episodes)

      setLoading(false)
    }

    handleGetAnime()
  }, [])

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
        <Styles.SearchEpisode onSubmit={handleSearchEpisodes}>
          <input
            type="number"
            value={episodeSearch}
            placeholder="Buscar pelo episódio..."
            onChange={event => setEpisodeSearch(event.target.value)}
          />
          <button type="submit">
            <Styles.SearchButtonIcon />
          </button>
        </Styles.SearchEpisode>

        <Styles.EpisodesItemsContainer>
          {loading && (
            <Styles.LoadingContainer>
              <Loading />
            </Styles.LoadingContainer>
          )}

          {!loading &&
            episodes !== undefined &&
            episodes.map(episode => (
              <Styles.EpisodeItemContainer
                key={episode.episode}
                disabled={disabled}
              >
                <p>Episódio {episode.episode}</p>

                <div>
                  {views.filter(view => view.episode === episode.episode)
                    .length === 1 && <Styles.EyeIcon />}

                  <button
                    onClick={() =>
                      getVideoLink(episode.page, 'SD', episode.episode)
                    }
                  >
                    <Styles.EpisodeItemPlayIcon /> SD
                  </button>
                  <button
                    onClick={() =>
                      getVideoLink(episode.page, 'HD', episode.episode)
                    }
                  >
                    <Styles.EpisodeItemPlayIcon /> HD
                  </button>
                  <button
                    onClick={() =>
                      getVideoLink(episode.page, 'FullHD', episode.episode)
                    }
                  >
                    <Styles.EpisodeItemPlayIcon /> FullHD
                  </button>
                </div>
              </Styles.EpisodeItemContainer>
            ))}
        </Styles.EpisodesItemsContainer>
      </Styles.EpisodesContainer>

      {activePlayer && (
        <Styles.PlayerContainer>
          <Player
            info={{
              url: playerInfo.url,
              currentTime:
                views.filter(view => view.episode === playerInfo.episode)[0]
                  ?.currentTime || undefined
            }}
            closeButtonClick={closePlayer}
          />
        </Styles.PlayerContainer>
      )}
    </Styles.Container>
  )
}
