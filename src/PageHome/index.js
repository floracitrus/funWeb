import React from "react";
import { Layout, Button, Input, Form } from "antd";
//import "react-turntable/assets/index.css"
import NavBar from "src/components/NavBar";
import _Footer from "src/components/Footer";
import ReactTurntable from "src/components/Turntable";
import DynamicFieldSet from "src/components/DynamicFieldSet";


const { Header, Content, Footer } = Layout;
var prizes = ['肥宅鸡','麦当劳','宫保鸡丁','炒土豆丝','包子','饺子','牛肉米粉','牛肉面','烤茄子鱼','麻辣烫','拉咖撒','凉皮','肉夹馍']

var options = {
    prizes,
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
const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);


class PageHome extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {option: options
    };
    this.onUpdate = this.onUpdateOptions.bind(this);
  }
  static foodoptions = [
      'MC', 'KFC', 'Healthy style'
  ];
  onUpdateOptions = (optList) => {
    options.prizes = optList;
    this.setState(state => ({
        option: options
      }));
    console.log("parent states ", this.state.option );
  }
  render() {
    return (
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <h1
          >
            What do you want to eat today?
          </h1>

          <div style={{
            fontWeight: "bold",
            marginTop: "2rem",
            fontSize: "1.2rem"
          }}>
          是哪个食物小可爱这么幸运要被我吃了呢：-)
          </div>

          <div style={{
            fontWeight: "bold",
            marginTop: "2rem",
            fontSize: "1rem"
          }}>
          You can add more food you like which is not on the turntable
          </div>

          <div align="left">
          <WrappedDynamicFieldSet onUpdate = {this.onUpdateOptions}/>
          </div>

          <div style = {styles}>
            <ReactTurntable  {...this.state.option} />
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
