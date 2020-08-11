import { NotionRenderer, BlockMapType } from "react-notion";
import Head from "next/head";
import fetch from "node-fetch";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.precisionmining.workers.dev/v1/page/Path-Annotation-Script-9378e8e911db48f383bd42fee67acd0b"
  ).then(res => res.json());

  return {
    props: {
      blockMap: data
    }
  };
}

const Home = ({ blockMap }) => (
  <div
    style={{
      maxWidth: 708,
      margin: "0 auto",
      padding: "0 8px",
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
    }}
  >
    <Head>
      <title>react-notion example</title>
    </Head>
    <NotionRenderer blockMap={blockMap} />
  </div>
);

export default Home;
