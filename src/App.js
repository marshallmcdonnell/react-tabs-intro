import React from "react";
import { Container } from "semantic-ui-react";
import MenuTabularOnLeft from "./MenuTabularOnLeft";

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


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