import React, { Component } from 'react';  
import { TouchableOpacity, ScrollView, Image, Text, Button, StyleSheet ,FlatList} from 'react-native';  
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
export default class PoliceStation extends Component {  
     
    constructor(props){
        super(props);
        let rawData = [
            {"township":"Ahlone(Corner of HninSi St)","phone":"01-220793"},

            {"township":"Botahtaung(Anawrahta Rd)","phone":"09-5130608"},
                            
            {"township":"Bahan(Yae Tar Shay Ward)","phone":"01-551196"},
                            
            {"township":"Botahtaung(Lower Middle Block)","phone":"01-291874"},
                            
            {"township":"Dagon(Padonmar St)","phone":"01-374427"},
                            
            {"township":"Dagon Seikkan(Bago River Rd)","phone":"01-593007"},
                            
            {"township":"Dagon(Padonmar St)","phone":"01-376166"},
            
            {"township":"Dawbon(Yamonnar Rd)","phone":"01-556988"},
                            
            {"township":"East Dagon(Anawrahta Rd)","phone":" 01-584109"},
                            
            {"township":"East Dagon(MinYeKyawSwar Rd)","phone":"01-3585187"},
                                            
            {"township":"Hlaing(Insein Rd)","phone":"01-519531"},
                            
            {"township":"Hlaing(Bayint Naung Rd)","phone":"01-681574"},
                            
            {"township":"Hlaing Thar Yar(Anawrahta Rd)","phone":"01-688021"},
                            
            {"township":"Hlaing Thar Yar(NyaungTone Rd)","phone":"01-645029"},
                            
            {"township":"Hlaing Thar Yar(NyaungTone Rd)","phone":"01-645016"},
                            
            {"township":"Hlaing Thar Yar(ShweLinban Ind:)","phone":"09-772707805"},
                            
            {"township":"Insein(Near YwarMa Bus Stop)","phone":"01-645819"},
            
            {"township":"Insein(Ywar Ma Bus Stop)","phone":"01-645824"},
                            
            {"township":"Kamayut(Hledan Rd)","phone":"01-534304"},
                            
            {"township":"Kyauktada(Sule Pagoda Rd)","phone":"01-371054"},
                            
            {"township":"Kyeemyin Daing(Upper Rd)","phone":"01-9317099"},
                            
            {"township":"Lanmadaw(Maha Bandoola Rd)","phone":"01-224528"},
                            
            {"township":"Latha(Latha St)","phone":"01-253202"},
                            
            {"township":"Mingalardon(Htauk Kyant)","phone":"01-9437032"},
                            
            {"township":"Mingalar TaungNyunt(Kun Chan St)","phone":"01-372802"},
                            
            {"township":"Mayangone(SwelTawMyat St)","phone":"01-660352"},
                            
            {"township":"MingalaTaungNyunt(BoMinYg Rd)","phone":"01-291034"},
                            
            {"township":"Mingalardon(KhaYaePin Junction)","phone":"01-635074"},
                            
            {"township":"Mingalardon(KyanKhinSu Ward)","phone":"01-661956"},
                            
            {"township":"Mayangone(Thiri Mon Plaza)","phone":"01-3680774"},
                            
            {"township":"North Okkalapa(NyaungYan St)","phone":"01-695561"},
                            
            {"township":"North Okkalapa(Gant Gaw St)","phone":"01-9699138"},
                            
            {"township":"North Okkalapa(KhayMarThi Rd)","phone":"01-9699384"},
                            
            {"township":"Pazundaung(Bogyoke AungSan Rd)","phone":"01-291240"},
                            
            {"township":"Pabedan(KonZayDan St)","phone":"01-371397"},
                            
            {"township":"Sanchaung(Dhama Zayti Rd)","phone":"01-535184"},
                            
            {"township":"SeikGyi KhaNaungTo(Baho St)","phone":"01-268013"},
                            
            {"township":"Seik Kan(Strand Rd)","phone":"01-2316980"},
                            
            {"township":"South Dagon(Aung Zeya St)","phone":"01-590093"},
                            
            {"township":"South Dagon(Bayint Naung St)","phone":"09-8602365"},
                            
            {"township":"Shwe Pyi Thar(Bayint Naung Rd)","phone":"01-3610664"},
                            
            {"township":"South Okkalapa(Thu Mingalar Rd)","phone":"01-2331642"},
                            
            {"township":"Thingangyun(U SanPhay St)","phone":"01-8562544"},
                            
            {"township":"Thingangyun(ThanThuMar Rd)","phone":"01-562588"},
                            
            {"township":"Thaketa(Myin Taw Thar Rd)","phone":"01-556865"},
                            
            {"township":"Thaketa(Ayeyar Wun Rd)","phone":"01-547253"},
                            
            {"township":"Than Lyin(KyaikKhauk Pagoda Rd)","phone":"056-21504"},
                            
            {"township":"Yankin(Thitsar Rd)","phone":"01-577071"}
        ];
        let Searching = this.props.searchKeyWord;
        //let Searching = "Dagon";
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
        backgroundColor: '#202646',
        
      },
      buttonStyle1: {
        paddingTop:27,
        paddingBottom:27,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: '#2E355B',
        
      }
  });
