import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ViewPagerAndroid } from 'react-native';

const DATA = [
  {
    id: '1234',
    title: 'First Item',
  },
  {
    id: '12345',
    title: 'Second Item alsjdkjasdjlaskd;ajsdasdlas;dlaks;dlka;skl;dklask;dlak;skda;skd;ask;dka;skdals',
  },
  {
    id: '123456',
    title: 'hihi',
  },
  {
    id : '0123',
    title: 'abc' ,
  },
  {
    id: '01234',
    title: 'kk',
  },
  {
    id: '0238',
    title: 'hihii',
  }

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <View style={styles.icon}></View>
    <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const NotificationScreen = () => {
  const renderItem =({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head} >Thông báo</Text>
      <Text style={styles.bottom} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding :13 ,
  },
  bottom: {
    width: '100%',
    height: 3,
    backgroundColor: '#F0F8FF',
  },
  item: {
    backgroundColor: '#F0F8FF',
    padding: 20,
    marginVertical: 1,
    flexDirection : 'row',
  },
  text: {
    marginRight: 80,
  },
  title: {
    fontSize: 14,
  },
  icon: {
    width: 50, 
    height: 50 , 
    backgroundColor:'blue',
    marginRight: 15,
  },
});

export default NotificationScreen;