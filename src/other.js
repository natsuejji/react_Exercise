import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col} from 'reactstrap'
import './scss/style.scss';
import hana from './image/hana.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
        <div>
            <Helmet>
                <title>{'home work1 - other'}</title>
            </Helmet>
            <MyNavbar />
            <Container fluid className='p-0 m-0'> 
              <MyJumbotron />
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