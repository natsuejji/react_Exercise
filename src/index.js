import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col} from 'reactstrap';
import {fakearticle} from './js/var.js';
import './scss/style.scss';
import hana from './image/hana.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: props.width};
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({width: window.innerWidth});
  }

  render() {
    var jbimg;
    if (this.state.width > 700) {
      jbimg = {
                backgroundImage: `url(${hana})`,
                backgroundColor: '#ffdad2',
                backgroundPosition: 'center'

              };
    }
    else {
      jbimg = {
        backgroundImage: `url(${hana})`,
        backgroundColor: '#ffdad2',
        backgroundPosition: '-500px center'
      };
    }

    var fake = fakearticle
    const fakeArtiList = {
      
    }
    return (
        <div>
            <Helmet>
                <title>{'home work1 - index'}</title>
            </Helmet>
            <MyNavbar/>
            <Container fluid className='p-0 m-0'> 
              <MyJumbotron backimg={jbimg} />
              <Row >
                <Col xl="2" md="4"  xs="12"><SideBar cur={'index'}/></Col>
                <Col xl="10" md="6"  xs="12"> 
                  <div className={"mainContent"}>
                    <h3>{window.location.pathname}</h3>
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