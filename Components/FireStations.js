import React, { Component } from 'react';  
import { TouchableOpacity, ScrollView, Image, Text, Button, StyleSheet,FlatList } from 'react-native';  
import PropTypes from 'prop-types';
import { Divider } from 'react-native-elements';
import {Linking} from 'react-native';
let index = 0;
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
export default class FireStations extends Component {  
     
    constructor(props){
        super(props);
        let rawData = [
            {"township":"Ahlone(Strand Rd)","phone":"01-220802"},

            {"township":"Dagon Seikkan","phone":"09-421007447"},
                            
            {"township":"Dagon Seikkan(Bago River Rd)","phone":"01-593007"},
                            
            {"township":"Dala(Dala-TounTae Rd)","phone":"01-269501"},

            {"township":"Dawbon(Tayza St)","phone":"01-553021"},
                            
            {"township":"East Dagon(MinYe KyawSwar Rd)","phone":"01-2585460"},
                            
            {"township":"Hlaing Thar Yar(NyaungTone Rd)","phone":"01-707550"},
                            
            {"township":"Hlaing(Insein Rd)","phone":"01-519578"},
                            
            {"township":"Hlaing Thar Yar(ShweLinBan Ind:)","phone":"09-420293713"},

            {"township":"Insein(Hlaing River Rd)","phone":"01-3640070"},
            
            {"township":"Insein(Hlaing River Rd)","phone":"01-3640987"},

            {"township":"Kyauktada(Sule Pagoda Rd)","phone":"01-384420"},
            
            {"township":"Kyauktada(Sule Pagoda Rd)","phone":"01-252011"},
                            
            {"township":"Kyeemyin Daing(Kannar Rd)","phone":"09-420071060"},
                            
            {"township":"Mayangone(Bayint Naung Rd)","phone":"01-3681648"},
                            
            {"township":"Mayangone(Thiri Mon Plaza)","phone":"01-3680774"},
                            
            {"township":"Mingalardon(Airport Rd)","phone":"01-635048"},

            {"township":"Mingalardon(Htauk Kyant)","phone":"01-9437178"},
                            
            {"township":"Mingalar Taung Nyunt(Upper Rd)","phone":"01-8610702"},
                            
            {"township":"Mayangone(Insein Rd)","phone":"01-661501"},
                            
            {"township":"Mayangone(Oak Pon Seik St)","phone":"01-666912"},
                            
            {"township":"Mingalardon(No(3) Main Rd)","phone":"09-962233772"},

            {"township":"Mayangone(Than Thu Mar Rd)","phone":"01-291240"},
                            
            {"township":"North Dagon(Pin Lon Rd)","phone":"01-584060"},
                            
            {"township":"North Okkalapa(Yadanar St)","phone":"01-9699149"},
                            
            {"township":"North Okkalapa(Thudhamar Rd)","phone":"01-9699378"},
                            
            {"township":"North Okkalapa(May Darwi Rd)","phone":"01-9699151"},

            {"township":"North Okkalapa(Bagan Rd)","phone":"01-695506"},

            {"township":"Sanchaung(Bargayar Rd)","phone":"01-527099"},

            {"township":"South Dagon(Lay Daunt Kan)","phone":"01-371054"},
                            
            {"township":"Sanchaung(Bargayar Rd)","phone":"01-527099"},
                            
            {"township":"SeikGyi KhaNaungTo(Myoh Patt St)","phone":"01-268233"},
                            
            {"township":"Shwe Pyi Thar(SayKhan Bus Stop)","phone":"09-420185444"},
                            
            {"township":"Shwe Pyi Thar(Nawarat Market)","phone":"09-420185444"},
                            
            {"township":"South Dagon(Aung Zeya St)","phone":"01-590071"},
                            
            {"township":"South Okkalapa(Thu Mingalar Rd)","phone":"01-577041"},
                            
            {"township":"Tarmwe(Banyar Dala Rd)","phone":"01-554893"},
                            
            {"township":"Thaketa(ShukinThar Rd)","phone":"01-547040"},

            {"township":"Thaketa(MyinTawThar Rd)","phone":"01-556834"},
                            
            {"township":"Than Lyin(Bogyoke NayWin St)","phone":"056-21502"},
                            
            {"township":"Thingangyun(U BaHan St)","phone":"01-8562677"},
                            
            {"township":"Tarmwe(Thamain Bayan Rd)","phone":"01-554778"},
                            
            {"township":"Than Lyin(KyaikKhauk Pagoda Rd)","phone":"056-21058"}
        ];
        ////let Searching = this.props.searchKeyWord;
       // let Searching = "Dagon";
        this.state = {
            resultData:rawData //.filter(item => item.township.toLowerCase().indexOf(Searching.toLowerCase()) !=-1)
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
      backgroundColor: '#9F0500',
      
    },
    buttonStyle1: {
      paddingTop:27,
      paddingBottom:27,
      paddingLeft:10,
      paddingRight:10,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor: '#B52E2E',
      
    }
  });
