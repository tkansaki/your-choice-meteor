import React from 'react';
import { Container, Image, Table } from 'semantic-ui-react';

export default class Album extends React.Component {
  render() {
    return (
      <Container id="Album">
        <Table className="Table">
          <Table.Row>
            <Table.Cell className="cell">
              <div id="AlbumLeftColumn">
                <Image src="/images/album.jpeg" className="albumcover"></Image>
                <div id="button1" className="button">
                  <p>ORDER NOW</p>
                </div>
                <div id="button2" className="button">
                  <p>STREAM HUMAN :||: NATURE NOW</p>
                </div>
                <div id="button3" className="button">
                  <p>READ THE LYRICS</p>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell className="cell">
              <div id="AlbumRightColumn">
                <Image src="images/logo.png" size='medium' centered></Image>
                <Image src="/images/sublogo.png" size='medium' verticalAlign='bottom'></Image>
                <h2>OUT NOW!</h2>
                <h2>CD 1:</h2>
                <ol role="list">
                  <li>
                    <strong>Music</strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>Noise </strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>Shoemaker </strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>Harvest </strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>Pan </strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>How’s The Heart? </strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>Procession </strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>Tribal</strong>
                    <a><strong> </strong><em>(lyrics)</em></a>
                  </li>
                  <li>
                    <strong>Endlessness </strong>
                    <a><em>(lyrics)</em></a>
                  </li>
                </ol>
                <h2>CD 2:</h2>
                <ol role="list">
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Vista</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World</em> -
                    <strong>The Blue</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>The Green</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Moors</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Aurorae</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong> Quiet As The Snow</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Anthropocene </strong>(incl. “Hurrian Hymn To Nikkal”)
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Ad Astra</strong>
                  </li>
                </ol>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table>
      </Container>
    );
  }
}