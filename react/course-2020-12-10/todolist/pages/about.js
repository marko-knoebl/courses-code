import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <h1>About</h1>
      <p>Todo app by Marko</p>
    </div>
  );
}
