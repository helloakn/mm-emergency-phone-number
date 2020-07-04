import React, {Component} from 'react';
import {Dimensions,Text, StyleSheet,  View,StatusBar} from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import Navigator from './Navigator';
import styled from 'styled-components/native';
//import {StatusBar} from 'react-native';
// import RatingPopup from "./Components/RatingPopup";
const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
`
type Props = {};
export default class App extends Component<Props> {
  constructor(Props){
    super(Props);
    
    this.state = {
      splashState: true, // if false it is calculator state
      Layout : '', //Orientation  -> 'L' for Landscape 'P' for Portrait
      screenHeight : '', //screen height
      screenWidth : '', //screen width
    }
  }
  componentDidMount(){
    this.DetectOrientation();
    setTimeout(this.tick, 3000,this);
  }

  
  tick(me) {
    me.setState({splashState:false,});
    
  }

  DetectOrientation(){
    if(this.state.screenWidth > this.state.screenHeight)
    {
        // Write Your own code here, which you want to execute on Landscape Mode.
        this.setState({
            Layout : 'L' // Landscape
        });
    }
    else{
        // Write Your own code here, which you want to execute on Portrait Mode.
        this.setState({
          Layout : 'P' //Portrait
        });
    }
  } 

  
  render() {
    return (
      <Container>
      <StatusBar hidden/>
				{/* {popup} */}
        {this.state.splashState?
          <SplashScreen show={this.state.splashState}  />
        :
        <Navigator ref={nav => {
            this.navigator = nav;
          }}/>
        }
        
        
		 	</Container>
    );
  }
}

const styles = StyleSheet.create({
  conTainer: {
		display:'flex',
		flexDirection: 'column',
		height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor:'#ffff',

    
		
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
 
  TextStyle :{
   fontSize : 20,
   color : '#000'
  }
});