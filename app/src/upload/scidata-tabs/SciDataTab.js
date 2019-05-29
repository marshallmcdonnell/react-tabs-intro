import React from 'react';
import { Menu, Icon, Segment } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';


// Tab Component
export function SciDataTab(props) {
    return (
        <Menu.Item key={props.name} active={props.isActive} onClick={props.changeTab} as='a'> 
            {props.title}  <Icon name='remove circle' onClick={props.removeTab}/> 
        </Menu.Item>
    );
}

export function SciDataTabPanel(props) {
    const display = props.display;
    const activeItem = props.activeItem;

    return (
    <div>
        <Menu pointing secondary>
            <Menu.Item 
                name='Input'
                active={activeItem === 'Input'}
                onClick={() => props.changeChildTab('Input')}
            />
            <Menu.Item
                name='JSON-LD'
                active={activeItem === 'JSON-LD'}
                onClick={() => props.changeChildTab('JSON-LD')}
            />
        </Menu>

        <Segment>
            {display}
        </Segment>
    </div>
    )
}

