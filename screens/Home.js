import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY = 'MWYOK8YaLQWTdqqX5gDqaz4i7jiBrO-Qq32Evpx07Y682WFn3NXbiP9U0-jWQ1RsFDCBV30imwID17dwMMJ7oV0cJOs741t-bKsr6BsoGuar9YX1FMQYsx8XkMgIY3Yx';



export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('SanFrancisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`
      }
    };
    const data = await fetch(yelpUrl, apiOptions);
    const json = await data.json();
    setRestaurantData(json.businesses?.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <>
      <StatusBar backgroundColor={'#eee'} barStyle="dark-content" />
      <SafeAreaView style={{
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#eee',
      }} >
        <View style={{ backgroundColor: 'white', padding: 15 }}>
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView style={{ paddingBottom: 510, flex: 1 }} showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurants={restaurantData} navigation={navigation} />

        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
      </SafeAreaView>
    </>
  );
}