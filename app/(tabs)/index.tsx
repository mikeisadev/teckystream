import { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Platform, Text, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import { APIs } from '@/constants/APIs';

import { Colors } from '@/constants/Colors';

import ThemedView from '@/components/ThemedView';
import Header from '@/components/Header';
import BlogPostsGrid from '@/components/BlogPostsGrid';

export default function HomeScreen() {
  const [blogPosts, setBlogPosts] = useState(null)

  useEffect(() => {
    axios.get(APIs.data.blogPosts)
      .then(data => {
        setTimeout(() => {
          console.log(data.data)
          setBlogPosts(data.data)
        }, 1200)
      })
      .catch(err => console.log('error'))
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      <Header />
      <ThemedView>
        {
          blogPosts ? 
          <BlogPostsGrid data={blogPosts}/>
          :
          <View style={styles.loaderView}>
            <ActivityIndicator size='large'/>
            <Text>Caricamento in corso...</Text>
          </View>
        }
        
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loaderView: {
    height: Colors.dimensions.window.height,
    display: 'flex',

  },
  scrollView: {
    height: '100%'
  }
});
