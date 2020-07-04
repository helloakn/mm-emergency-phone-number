import React, { Component } from 'react';  
import { TouchableOpacity, ScrollView, Image,View, Text, Button, StyleSheet,FlatList } from 'react-native';  
import PropTypes from 'prop-types';
import { Divider } from 'react-native-elements';
import {Linking} from 'react-native';

let index =0;
function Item({ value }) {
  index++;
  return (

    //onPress={()=>{this._onPressButtonOpenLink("http://www.google.com")}}
    //['#484B5F',  '#617178']:['#617178',  '#3E3F44']
      <>
          <TouchableOpacity onPress={()=>{Linking.openURL('tel:'+value.phone);}} style={(index%2==0?styles.buttonStyle:styles.buttonStyle1)}>
              <Text style={{textAlign: 'left', color: '#ffffff',fontSize:16,}}>{value.township}</Text>
              <Text style={{textAlign: 'right', color: '#ffffff',fontSize:20,}}>{value.phone}</Text>
          </TouchableOpacity>
      </>
  );
}
export default class AmbulanceStation extends Component {  
  
  constructor(props){
    super(props);
    let rawData = [
      {"township":"Ahlone(Lower KyeMyinDaing Rd)","phone":"01-229746"},

      {"township":"Bahan(New University Avenue Rd)","phone":"09-795899634"},
      
      {"township":"Botahtaung(Yangon General Hospital)","phone":"01-292836"},
      
      {"township":"Botahtaung(Strand Rd)","phone":"01-392028"},
      
      {"township":"Botahtaung(63rd St)","phone":"09-252200067"},
      
      {"township":"Botahtaung(Lower Middle Block)","phone":"01-292214"},
      
      {"township":"Dagon(Yangon Children Hospital)","phone":"01-538914"},
      
      {"township":"Dagon(Padonmar St)","phone":"01-374427"},
      
      {"township":"Dagon Seikkan(Bago River Rd)","phone":"01-593007"},
      
      {"township":"Dawbon(Yamonnar Rd)","phone":"01-556988"},
      
      
      {"township":"East Dagon(Anawrahta Rd)","phone":" 01-584109"},
      
      {"township":"East Dagon(MinYeKyawSwar Rd)","phone":"01-3585221"},
      
      {"township":"East Dagon(Mental Health Hospital)","phone":"09-73142140"},
      
      {"township":"Mingalar Taung Nyunt(Padauk St)","phone":"01-9000716"}
    ];
    this.state = {
      
        resultData:rawData.filter(item => item.township.toLowerCase().indexOf(this.props.searchKeyWord.toLowerCase()) !=-1)
      
  }
  }
  
    render() {  
      
      return (  
            <FlatList
                        style={{width:"100%"}}
                        data={this.state.resultData.filter(item => item.township.toLowerCase().indexOf(this.props.searchKeyWord.toLowerCase()) !=-1)}
                        renderItem={({ item }) => (
                        <Item
                           
                            value={item}
                            
                        />
                    )}
                    keyExtractor={(item,index) => index.toString()}
                  />
        );  
    }  
} 

  
  const styles = StyleSheet.create({
    
    buttonStyle: {
      paddingTop:27,
      paddingBottom:27,
      paddingLeft:10,
      paddingRight:10,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor: '#A61515',
      
    },
    buttonStyle1: {
      paddingTop:27,
      paddingBottom:27,
      paddingLeft:10,
      paddingRight:10,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor: '#C32C2C',
      
    }
  });
