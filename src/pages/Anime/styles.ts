import styled from "styled-components";

import { FiArrowLeft, FiSearch, FiPlay } from "react-icons/fi";

export const Container = styled.main`
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;

  margin: 0 auto;
  padding: 24px;
`;

export const LoadingContainer = styled.section`
  width: 100%;
  height: 128px;
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopBarContainer = styled.nav`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    font: 400 1.5rem/1.5 Poppins, sans-serif;
    color: ${(props) => props.theme.color};
    text-decoration: none;

    transition: filter 0.25s ease-in-out;
  }
`;

export const BackIcon = styled(FiArrowLeft)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.color};
`;

export const AnimeContainer = styled.section`
  width: 100%;
  display: flex;
  margin-top: 24px;
`;

export const AnimeImageContainer = styled.div`
  width: 100%;
  height: 256px;
  min-width: 170px;
  max-width: 170px;
  max-height: 256px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 2.5px;
  background-color: ${(props) => props.theme.backgroundInPrimary};

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const AnimeInfoItemsContainer = styled.div`
  overflow: hidden;
  max-height: 256px;
  margin-left: 32px;

  > div {
    display: flex;
    align-items: center;

    > h3 {
      color: var(--color);
      font: 600 1.8rem/1.5 Poppins, sans-serif;
    }

    > h4 {
      margin-left: 6px;

      color: var(--color);
      font: 500 1.6rem/1.5 Poppins, sans-serif;
    }
  }

  > div + div {
    margin-top: 12.5px;
  }

  > div.sinopse {
    max-height: calc(100% - 39.5px);
    align-items: flex-start;
    flex-direction: column;

    > h4 {
      width: 100%;
      max-height: 100%;

      margin: 6px 6px 0 0;
      overflow-y: auto;

      font: 400 1.5rem/1.5 Poppins, sans-serif;
    }
  }
`;

export const EpisodesContainer = styled.section`
  width: 100%;
  max-height: calc(100vh - 408px);

  margin-top: 40px;
  padding-top: 56px;

  position: relative;

  overflow: hidden;
  border-radius: 2.5px;
  background-color: ${(props) => props.theme.backgroundInPrimary};
`;

export const SearchEpisode = styled.form`
  width: 100%;
  height: 56px;

  top: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 0px 0 8px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0 8px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0 8px 0px rgba(0, 0, 0, 0.4);

  background-color: ${(props) => props.theme.backgroundInPrimaryListSearch};

  > input {
    flex: 1;
    height: 100%;

    padding: 0 16px;

    font: 400 1.5rem/1.5 Poppins, sans-serif;
    color: ${(props) => props.theme.color};

    border: 0;
    outline: none;
    background-color: transparent;

    ::placeholder {
      color: ${(props) => props.theme.color};
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }

  > button {
    width: 48px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    cursor: pointer;
    outline: none;
    background-color: transparent;
  }
`;

export const SearchButtonIcon = styled(FiSearch)`
  width: 22px;
  height: 22px;

  color: ${(props) => props.theme.color};
`;

export const EpisodesItemsContainer = styled.div`
  width: 100%;
  max-height: calc(100vh - 464px);

  overflow-y: auto;
  padding-left: 6px;

  display: flex;
  flex-direction: column;
`;

interface EpisodeItemContainerProps {
  disabled?: boolean;
}

export const EpisodeItemContainer = styled.div<EpisodeItemContainerProps>`
  width: 100%;
  height: 56px;
  min-height: 56px;

  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    border-top: 1px solid ${(props) => props.theme.inputBackground};
  }

  > p {
    font: 500 1.5rem/1.5 Poppins, sans-serif;
    color: ${(props) => props.theme.color};
  }

  > div {
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    > button {
      height: 100%;
      padding: 0 12px;

      font: 500 1.5rem/1.5 Poppins, sans-serif;
      color: ${(props) => props.theme.color};

      display: flex;
      align-items: center;

      border: 0;
      border-radius: 2.5px;

      transition: filter 0.25s ease, background-color 0.25s ease;

      cursor: pointer;
      outline: none;
      background-color: ${(props) =>
        props.disabled
          ? props.theme.inputBackgroundDisabled
          : props.theme.inputBackground};

      :hover {
        ${(props) =>
          props.disabled
            ? "filter: brightness(100%);"
            : "filter: brightness(90%);"};
      }

      > svg {
        margin-right: 8px;
      }

      & + button {
        margin-left: 16px;
      }
    }
  }
`;

export const EpisodeItemPlayIcon = styled(FiPlay)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.color};
`;

export const PlayerContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;

  top: 0;
  left: 0;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;

  > div {
    width: 100%;
    height: 100%;
  }

  #player-close {
    width: 32px;
    height: 32px;
    z-index: 6;

    top: 12px;
    left: 12px;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.3s ease, opacity 0.4s ease-in-out,
      transform 0.4s ease-in-out;

    border-radius: 3px;
    border-radius: var(--plyr-control-radius, 3px);

    border: 0;
    cursor: pointer;
    outline: none;
    background-color: rgba(0, 0, 0, 0.01);

    :hover {
      background: #00b3ff;
      background: var(
        --plyr-video-control-background-hover,
        var(--plyr-color-main, var(--plyr-color-main, #00b3ff))
      );
    }
  }

  .plyr--hide-controls #player-close {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-100%);
  }
`;
