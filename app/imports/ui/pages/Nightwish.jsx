import React from 'react';
import SubMenu from '../components/SubMenu';
import News from '../components/News';
import Album from '../components/Album';

export default class Nightwish extends React.Component {
  render() {
    return (
      <div>
        <SubMenu />
        <News />
        <Album/>
      </div>
    );
  }
}
