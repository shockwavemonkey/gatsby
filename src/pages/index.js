import React from 'react';
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const data =  fetch("https://notion-api.precisionmining.workers.dev/v1/page/Path-Annotation-Script-9378e8e911db48f383bd42fee67acd0b").then(res => res.json());
const blockMap = data.recordMap.block;
export default () => (
    <div style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blockMap} />
    </div>
);
