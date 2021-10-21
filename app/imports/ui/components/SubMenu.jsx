import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default class SubMenu extends React.Component {
  render() {
    return (
      <Menu id="SubMenu" borderless widths={4} size='huge'>
        <Container id="SubMenuContainer">
          <Menu.Item><a>ORDER NOW</a></Menu.Item>
          <Menu.Item><a>NEWS</a></Menu.Item>
          <Menu.Item><a>TOUR</a></Menu.Item>
          <Menu.Item><a>CONTENT</a></Menu.Item>
        </Container>
      </Menu>
    );
  }
}
