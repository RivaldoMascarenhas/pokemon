import { styled } from "styled-components";
export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #ffcb05;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  & > ul {
    display: flex;
    list-style: none;
    gap: 1rem;

    height: 100%;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const Logo = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
`;
export const Main = styled.main`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
