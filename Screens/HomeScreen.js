import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BannerAd, BannerAdSize, RewardedAd ,RewardedAdEventType,InterstitialAd,AdEventType, TestIds } from '@react-native-firebase/admob';
import {Linking} from 'react-native';

/*
const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
    requestNonPersonalizedAdsOnly: true,
  });*/
  /*
  const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
});*/
class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        var today = new Date();
		
        this.firstTime = 0;
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            //console.log("haha");
        // The screen is focused
        // Call any action
        this.firstTime = this.firstTime + 1;
            //alert(this.state.firstTime);
            if(this.firstTime != 1 ){
                //alert(this.firstTime);
               
                let rewarded = RewardedAd.createForAdRequest("ca-app-pub-2510322043242565/4660153718", {
                    requestNonPersonalizedAdsOnly: true,
                });
                rewarded.onAdEvent((type, error, reward) => {
                    if (type === RewardedAdEventType.LOADED) {
                      rewarded.show();
                    }
                    if (type === RewardedAdEventType.EARNED_REWARD) {
                      console.log('User earned reward of ', reward);
                    }
                  });
                   
                  rewarded.load();
                  /*
                   let interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
                    requestNonPersonalizedAdsOnly: true,
                });
                  
                  interstitial.onAdEvent((type) => {
                    if (type === AdEventType.LOADED) {
                      interstitial.show();
                    }
                  });
                   
                  interstitial.load();
                  
                */
            }
        });
        
      
    }
    handleClick = () => {
        this.props.navigation.navigate('YangonScreen')
    }

    policeClick  = () => {
        Linking.openURL('tel:199')
    }

    ambulanceClick = () => {
        Linking.openURL('tel:192')
    }

    fireClick = () => {
        Linking.openURL('tel:191')
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.MainContainer}>

                <Header >
                    <Text  style={{fontWeight: 'bold', color:'#ffffff',textAlign:'center',fontSize:RFValue(25,680),}}>Emergency Phone Number</Text>
                </Header>

                <Body>
                   
                        <BodyHeader>
                            <Text style={{color:'red',textAlign:'center',fontSize:RFValue(20,680),fontWeight: 'bold'}}>Common Emergency Call</Text>
                        </BodyHeader>

                        <InnerBody1>
                            <TouchableOpacity onPress={ this.policeClick}>
                            <View style = {{flexDirection:'row',backgroundColor:'#373585', width :wp('45%'), height:hp('10%'), alignItems:'center',justifyContent:'space-around'}} >
                                    <View>
                                        <Image
                                        style={{width: 41, height: 50, justifyContent:'center', }}
                                        source={require('../assets/police.png')}
                                        />
                                    </View>

                                    <View>
                                        <Text style = {styles.buttonText} >Police</Text>
                                        <Text style = {styles.buttonText} >Call 199</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </InnerBody1>

                        <InnerBody2 style={{padding:10}}>
                            <TouchableOpacity onPress={ this.ambulanceClick}>
                                <View style = {{flexDirection:'row',backgroundColor:'#b80000', width :wp('45%'), height:hp('10%'),alignItems:'center',justifyContent:'space-around'}}>
                                    <View>
                                        <Image
                                        style={{width: 41, height: 41, justifyContent:'center'}}
                                        source={require('../assets/plus.png')}
                                        />
                                    </View>

                                    <View>
                                        <Text style = {styles.buttonText} >Ambulance</Text>
                                        <Text style = {styles.buttonText} >Call 192</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ this.fireClick}>
                                <View style = {{flexDirection:'row',backgroundColor:'#FD0002', width :wp('45%'), height:hp('10%'),alignItems:'center',justifyContent:'space-around'}}>
                                    <View>
                                        <Image
                                        style={{width: 50, height: 50, justifyContent:'center'}}
                                        source={require('../assets/fire.png')}
                                        />
                                    </View>

                                    <View>
                                        <Text style = {styles.buttonText} >Fire</Text>
                                        <Text style = {styles.buttonText} >Call 191</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </InnerBody2>

                        <InnerBody3>
                            <TouchableOpacity onPress={ this.handleClick}>
                                <View style = {{backgroundColor:'#FF0000', width :wp('85%'), height:hp('10%'), alignSelf:'center',justifyContent:'center'}} >
                                    <Text style = {styles.buttonText} >Emergency Call Township Wise</Text> 
                                </View>
                            </TouchableOpacity>
                        </InnerBody3>

                        
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
    buttonText : {
        fontFamily: 'NotoSanJP',
        fontSize : RFValue(18,680),
        fontWeight:'bold',
        color : '#ffffff',
        textAlign: 'center',

    }
   
}
const Header = styled.View` 
    width:100%;
    height: 10%;
    backgroundColor:#FF0000;
    justifyContent: center;
    alignItems: center;
  
 `
const Body = styled.View`
    width : 100%;
    height: 80%;
    backgroundColor: #ffffff;

`
    const BodyHeader = styled.View`
        width : 100%;
        height: 17%;
        justifyContent: center;
        alignItems: center;
    `
    const InnerBody1 = styled.View`
        width : 100%;
        height : 22%;
        justifyContent: center;
        alignItems: center;
    `
    const InnerBody2 = styled.View`
        width : 100%;
        height : 21%;
        flexDirection : row;
        justifyContent: space-between;
        alignItems: center;
    `
    const InnerBody3 = styled.View`
        width : 100%;
        height : 45%;
        flexDirection : row;
        justifyContent: center;
        alignItems: center;
    `
const Footer = styled.View`
    width: 100%;
    height: 10%;
    backgroundColor : black;
`

export default HomeScreen;