import React from 'react';
import {
  View,
  Text,

  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import style from './style';

const index =()=>{
  console.log('Giriş ekranı yüklendi!');

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.title}>HesapKitap</Text>
      <Text style={style.subtitle}>HesapKitap ile en ucuzu keşfet!</Text>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Ne yesem?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>İndirimli Restoranlar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Yıldızlı Restoranlar</Text>
      </TouchableOpacity>

      <Text style={style.sectionTitle}>Mutfaklar</Text>
      <View style={style.categories}>
        {['Tavuk Döner', 'Pizza', 'Kebap', 'Burger', 'Lahmacun'].map((item) => (
          <TouchableOpacity key={item} style={style.categoryButton}>
            <Text style={style.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default index;


  
