import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FaBeer } from 'react-icons/fa';
import podium from './podium.svg';


import { GameIcon } from "./gameicon";
import { GameButton } from "./gamebutton";

import { useFonts } from 'expo-font';


class TimeDisplay extends React.Component {
  render() {
    return <div style={{ flex: 2, float: "right", margin: 0, padding: "10px",paddintBottom:'0', textAlign: "right" }}><img width="35px" height="auto" src={require('./time.png')}/> <span style={{fontSize:"45px"}}>{this.props.time}</span></div>;
  }
}

class CoinDisplay extends React.Component {
  render() {
    return <div style={{ flex: 1, padding: "10px",paddingBottom:"0", }}>
      <img width="50px" height="auto" src='https://st3.depositphotos.com/3027583/16082/v/600/depositphotos_160820422-stock-illustration-pixel-ethereum-cripto-currency-blockchain.jpg'/> <span style={{fontSize:"45px"}}>{this.props.coins}</span></div>;
  }
}
/////////// GOALS //////////////
class Goal extends React.Component {
  render() {
    if (this.props.achieved){
      return <div style={{ flex: 1, padding: "10px" }}>
      {this.props.text}</div>;
    }
    
  }
}

class JumpDisplay extends React.Component {
  render() {
    return <View style={{top:'50%',textAlign:'center',margin:0,padding:0,top:"50%", flexDirection: "column",  flex: 1, display: "inline-block", float: "center", display: "block", display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize:"60px",  }}><h1>{this.props.jumps}</h1>

    
      <Text style={{ margin:0,padding:0, flex: 1, textAlign: "center", display: "inline-block", float: 'center' ,fontSize:"20px"}}>
        Best : xx</Text></View>;
  }
}

class Character extends React.Component {
  render() {
    return <div><br clear="left"/><View style={{align:'center',  textAlign: "center",
      display:"block",float:'center',  clear: "both",    }}><img width='200px' height='auto' src="https://images.squarespace-cdn.com/content/v1/5a3750f3f14aa149ae492d36/1539816574965-J3G2M19VIW7O36CN6BZ2/teacher.png" /></View><br clear="left"/></div>;
  }
}
/* class JumpDisplayBest extends React.Component {
  render() {
    return <span style={{flex:2,textAlign:"center",display: "inline-block",float:'top'}}>
     Best : xx</span>;
  }
} */

class UIButton extends React.Component {
  render() {
    var btnColor=this.props.color;
   // var btnImg=;
    //var background= "linear-gradient(to bottom, black  10%, "+btnColor+" 50%)";
    
    return <button onMouseEnter={this.background="blue"} onMouseLeave={this.mouseLeave}
    style={{
      
      
      background: "red",
      border: "5px solid brown",
      font: "inherit",
      lineHeight: "1",
      margin: "0.1em",
      padding: "1em 2em",
      cornerRadius: "10px",
      padding: "5px"
      /* &:hover: {
        background: 'blue',
      } */
      

    }} class="raise"
      
      
      ><img width="50px" height ="auto" src="https://img.icons8.com/ios-filled/50/ffffff/pixel-cat.png"/><br/></button>
  }
}

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Font.ttf'),
  });
  return (<div style={{fontFamily:require("./assets/fonts/Font.ttf"),}}>
    <div style={{flexDirection:'column'}}>
    <View style={styles.container} >
      <CoinDisplay coins="100" />
      <TimeDisplay time="1:00" />
    </View>
    <JumpDisplay jumps="100" />
    <br/>
    <Character  />

        

      <View style={styles.btnBar}>
     <UIButton text="" color="#4FB286"  />
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

const styles = StyleSheet.create({
  Hover:{
background:"green",
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    flex: 1,
    width: "100%"
    //flex: 1,
    //backgroundColor: '#000000',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
  uiButton: {
    cursor: "pointer",

    marginLeft: "5px",
    marginBottom: "15px",
    textShadow: "0 -2px 0 #4a8a65, 0 1px 1px #c2dece",
    boxSizing: "border-box",
    fontSize: "2em",
    fontFamily: "Helvetica, Arial, Sans-Serif",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#5ea97d",
    height: "65px",
    lineHeight: "65px",
    padding: "0 32.5px",
    display: "inline-block",
    width: "auto",
    background: "linear-gradient(to bottom, #9ceabd 0%, #9ddab6 26%, #7fbb98 100%)",
    borderRadius: "5px",
    borderTop: "1px solid #c8e2d3",
    borderBottom: "1px solid #c2dece",
    bottom: 0,
    transition: "all 0.06s ease-out",
    //position: "relative",
    position: "fixed",
    overflow: "hidden",
    bottom: "0",
    //float:'center',
  }, btnBar: {
    background: "#0e79b2",
    tableLayout: "auto",
    display: "fixed",
    overflow: "hidden",
    flexDirection:'row',
    //backgroundColor: "#333",
    position: "fixed",
    bottom: "0",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnNew:{
    
  textDecoration: "none",
  color: "white",
  width: "200px",
  height: "100px",
  background: "#F2385A",
  position: "relative",
  margin: "30px",
  top: "100px",
  padding: "16px",
  fontSize: "50px",
  borderRadius: "10px",
  boxShadow: "0px 15px 0px 0px darken($pink-hot, 5%), 0px 0px 20px 0px #bbb",

  transition: "all 0.2s"
  
  }
  
});
