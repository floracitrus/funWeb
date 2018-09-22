import React from "react";
import { Layout, Button } from "antd";
//import "react-turntable/assets/index.css"
import NavBar from "src/components/NavBar";
import _Footer from "src/components/Footer";
import ReactTurntable from "src/components/Turntable";
import DynamicFieldSet from "src/components/DynamicFieldSet";
const { Header, Content, Footer } = Layout;
const prizes = [
    'Yong Tou Fu', 'Hainan Chicken Rice', '3Veg+1rice',
    'Seng Chicken soup', 'Beef Noodle', 'Pork Noodle',
    'Cha shao Bao','Mcdonald', 'KFC', 'Porridge',
]

const options = {
    prizes,
    width: 500,
    height: 500,
    Color0: '#F4D35E',
    Color1: '#EE964B',
    Color2:'#D0E3CC',
    Color3:'#986C6A',
    fontStyle:{
        color:"#fff",
        size:"14px",
        fontVertical:true,
        fontWeight:"bold",

    },
    speed : 1000,
    duration:5000,
    clickText:"Click",
    onStart(){
      //If you want before the rotate do some...
      console.log('start...');
      //If you want stop rotate you can return false
      return true
    },
    onComplete(prize){
      console.log('prize:',prize)
    }
}
const styles = {
    justifyContent:"center",
    alignContent:"center",
    display:"flex"
}


class PageHome extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div
            style={{
              fontWeight: "bold",
              marginTop: "2rem",
              fontSize: "1.5rem"
            }}
          >
            What do you want to eat today?
          </div>
          <div style = {styles}>
            <ReactTurntable {...options} />
            </div>

        </Content>
        <Footer style={{ textAlign: "center" }}>
          <_Footer />
        </Footer>
      </Layout>
    );
  }
}

export default PageHome;
