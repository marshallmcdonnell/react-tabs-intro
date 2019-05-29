import React from "react";
import { Container } from "semantic-ui-react";
import MainTabs from "./upload/main/MainTabs";


class App extends React.Component {
    render() {
        return (
            <Container style={{ margin: 20 }}>
                <MainTabs />
            </Container>
        )
    }
};

export default App;