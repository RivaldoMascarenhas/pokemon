"use client";
import { usePokemonContext } from "@/context/contextPokemon";
import Image from "next/image";
import logo from "public/logo.png";
import { ReactNode } from "react";
import { FiLogOut } from "react-icons/fi";
import { Item } from "../itemList/item";
import * as S from "./style";

export function Header({ children }: { children: ReactNode }) {
  const { state, dispatch } = usePokemonContext();
  const numberFavorites = state.favorite.length;
  const handlePage = (text: string) => {
    dispatch({ type: "page", payload: text });
  };
  return (
    <div>
      <S.Header>
        <S.HeaderContainer>
          <S.Logo href="/">
            <Image src={logo} width={75} height={30} alt={"Pokémon"} />
          </S.Logo>
          <ul>
            <Item
              numberFavorite={numberFavorites}
              isclicked={state.page === "favorite" ? "active" : "disable"}
              onClick={() => handlePage("favorite")}
              text={"Favoritos"}
            />
            <Item
              text={"Procurar"}
              isclicked={state.page === "search" ? "active" : "disable"}
              onClick={() => handlePage("search")}
            />
            <Item
              text={"Ver todos"}
              isclicked={state.page === "/" ? "active" : "disable"}
              onClick={() => handlePage("/")}
            />
          </ul>
          <button>
            Sair <FiLogOut />
          </button>
        </S.HeaderContainer>
      </S.Header>
      <div>{children}</div>
    </div>
  );
}
