import React from 'react';
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

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

export default ({ blockMap }) => (
    <div style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blockMap} />
    </div>
);
