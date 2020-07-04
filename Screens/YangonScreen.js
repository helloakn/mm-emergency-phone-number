import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

class YangonScreen extends React.Component{
    constructor(props){
        super(props);
       
    }
    Police = () => {
       
        this.props.navigation.navigate('PoliceScreen');

        }
    Ambulance = () => {
        this.props.navigation.navigate('AmbulanceScreen');
    }
    Fire = () => {
        this.props.navigation.navigate('FireScreen');
    }
    handleClick = () => {
        
        this.props.navigation.goBack();
        }
    render(){
        return(
            <View style={styles.MainContainer}>

                <Header >
                    <Icon 
                        name="keyboard-backspace" 
                        style={{fontSize:45,color:'#ffffff',left:10}}
                        onPress={ this.handleClick} 
                    />
                    <Text   style={{fontWeight: 'bold', color:'#ffffff',textAlign:'center',fontSize:25,justifyContent:'center',flex:1}}>Yangon</Text>
                </Header>

                <Body>
                    <TouchableOpacity  onPress={ this.Police} style ={{backgroundColor:'#373585', width :wp('90%'), height:hp('14%'),alignContent:'center',justifyContent:'center',flexDirection:'row'}}>
                        <View style = {{backgroundColor:'#373585', width :wp('90%'), height:hp('14%'),alignContent:'center',justifyContent:'center',flexDirection:'row'}}>
                               
                            <View style = {{width :wp('50%'),justifyContent:'center'}}>
                                    
                                <Image
                                     style={{width: 70, height: 81, justifyContent:'center', left:40}}
                                    source={require('../assets/police.png')}
                                        />
                            </View>
                                    
                            <View style = {{width :'50%',justifyContent:'center',right:40}}>
                                 <Text style = {{fontSize:27,textAlign:'center',color:'#ffffff'}} >Police</Text>
                            </View>
                           
                        </View>
                    
                    </TouchableOpacity>
                    
                   <TouchableOpacity  onPress={ this.Ambulance}>
                        <View style = {{backgroundColor:'#b80000', width :wp('90%'), height:hp('14%'), alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                            <View style = {{width :'50%',justifyContent:'center'}}>
                                <Image
                                style={{width: 70, height: 70, justifyContent:'center', left:40}}
                                source={require('../assets/plus.png')}
                                />
                            </View>
                            
                            <View style = {{width :'50%',justifyContent:'center',right:40}}>
                                <Text style = {{fontSize:27,textAlign:'center',color:'#ffffff'}}>Ambulance</Text>
                            </View>
                        </View>

                   </TouchableOpacity>

                   <TouchableOpacity  onPress={this.Fire}>
                        <View style = {{backgroundColor:'#FD0002', width :wp('90%') , height:hp('14%'), alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                            <View style = {{width :'50%',justifyContent:'center'}}>
                            <Image
                                style={{width: 80, height: 80, justifyContent:'center', left:40}}
                                source={require('../assets/fire.png')}
                                />
                            </View>
                            
                            <View style = {{width :'50%',justifyContent:'center',right:40}}>
                                <Text style = {{fontSize:27,textAlign:'center',color:'#ffffff'}}>Fire</Text>
                            </View>
                        </View>
                   </TouchableOpacity>
                       
                </Body>

                <Footer>
                <BannerAd
                    unitId="ca-app-pub-2510322043242565/8112491176"
                    size={BannerAdSize.FULL_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                    onAdLoaded={() => {
                        console.log('Advert loaded');
                    }}
                    onAdFailedToLoad={(error) => {
                        console.error('Advert failed to load: ', error);
                    }}
                    />
                </Footer>
    
            </View>
     
        );
    }
}

const styles = {
    MainContainer : {
        flex:1,
        width:'100%',
        hight:'100%',
        backgroundColor:'#ffffff',
        alignItems:'center'
    },
    
   
}
const Header = styled.View` 
   
    width:100%;
    height: 10%;
    backgroundColor:#FF0000;
    flexDirection : row;
    alignItems: center;
  
 `
const Body = styled.View`
    width : 100%;
    height: 80%;
    justifyContent:space-evenly;
    flexDirection:column;
    alignItems:center;
    
`
   
  
const Footer = styled.View`
    width: 100%;
    height: 10%;
    backgroundColor : black;
`

export default YangonScreen;