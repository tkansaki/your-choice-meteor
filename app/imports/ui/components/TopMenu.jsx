import React from 'react';
import { Container, Menu, Icon, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless id="TopMenu">
        <Container id="TopMenuContainer">
          <Menu.Menu position="left">
            <Menu.Item><Icon className="icon" name="instagram" size='big' /></Menu.Item>
            <Menu.Item><Icon className="icon" name="facebook f" size='big' /></Menu.Item>
            <Menu.Item><Icon className="icon" name="twitter" size='big' /></Menu.Item>
            <Menu.Item><Icon className="icon" name="youtube" size='big' /></Menu.Item>
          </Menu.Menu>
          <Menu.Item>
            <div id="logo">
              <Image src="/images/logo.png" size='large' centered></Image>
              <Image src="/images/sublogo.png" size='large' verticalAlign='bottom' centered></Image>
            </div>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item><Icon className="icon" name="amazon" size='big' /></Menu.Item>
            <Menu.Item><Icon className="icon" name="spotify" size='big' /></Menu.Item>
            <Menu.Item><Icon className="icon" name="youtube" size='big' /></Menu.Item>
            <Menu.Item><Icon className="icon" name="shop" size='big' /></Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
