import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle} from 'reactstrap'
import YouTube from '@u-wave/react-youtube';
import './scss/style.scss';
import {_music} from './js/var.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const music = _music
    const musiclist = music.map(function (v, index) {
      return <Card key={index} className={'m-3'}>
              <CardBody>
                <CardTitle><h3>{v.title}</h3></CardTitle>
              </CardBody>
              <CardBody>
                <Row>
                  <YouTube video={v.id} width={'720'} height={'360'} className={'col-xs-12 col-md-6'}/>
                  <CardText className={'col-xs-12 col-md-6 p-3 lyric'}>
                    <pre>
                    {v.lyric}
                    </pre>
                  </CardText >
                </Row>
              </CardBody>
             </Card>
  });
     
    return (
        <div>
            <Helmet>
                <title>{'home work1 - music'}</title>
            </Helmet>
            <MyNavbar />
            <Container fluid className='p-0 m-0'> 
              <MyJumbotron />
              
              <Row >
                <Col xl="2" md="4"  xs="12"><SideBar cur={'index'}/></Col>
                <Col xl="10" md="6"  xs="12"> 
                  <div className={"mainContent"}>
                    {musiclist} 
                  </div>
                </Col>
              </Row> 
              <MyFooter/>
            </Container>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));