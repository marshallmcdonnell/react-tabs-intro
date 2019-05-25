import React from "react";
import { Container } from "semantic-ui-react";
import DatasetTabs from "./SemanticDatasetTabs";


class App extends React.Component {
    render() {
        return (
            <Container style={{ margin: 20 }}>
                <DatasetTabs />
            </Container>
        )
    }
};

export default App;