import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Tab Component
function SciDataTab(props) {
    return (
        <Menu.Item key={props.name} active={props.isActive} onClick={props.changeTab} as='a'> 
            {props.title}  <Icon name='remove circle' onClick={props.removeTab}/> 
        </Menu.Item>
    );
}

export default SciDataTab;