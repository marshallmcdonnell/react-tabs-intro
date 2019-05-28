import React from 'react';
import { Menu, Icon, Segment } from 'semantic-ui-react';
import { JsonForms } from '@jsonforms/react';
import 'semantic-ui-css/semantic.min.css';


// Tab Component
export function SciDataTab(props) {
    return (
        <Menu.Item key={props.name} active={props.isActive} onClick={props.changeTab} as='a'> 
            {props.title}  <Icon name='remove circle' onClick={props.removeTab}/> 
        </Menu.Item>
    );
}

export class SciDataTabPanel extends React.Component {
    constructor(props) {
        super(props);

        this.inputPanel = <JsonForms schema={props.schema} uischema={props.uischema} path={props.path}/>
        this.jsonldPanel = <h1>Insert Data</h1>

        this.state = {
            activeItem: 'Input',
            display: this.inputPanel
        }

        this.changeTab = this.changeTab.bind(this);
    }

    renderInputPanel() {
        return <JsonForms schema={this.props.schema} uischema={this.props.uischema} path={this.props.path}/>
    }

    renderJsonLD() {
        return <h1>Insert Data</h1>
    }
    
    
    changeTab(tabName, display) {
        this.setState({ 
            activeItem: tabName,
            display: display,
        })
    }
    
    render() {
        const display = this.state.display;
        const activeItem = this.state.activeItem;
    
        return (
        <div>
            <Menu pointing secondary>
                <Menu.Item 
                    name='Input'
                    active={activeItem === 'Input'}
                    onClick={() => this.changeTab('Input', this.renderInputPanel() )}
                />
                <Menu.Item
                    name='JSON-LD'
                    active={activeItem === 'JSON-LD'}
                    onClick={() => this.changeTab('JSON-LD', this.renderJsonLD() )}
                />
            </Menu>
    
            <Segment>
                {display}
            </Segment>
        </div>
        )
    }
}

