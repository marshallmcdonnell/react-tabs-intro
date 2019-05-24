import React from "react";
import { Container } from "semantic-ui-react";
import MenuTabularOnLeft from "./MenuTabularOnLeft";


class App extends React.Component {
    render() {
        return (
            <Container style={{ margin: 20 }}>
                <MenuTabularOnLeft />
            </Container>
        )
    }
};

export default App;