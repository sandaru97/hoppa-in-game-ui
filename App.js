import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FaBeer } from 'react-icons/fa';
import podium from './podium.svg';
import { GameIcon } from "./gameicon";
import { GameButton } from "./gamebutton";
import { useFonts } from 'expo-font';
import CarterOne from './assets/fonts/CarterOne.ttf';
import stylesCss from "./index.css";

import  {useState} from 'react';

const styles = StyleSheet.create({
  btn: {
    background: "red",
    border: "5px solid brown",
    font: "inherit",
    lineHeight: "1",
    margin: "0.1em",
    padding: "1em 2em",
    cornerRadius: "10px",
    padding: "5px",
    borderRadius: "10%",
  },
  btnBar: {
    background: "#0e79b2",
    tableLayout: "auto",
    display: "fixed",
    //overflow: "hidden",
    flexDirection: 'row',
    //backgroundColor: "#333",
    position: "fixed",
    bottom: "0",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
});

var btnStyle = styles.uiButton;
class TimeDisplay extends React.Component {
  render() {
    return <div style={{ flex: 2, float: "right", margin: 0, padding: "10px", paddintBottom: '0', textAlign: "right" }}><img width="35px" height="auto" src={require('./time.png')} /> <span style={{ fontSize: "45px" }}>{this.props.time}</span></div>;
  }
}

class CoinDisplay extends React.Component {
  render() {
    return <div style={{ flex: 1, padding: "10px", paddingBottom: "0", }}>
      <img width="50px" height="auto" src='https://st3.depositphotos.com/3027583/16082/v/600/depositphotos_160820422-stock-illustration-pixel-ethereum-cripto-currency-blockchain.jpg' /> <span style={{ fontSize: "45px" }}>{this.props.coins}</span></div>;
  }
}
/////////// GOALS //////////////
class Goal extends React.Component {
  render() {
    if (this.props.achieved) {
      return <div style={{ flex: 1, padding: "10px" }}>
        {this.props.text}</div>;
    }

  }
}

class JumpDisplay extends React.Component {
  render() {
    return <View style={{ top: '50%', textAlign: 'center', margin: 0, padding: 0, top: "50%", flexDirection: "column", flex: 1, display: "inline-block", float: "center", display: "block", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "60px", }}><h2>{this.props.jumps}</h2>


      <Text style={{ margin: 0, padding: 0, flex: 1, textAlign: "center", display: "inline-block", float: 'center', fontSize: "20px" }}>
        Best : xx</Text></View>;
  }
}

class Character extends React.Component {
  render() {
    return <div><br clear="left" /><View style={{
      align: 'center', textAlign: "center",
      display: "block", float: 'center', clear: "both",
    }}><img width='40%' height='auto' src="https://www.pngfind.com/pngs/m/95-954109_overwatch-mccree-pixel-spray-hd-png-download.png" /></View><br clear="left" /></div>;
  }
}

class UIButton extends React.Component {
  // isFocused=false;
  //state={isFocused=false};
  state = { isFocused: false };
  constructor(props) {
    super(props);
    this.setState({isFocused:false});
    //state = { isFocused: false }; 
    //isFocused=false;
    this.state = { isFocused: false }; 

  }
  onFocusChange = () => {
    //isFocused=this.state.isFocused;
    this.setState({ isFocused: true });
} 
onMouseLeave = () => {
  //isFocused=this.state.isFocused;
  this.setState({ isFocused: false });
}
  render() {
    return <button   onMouseOver ={this.onFocusChange}onMouseLeave ={this.onMouseLeave}
      style={(this.state.isFocused) ?
        {  
          background: "red",
        border: "5px solid brown",
        font: "inherit",
        lineHeight: "1",
        margin: "0.1em",
        padding: "1em 2em",
        cornerRadius: "10px",
        padding: "5px",
        borderRadius: "10%",
        backgroundColor:"#DE631B",
        boxShadow: "0 0.5em 0.5em -0.4em var(--hover)",
        transform: "translateY(-0.50em)",
       WebkitBoxShadow: "-1px 18px 19px 9px rgba(0,0,0,0.48)", 
      boxShadow: "-1px 18px 19px 9px rgba(0,0,0,0.48)",
      filter: "contrast(1.1)",
    }
   
      :
  
            {background: "red",
          border: "5px solid brown",
          font: "inherit",
          lineHeight: "1",
          margin: "0.1em",
          padding: "1em 2em",
          cornerRadius: "10px",
          padding: "5px",
          borderRadius: "10%",}      } 


    ><img width="50px" height="auto" src="https://img.icons8.com/ios-filled/50/ffffff/pixel-cat.png" /><br /></button>
  }
}

export default function App() {

  return (<div style={{ fontFamily: CarterOne, }}>
    ddddd
    <div style={{ padding:"0",margin:'0',flexDirection: 'column' }}>
      <View style={styles.container} >
        <CoinDisplay coins="100" />
        <TimeDisplay time="1:00" />
      </View>
      <JumpDisplay jumps="100" />
      <br />
      <Character />



      <View style={styles.btnBar}>
        <UIButton text="" color="#4FB286" />
        <UIButton text="" color="#bbc7a4" />
        <UIButton text="" color="#8b80f9" />
        <UIButton text="" color="#dd7230" />
        <UIButton text="" color="#307351" />
        {/*         <UIButton text="" style={styles.uiButton} />
 */}
      </View>
    </div>
  </div>
  );
}


