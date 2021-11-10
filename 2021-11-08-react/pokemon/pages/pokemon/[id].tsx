import { GetStaticPaths } from "next";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = (await res.json()).results;
  const ids = data.map((entry: any) => {
    const parts = entry.url.split("/");
    const id = parts[parts.length - 2];
    return id;
  });
  const paths = ids.map((id: string) => ({ params: { id: id } }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.id}`
  );
  const data = await res.json();
  return { props: { data: data } };
};

const Post = (props: { data: any }) => {
  const router = useRouter();
  return (
    <div>
      <h1>detail view for pokemon {router.query.id}</h1>
      <p>name: {props.data.name}</p>
      <p>height: {props.data.height}</p>
    </div>
  );
};

export default Post;
