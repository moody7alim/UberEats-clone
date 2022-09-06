import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ cityHandler }) {
  return (
    <View
      style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        query={{ key: 'AIzaSyAnKVfNpN6arMaUqxMkfVb3yy16ACat5HE' }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder='Search' styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirecttion: 'row',
            alignItems: 'center',
            marginRight: 10,
          }
        }}

        renderLeftButton={() => <View style={{ marginLeft: 10, }}><IonIcons size={24} name='location-sharp' /></View>}
        renderRightButton={() => (
          <View style={{
            flexDirection: 'row',
            marginRight: 8,
            backgroundColor: 'white',
            padding: 9,
            borderRadius: 30,
            alignItems: 'center'

          }}>
            <AntDesign style={{ marginRight: 6 }} name='clockcircle' size={11} />
            <Text>
              Search
            </Text>
          </View>)
        }
      />
    </View>
  );
}