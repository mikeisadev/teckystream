import { useEffect, useState, useRef, useContext } from 'react';
import { View, Image, StyleSheet, Platform, Text, ActivityIndicator, SafeAreaView, Button, Alert, TextInput, Animated, Pressable, Dimensions, ScrollView, Modal } from 'react-native';

import axios from 'axios';
import { APIs } from '@/constants/APIs';

import { Colors } from '@/constants/Colors';

import ThemedView from '@/components/ThemedView';
import Header from '@/components/Header';
import BlogPostsGrid from '@/components/BlogPostsGrid';
import Title from '@/components/Title';
import ProductsGrid from '@/components/ProductsGrid';

import { AppContext } from '@/context/AppContext';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [blogPosts, setBlogPosts] = useState(null)
  const [products, setProducts] = useState()

  const appCtx = useContext(AppContext)

  useEffect(() => {
    axios.get(APIs.data.blogPosts)
      .then(data => {
        setTimeout(() => setBlogPosts(data.data.slice(0, 5)), 1200)
      })
      .catch(err => console.log('error'))

    axios.get(APIs.data.products)
      .then(data => {
        setTimeout(() => setProducts(data.data.slice(0, 5)), 1200)
      })
      .catch(err => console.log('error'))
  }, [])

  /**
    * Render search results.
  */
  function renderSearchResults() {
    return appCtx?.header.searchResults!.map((v: any, i) => {
      return (
        <View key={i} style={styles.searchResultElement}>
          <Text>{v.title.rendered}</Text>
        </View>
      )
    })
  }

  return (
    <SafeAreaView>
      <View style={styles.scrollView} >
        <Header />
        <ScrollView style={{zIndex: 2, position: 'relative'}} nestedScrollEnabled={true} onScroll={() => {appCtx?.setSearchResults([], false)}}>
          {
            // Menu
            appCtx?.header.isMenuActive ?
            <Modal transparent={true}>
              <View style={{width: '100%', height: '100%', position: 'relative'}}>
                <View style={{padding: 20, backgroundColor: '#fff', width: appCtx?.header.isMenuActive ? '60%' : '0%', height: '100%', ...Colors.shadow, transform: 'auto 500ms', zIndex: 9}}>
                  <View style={{display: 'flex', width: '100%'}}>
                    <Pressable style={{position: 'absolute'}} onTouchStart={() => {appCtx.setMenuStatus(false)}}>
                      <Ionicons name="close-outline" size={38}/>
                    </Pressable>
                  </View>
                  <View style={{marginTop: 50}}>
                    <Title size={16} weight={500}>Recensioni</Title>
                    <Title size={16} weight={500}>Novità</Title>
                    <Title size={16} weight={500}>Recensioni</Title>
                    <Button
                      onPress={() => {Alert.alert('Caricamento schede tecniche (IN CORSO DI SVILUPPO...)')}}
                      title="Schede tecniche"
                      color="#1888f0"
                      accessibilityLabel="Pulsante per vedere le schede tecniche"
                    />
                  </View>
                </View>
                <View style={{backgroundColor: '#00000040', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2}} onTouchStart={() => appCtx?.setMenuStatus(false)}></View>
              </View>
            </Modal>
            : null
          }
          {
            // Search result box
            appCtx?.header.isSearchActive ? 
            <View style={styles.searchResultModal}>
              <ScrollView nestedScrollEnabled={true}>
                {renderSearchResults()}
              </ScrollView> 
            </View>
            : 
            null
          }
          <ThemedView>
            {
              blogPosts && products ? 
              <View style={styles.contentView}>
                <View style={styles.sectionView}>
                  <View style={styles.communitySection}>
                    <Text>Attenzione! Questa app è in fase di sviluppo: alcune parti potrebbero non essere in funzione o work in progress. (nota: Michele Mincone)</Text>
                  </View>
                </View>

                <View style={styles.sectionView}>
                  <Title title='h4' weight={500} margin={5}>Ultimi articoli del Blog</Title>
                  <BlogPostsGrid data={blogPosts} />
                </View>

                <View style={styles.sectionView}>
                  <Title title='h4' weight={500} margin={5}>Schede tecniche</Title>
                  <ProductsGrid data={products} />
                </View>

                <View style={styles.sectionView}>
                  <Title title='h4' weight={500} margin={5}>Iscriviti alla community</Title>
                  <View style={styles.communitySection}>
                    <Text style={{fontFamily: 'Poppins_400', textAlign: 'center', marginBottom: 10, fontSize: 14}}>
                      Iscrivendoti alla community di Teckystream riceverai sulla tua email offerte e sconti esclusivi su prodotti di elettronica.
                    </Text>
                    <TextInput 
                      placeholder="Il tuo nome e cognome..."
                      style={styles.textInput}
                    />
                    <TextInput 
                      placeholder="Il tuo indirizzo email..."
                      style={styles.textInput}
                    />
                    <Button
                      onPress={() => Alert.alert('Iscrizione alla community in corso... (IN CORSO DI SVILUPPO')}
                      title="Iscriviti ora"
                      color="#1888f0"
                      accessibilityLabel="Pulsante per iscriverti alla community"
                    />
                  </View>
                </View>

                <View style={styles.sectionView}>
                  <Text>Realizzato e sviluppato da Michele Mincone.</Text>
                </View>
              </View>
              :
              <View style={styles.loaderView}>
                <View style={{position: 'relative', marginTop: -180}}>
                  <ActivityIndicator size='large' color={Colors.light.tint}/>
                </View>
                <Text>Caricamento in corso...</Text>
              </View>
            }
          </ThemedView>
        </ScrollView>
      </View>
    </SafeAreaView>
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
  scrollView: {
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  },
  contentView: {
    paddingTop: 15,
    paddingBottom: 0,
    position: 'relative',
    zIndex: 3
  },
  sectionView: {
    marginBottom: 20
  },
  communitySection: {
    backgroundColor: '#fff',
    padding: 20,
    ...Colors.shadow,
    borderRadius: 8
  },
  textInput: {
    padding: 8,
    borderColor: '#f1f1f1',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 12,
  },
  searchResultModal: {
    borderColor: '#f1f1f1',
    borderWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    height: 280,
    maxHeight: 280,
    width: 'auto',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    zIndex: 20,
    ...Colors.shadow,
    marginRight: 8,
    marginLeft: 8
  },
  searchResultElement: {
    padding: 10
  }
});
