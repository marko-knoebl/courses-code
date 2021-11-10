import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps } from "next";

type PokemonListEntry = {
  name: string;
  url: string;
};

type ApiResponse = {
  results: Array<PokemonListEntry>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = (await res.json()) as ApiResponse;
  return { props: { data: data.results } };
};

const Index = (props: { data: Array<PokemonListEntry> }) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
    <ul>
      {props.data.map((pokemon) => (
        <li key={pokemon.url}>{pokemon.name}</li>
      ))}
    </ul>
  </div>
);

export default Index;
