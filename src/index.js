import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col,  Card, Button, CardTitle, CardText} from 'reactstrap';
import {fakearticle} from './js/var.js';
import './scss/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: props.width};
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    console.log(fakearticle)
  }

  resize() {
    this.setState({width: window.innerWidth});
  }

  render() {

    var fake = fakearticle
    const fakeArtiList = fake.map(function (article, index) {
      return <Card body outline className={'m-3'} color="secondary" key={index}>
              <CardTitle>{article.title}</CardTitle>
              <CardText>{article.content}</CardText>
              <div className={ 'offset-10'}>
                <Button className={ 'w-100'}>詳細..</Button>
              </div>
             </Card>
    });
      
    const bold={
      'fontWeight': 'bold'
    }
      
    return (
        <div>
            <Helmet>
                <title>{'home work1 - index'}</title>
            </Helmet>
            <MyNavbar/>
            <Container fluid className='p-0 m-0'> 
              <MyJumbotron/>
              <Row >
                <Col xl="2" md="4"  xs="12"><SideBar cur={'index'}/></Col>
                <Col xl="10" md="6"  xs="12"> 
                  <div className={"mainContent"}>
                    <h1 style={bold}>公告</h1>
                    {fakeArtiList}
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