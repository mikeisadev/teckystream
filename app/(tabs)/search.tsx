import { StyleSheet, Image, Platform, Text, View, TextInput, Alert, Button, Pressable } from 'react-native';

import Title from '@/components/Title';

import ThemedView from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function SearchScreen() {
  return (
    <ThemedView>
      <View style={styles.searchBox}>
        <View style={styles.searchInner}>
          <Title style={{textAlign: 'center'}} size={18} weight={500}>Cerca milioni di prodotti tra Amazon, Ebay, Aliexpress e molti altri</Title>
          <TextInput placeholder='Cerca qui...' style={styles.textInput}/>
          
          <Pressable style={{backgroundColor: '#1888f0', padding: 10, borderRadius: 8, ...Colors.shadow, width: '100%'}} onPress={() => Alert.alert('Iscrizione alla community in corso... (IN CORSO DI SVILUPPO')}>
            <Text style={{color: '#fff', textAlign: 'center'}}>Cerca ora...</Text>
          </Pressable>

          <Text style={{fontSize: 12, marginTop: 5}}>Ricerche effettuate: NaN (da definire)</Text>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  searchInner: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: -100
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
