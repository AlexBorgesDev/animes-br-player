import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

export const Container = styled.main`
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;

  margin: 0 auto;
  padding: 24px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const LoadingContainer = styled.section`
  width: 100%;
  height: 128px;
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
`;

export const SearchContainer = styled.form`
  width: 100%;
  height: 48px;
  max-width: 488px;
  min-height: 48px;

  margin-top: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  border-radius: 2.4rem;

  background-color: ${(props) => props.theme.inputBackground};
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  max-width: unset;

  padding: 0 16px;

  font: 400 1.4rem/1.5 Poppins, sans-serif;
  color: ${(props) => props.theme.color};

  border: 0;
  outline: none;
  background-color: transparent;

  ::placeholder {
    color: ${(props) => props.theme.color};
  }
`;

export const SearchButton = styled.button`
  width: 48px;
  height: 100%;
  padding-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.25s ease;

  border: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  :hover {
    filter: brightness(90%);
  }
`;

export const SearchButtonIcon = styled(FiSearch)`
  width: 22px;
  height: 22px;

  color: ${(props) => props.theme.color};
`;

export const ResultsContainer = styled.section`
  width: 100%;
  max-width: 968px;
  max-height: calc(100vh - 185px);

  padding: 25px 0;
  margin-top: 33px;
  padding-left: 6px;

  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ResultItemContainer = styled.div`
  width: 168.63px;
  max-height: 302px;

  margin: 8px;

  display: flex;
  flex-direction: column;

  transition: transform 0.15s ease-in-out;

  cursor: pointer;
  overflow: hidden;
  border-radius: 2.5px;
  background-color: ${(props) => props.theme.backgroundInPrimary};

  -webkit-box-shadow: 0px 0px 8px 0px rgba(36, 36, 36, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(36, 36, 36, 1);
  box-shadow: 0px 0px 8px 0px rgba(36, 36, 36, 1);

  :hover {
    transform: scale(1.15, 1.15);
  }

  > img {
    width: 168.63px;
    height: 248px;
  }

  > div {
    flex: 1;
    width: 100%;
    padding: 8px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    -webkit-box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.4);

    > h5 {
      width: 100%;
      max-height: 38px;

      font: 700 1.3rem/1.5 Poppins, sans-serif;
      overflow: hidden;
      text-align: center;
    }
  }
`;
