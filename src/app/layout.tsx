import { PokemonProvider } from "@/context/contextPokemon";
import StyledProvider from "@/global/styledProvider";
import { Poppins } from "next/font/google";
import { Header } from "./components/header";

export const metadata = {
  title: "Pokemons",
  description: "Escolha seu pokemon",
};
const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StyledProvider>
          <PokemonProvider>
            <Header>{children}</Header>
          </PokemonProvider>
        </StyledProvider>
      </body>
    </html>
  );
}
