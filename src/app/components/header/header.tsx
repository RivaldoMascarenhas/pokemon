"use client";
import { ReactNode, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { PokemonContext } from "@/context/contextPokemon";
import Image from "next/image";
import * as S from "./style";
import logo from "public/logo.png";
import { Item } from "../itemList/item";

export function Header({ children }: { children: ReactNode }) {
  const { state } = useContext(PokemonContext);
  const [page, setPage] = useState("seeAll");
  const router = useRouter();
  const numberFavorites = state.favorite.length;
  const handlePage = (text: string) => {
    router.push(`/${text}`);
    setPage(text);
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
              isclicked={page === "favorite" ? "active" : "disable"}
              onClick={() => handlePage("favorite")}
              text={"Favoritos"}
            />
            <Item
              text={"Procurar"}
              isclicked={page === "search" ? "active" : "disable"}
              onClick={() => handlePage("search")}
            />
            <Item
              text={"Ver todos"}
              isclicked={page === "seeAll" ? "active" : "disable"}
              onClick={() => handlePage("seeAll")}
            />
          </ul>
          <button>Sair</button>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>{children}</S.Main>
    </div>
  );
}
