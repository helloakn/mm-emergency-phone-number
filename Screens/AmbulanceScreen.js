import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AmbulanceStation from '../Components/AmbulanceStation';

import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

class AmbulanceScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            SearchText:""
        }
    }
    OnSearch=(e)=>{
        this.setState({
            SearchText: e
        });
    }
    handleClick = () => {
        this.props.navigation.goBack();
    }
        
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.MainContainer}>

                <Header >
                    <Icon 
                        name="keyboard-backspace" 
                        style={{fontSize:45,color:'#ffffff',left:10}}
                        onPress={ this.handleClick} 
                    />
                    <Text  style={{fontWeight: 'bold', color:'#ffffff',textAlign:'center',fontSize:25,paddingLeft:35}} >Ambulance Emergency Call</Text>
                </Header>

                <Body>
                    <ContainerInput>
                        <TextInput
                            style={{paddingLeft:20,paddingRight:20,height: 40,width:"90%", borderColor: 'gray', borderWidth: 1,borderRadius:10}}
                            onChangeText={this.OnSearch}
                            value={this.state.SearchText}
                            placeholder="Search"
                        />
                    </ContainerInput>
                    <AmbulanceStation searchKeyWord={this.state.SearchText}/>
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
        fontSize : 18,
        color : '#ffffff',
        textAlign: 'center',

    }
   
}
const Header = styled.View` 
    flex:1;
    width:100%;
    height: 10%;
    backgroundColor:#610a0a;
    flexDirection : row;
    alignItems: center;
  
 `
const Body = styled.View`
    width : 100%;
    height: 80%;
    backgroundColor: #ffffff;

`
    
const Footer = styled.View`
    width: 100%;
    height: 10%;
    backgroundColor : black;
`
const ContainerInput = styled.View` 
    width : 100%;
    height :70px;
    flexDirection:row;
    alignItems:center;
    justifyContent : center;
    backgroundColor:white;
`
export default AmbulanceScreen;