import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FaBeer } from 'react-icons/fa';
import podium from './podium.svg';
import { GameIcon } from "./gameicon";
import { GameButton } from "./gamebutton";
//import { useFonts } from 'expo-font';
import Font0 from './assets/fonts/Font0.ttf';
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
    
    return <View style={{}}
    ><Text style={{ top: '40%', textAlign: 'center', margin: 0, padding: 0, top: "40%", flexDirection: "column", flex: 1, display: "block", float: "center", display: "block", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "10vw",
    textShadowColor: 'white',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
  fontFamily:"Font0",
  "text-transform": "uppercase",
	//background: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
  "-webkit-background-clip": "text",
  color:"red",

  //"-webkit-text-fill-color": "transparent",
}}>{this.props.jumps}</Text>


      <Text style={{ margin: 0, padding: 0, flex: 1, textAlign: "center", display: "block", float: 'center', fontSize: "20px" }}>
        Best : xx</Text></View>;
  }
}

class Character extends React.Component {
  render() {
    return <div><br clear="left" /><View style={{
      align: 'center', textAlign: "center",
      display: "block", float: 'center', clear: "both",
    }}><img width='40%' height='auto' src="https://i.imgur.com/jlJX7mB.png"/>
    </View><br clear="left" /></div>;
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
  let [fontsLoaded] = useFonts({
    'Font0': require('./assets/fonts/Font0.ttf'),
  });
  if (!fontsLoaded) {
    return("");
  }
  return (<div syle={{justifyContent: 'center', 
    flex: 1, 
    fontFamily: "Font0", 
  
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


