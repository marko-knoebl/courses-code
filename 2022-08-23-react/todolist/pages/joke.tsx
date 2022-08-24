import type { GetServerSideProps, NextPage } from "next";

type JokeProps = { joke: string };

const Joke: NextPage<JokeProps> = (props) => {
  return <article>{props.joke}</article>;
};

const getServerSideProps: GetServerSideProps<JokeProps> = async () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const res = await fetch(url);
  const joke = (await res.json()).value;
  return { props: { joke: joke } };
};

export default Joke;
export { getServerSideProps };
