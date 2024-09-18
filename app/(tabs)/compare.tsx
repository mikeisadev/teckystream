import {useState, useEffect} from 'react';

import { StyleSheet, Image, Platform, Text, View, TextInput, Pressable, Alert, ActivityIndicator, StatusBar } from 'react-native';

import Title from '@/components/Title'

import ThemedView from '@/components/ThemedView';

import { Colors } from '@/constants/Colors';
import ProductsGrid from '@/components/ProductsGrid';

import axios from 'axios';

import { APIs } from '@/constants/APIs';

export default function CompareScreen() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get(APIs.data.products)
      .then(data => {
        setTimeout(() => setProducts(data.data.slice(0, 5)), 1200)
      })
      .catch(err => console.log('error'))
  }, [])

  return (
    <ThemedView>
      <View style={styles.searchBox}>
        <View>
          <Title size={20} weight={500}>Comparatore di smartphone</Title>
        </View>
        <View style={styles.searchInner}>
          {products ? 
          <ProductsGrid data={products} mode='vertical'/> :
          <View style={styles.loaderView}>
          <View style={{position: 'relative', marginTop: -180}}>
            <ActivityIndicator size='large' color={Colors.light.tint}/>
          </View>
          <Text>Caricamento in corso...</Text>
        </View>}
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  loaderView: {
    height: Colors.dimensions.window.height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingTop: 0,
    paddingBottom: 0
  },
  searchBox: {
    position: 'relative',
    paddingTop: (StatusBar.currentHeight as number) + 10,
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  searchInner: {
    position: 'relative',
    display: 'flex',
    gap: 5,
  },
  textInput: {
    padding: 12,
    borderColor: '#f1f1f1',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 6,
    width: '100%',
    backgroundColor: '#fff'
  },
});