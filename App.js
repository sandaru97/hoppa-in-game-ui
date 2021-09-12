import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FaBeer } from 'react-icons/fa';
import podium from './podium.svg';


import { GameIcon } from "./gameicon";
import { GameButton } from "./gamebutton";

class TimeDisplay extends React.Component {
  render() {
    return <div style={{ flex: 2, float: "right", margin: 0, padding: "10px", textAlign: "right" }}>Time: {this.props.time}</div>;
  }
}

class CoinDisplay extends React.Component {
  render() {
    return <div style={{ flex: 1, padding: "10px" }}>
      Coins: {this.props.coins}</div>;
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
    return <View style={{top:'50%',textAlign:'center',margin:0,padding:0,top:"50%", flexDirection: "column",  flex: 1, display: "inline-block", float: "center", display: "block", display: 'flex', justifyContent: 'center', alignItems: 'center',  }}><h1>{this.props.jumps}</h1>

    
      <Text style={{margin:0,padding:0, flex: 1, textAlign: "center", display: "inline-block", float: 'center' }}>
        Best : xx</Text></View>;
  }
}

class Character extends React.Component {
  render() {
    return <div><br clear="left"/><View style={{align:'center',  textAlign: "center",
      display:"block",float:'center',  clear: "both",    }}><img width='30px' height='30px' src={require('./settings.png')} /></View><br clear="left"/></div>;
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
    var background= "linear-gradient(to bottom, black  10%, "+btnColor+" 50%)";
    
    return <p className="Button" style={{
      
      alignItems:'center',flexDirection:"row",
      float: 'center', justifyContent: 'center',
      alignItems: 'center', textAlign: "center", justifyContent: "center", alignContent: "center", alignItems: "center",
      flex:1,
      // justifyContent:"center",
      padding: "10px",
      cursor: "pointer",
      margin: "5px",
      // marginBottom: "5px",
      //textShadow: "0 -2px 0 #4a8a65, 0 1px 1px red",
      boxSizing: "border-box",
      fontSize: "1em",
      //fontFamily: "Helvetica, Arial, Sans-Serif",
      textDecoration: "none",
      //fontWeight: "bold",
      color: "white",
      height: "auto",
      lineHeight: "35px",
      //padding: "0 32.5px",
      display: "inline-block",
      width: "16%",
      background: background,
      borderRadius: "5px",
      borderTop: "1px solid #c8e2d3",
      borderBottom: "3px solid #000000",
      bottom: 0,
      transition: "all 0.06s ease-out",
      //position: "relative",
    }}>{this.props.text}<img width='30px' height='30px' src={require('./settings.png')} />

    </p>
  }
}

export default function App() {
  return (<div >
    <div style={{flexDirection:'column'}}>
    <View style={styles.container} >
      <CoinDisplay coins="100" />
      <TimeDisplay time="1:00" />
    </View>
    <JumpDisplay jumps="100" />
    <br/>
    <Character  />


      <View style={styles.btnBar}>
        <UIButton text="" color="red"  />
        <UIButton text="" color="yellow" />
        <UIButton text="" color="orange" />
        <UIButton text="" color="green" />
        <UIButton text="" color="blue" />
{/*         <UIButton text="" style={styles.uiButton} />
 */}    
    </View>
  </div>
  </div>
  );
}

const styles = StyleSheet.create({
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
    tableLayout: "fixed",
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
  
});
