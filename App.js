import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FaBeer } from 'react-icons/fa';
import podium from './podium.svg';


import { GameIcon } from "./gameicon";
import { GameButton } from "./gamebutton";

class TimeDisplay extends React.Component {
  render() {
    return <div style={{ flex: 2, float: "right", margin: 0, padding: "10px",paddintBottom:'0', textAlign: "right" }}><img width="35px" height="auto" src={require('./time.png')}/> <span style={{fontSize:"45px"}}>{this.props.time}</span></div>;
  }
}

class CoinDisplay extends React.Component {
  render() {
    return <div style={{ flex: 1, padding: "10px",paddingBottom:"0", }}>
      <img width="35px" height="auto" src={require('./coin.png')}/> <span style={{fontSize:"45px"}}>{this.props.coins}</span></div>;
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
      display:"block",float:'center',  clear: "both",    }}><img width='200px' height='auto' src={require('./char.png')} /></View><br clear="left"/></div>;
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
      height: "90px",
     // lineHeight: "35px",
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
    }}>{this.props.text}
    <img style={{top:"10%",}} width='40px' height='auto' src={require('./settings.png')} />
    {/* <br/> Text */}

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

        <p style={{
          padding:"10px",
                width: "16%",
justifyContent:"center",
alignItems:"center",
          background: "#0e79b2",
  color: "#e5dc15",
  //font-family: "Montserrat", sans-serif,
  textTransform: "uppercase",
  textDecoration: "none",
  margin: "1rem",
  padding: "0.rem",
  border: "4px solid #e5dc15",
  borderRadius: "0.5rem",
  position: "relative",
  top: "0",
  transition: "all 300ms ease-in-out",
  boxShadow: "0 0.6em red, 0 0.9em rgba(0, 0, 0, 0.4)",
          /* textDecoration: "none",
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
  boxShadow: "0px 15px 0px 0px darken(red, 5%), 0px 0px 20px 0px #bbb",

  transition: "all 0.2s", */
  //boxShadow: "0px 15px 0px 0px darken(red, 5%)"

  }}>Test</p>

      <View style={styles.btnNew}>
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
