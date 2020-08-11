import React, { Component } from 'react';
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

class App extends Component {
    // initially data is empty in state
    state = { data: [] };

    componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        fetch("https://notion-api.precisionmining.workers.dev/v1/page/Path-Annotation-Script-9378e8e911db48f383bd42fee67acd0b")
            // when we get a response map the body to json
            .then(response => response.json())
            // and update the state data to said json
            .then(data => this.setState({ data }));
    }


    render() {
        return (
            <div style={{ maxWidth: 768 }}>
                <NotionRenderer blockMap={this.state.data} />
            </div>
        );
    }
}

export default App;
