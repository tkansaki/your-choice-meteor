import React from 'react';
import { Container } from 'semantic-ui-react';

export default class News extends React.Component {
  render() {
    return (
      <div id="News">
        <Container id="NewsContainer">
          <table>
            <tr>
              <td>LATEST NEWS:</td>
              <td><p>NIGHTWISH ANNOUNCES NORTH AMERICAN TOUR 2022!</p></td>
              <td><p>OCTOBER 12, 2021</p></td>
            </tr>
          </table>
        </Container>
      </div>
    );
  }
}
