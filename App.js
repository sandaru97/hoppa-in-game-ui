import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FaBeer } from 'react-icons/fa';
import podium from './podium.svg';
import { GameIcon } from "./gameicon";
import { GameButton } from "./gamebutton";
//import { useFonts } from 'expo-font';
import CarterOne from './assets/fonts/CarterOne.ttf';
//import stylesCss from "./index.css";

import useState from 'react';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    borderStyle: "5px solid brown",
    font: "inherit",
    lineHeight: "1",
    margin: "0.1em",
    padding: "1em 2em",
    cornerRadius: "10px",
    padding: "5px",
    borderRadius: "10%",
  },
  btnBar: {
    //background: "#0e79b2",
    //backgroundColor: "rgb(213,198,96)",
    tableLayout: "fixed",
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
    return <div style={{fontFamily: 'OCR A Std, monospace',"fontSmooth":"never","WebkitFontSmoothing":"none",
      height: "30px", margin: "15px", display: "inline-block", justifyContent: "center", alignItems: "center", flex: "1", margin: "0", padding: "0", display: "block",
      textAlign: "center", width: "auto", backgroundColor: 'grey', borderRadius: "30px", flex: 1, float: "right", margin: "10px", padding: "10px", paddintBottom: '0', textAlign: "right"
    }}><img width="25px" height="auto" src={require('./time.png')} /> <span style={{ fontSize: "35px" }}>{this.props.time}</span></div>;
  }
}

class CoinDisplay extends React.Component {
  render() {
    return <div style={{ display: "inline-block", flex: 1, padding: "10px", paddingBottom: "0", }}>
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
    }}><img width='40%' height='auto' src="data:image/png;base64,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" /></View><br clear="left" /></div>;
  }
}

class UIButton extends React.Component {
  // isFocused=false;
  //state={isFocused=false};
  state = { isFocused: false };
  constructor(props) {
    super(props);
    this.setState({ isFocused: false });
    //state = { isFocused: false }; 
    //isFocused=false;
    this.state = { isFocused: false };

  }
  onMouseEnter = () => {
    //isFocused=this.state.isFocused;
    this.setState({ isFocused: true });
  }
  onMouseLeave = () => {
    //isFocused=this.state.isFocused;
    this.setState({ isFocused: false });
  }
  render() {
    return <button onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
      style={(this.state.isFocused) ?
        {

          //background: "red",
          border: "5px solid yellow",
          font: "inherit",
          lineHeight: "1",
          margin: "0.1em",
          padding: "1em 1em",
          cornerRadius: "10px",
          padding: "5px",
          borderRadius: "10%",
          backgroundColor: "#Dd621a",
          boxShadow: "0 0.5em 0.5em -0.4em var(--hover)",
          transform: "translateY(-0.50em)",
          WebkitBoxShadow: "-1px 18px 19px 9px rgba(0,0,0,0.48)",
          boxShadow: "-1px 18px 19px 9px rgba(0,0,0,0.48)",
          filter: "contrast(0.7)",
        }

        :

        {

          background: "red",
          border: "5px solid brown",
          font: "inherit",
          lineHeight: "1",
          margin: "0.1em",
          padding: "1em 1em",
          cornerRadius: "10px",
          padding: "5px",
          borderRadius: "10%",
        }}


    ><img style={{padding:0,margin:0,}} width="100%" height="auto" src="https://img.icons8.com/ios-filled/50/ffffff/pixel-cat.png" /><br /></button>
  }
}

export default function App() {
  useFonts({
    'CarterOne': require('./assets/fonts/CarterOne.ttf'),
  });
  
  return (<div syle={{justifyContent: 'center', 
    flex: 1, 
    fontFamily: "CarterOne", 
  
  backgroundsize: "contain",
  backgroundImage: "url('https://i.redd.it/srdhzvztb8o11.gif')",

  }}>sss
      
      <div style={{backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%", padding: "0", margin: '0', flexDirection: 'column' , backgroundsize: "100% 100%",
  backgroundImage:"url('https://64.media.tumblr.com/3c954f47fdbbc285e110103d201803c1/tumblr_ps8ihv0nhj1tk1tg8o1_500.gif')",
  }}>
        <View style={{}} style={styles.container} >
          <div style={{ display: "inline-block", flexDirection: "column" }}>
            <CoinDisplay coins="100" />
            <TimeDisplay time="1:00" />
          </div>
        </View>
        <JumpDisplay jumps="100" />
        <br />
        <Character style={{}} />



        <View style={{}} style={styles.btnBar}>
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


