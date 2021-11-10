import { GetServerSideProps } from "next";

type Props = {
  joke: string;
};

const ChuckNorrisJoke = (props: Props) => <article>{props.joke}</article>;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const text = (await res.json()).value;
  return { props: { joke: text } };
};

export default ChuckNorrisJoke;
