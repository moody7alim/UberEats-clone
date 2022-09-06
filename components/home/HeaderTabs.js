import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';

export default function HeaderTabs(props) {
  return (
    <>
      <View style={{
        flexDirection: 'row',
        // IMPORTANT
        alignSelf: 'center',

      }}>
        <HeaderButton text='Delivery' btnColor='black' textColor='white' activeTab={props.activeTab} setActive={props.setActiveTab} />
        <HeaderButton text='Pickup' btnColor='white' textColor='black' activeTab={props.activeTab} setActive={props.setActiveTab} />
      </View>
    </>

  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    onPress={() => props.setActive(props.text)}
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}>
    <Text style={{
      color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: '900',
    }}> {props.text}</Text>
  </TouchableOpacity>

);;;;