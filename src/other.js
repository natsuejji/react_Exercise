import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col} from 'reactstrap'
import './scss/style.scss';
import cake from './image/cake.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const list ={
      'text-align' : 'left'
    }
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
                    <h3>{'因為不知道要放什麼了只好貼上海綿蛋糕的作法'}</h3>
                    <ol style={list}>
                      <li>低粉過篩，奶油隔水加熱融化，備用。 烤箱預熱170度。</li>
                      <li>雞蛋加細砂糖和鹽，用電動打蛋器打到濕性發泡，分次加入麵粉和香草精拌勻（沒有粉粒即可）。</li>
                      <li>挖一些麵糊到融化的奶油拌勻，再倒入麵糊裡拌勻（要輕快）。</li>
                      <li>放入6吋烤模（我是用心型的）170度烤25～30分鐘（視個人烤箱調整）。</li>
                      <li>烤好倒扣涼了就可脫模，撒上糖粉就很美味囉！</li>
                    </ol>
                    <img src={cake}/>
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