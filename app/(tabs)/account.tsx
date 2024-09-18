import { StyleSheet, Image, Platform, Text, TextInput, View, Pressable, Alert } from 'react-native';

import ThemedView from '@/components/ThemedView';

import Title from '@/components/Title';

import { Colors } from '@/constants/Colors';
import { useState } from 'react';

export default function AccountScreen() {
  const [tabOpened, setTabOpened] = useState('login')

  return (
    <ThemedView>
      <View style={styles.searchBox}>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Title style={{textAlign: 'center', width: '80%'}} size={12} weight={600} margin={15}>Non hai effettuato l'accesso! Iscriviti oppure effettua il login.</Title>
        </View>
        <View style={styles.searchInner}>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', borderRadius:8, overflow: 'hidden', marginBottom: 20, borderStyle: 'solid', borderColor: '#1888f0', borderWidth: 1}}>
            <Pressable style={{backgroundColor: tabOpened === 'login' ? '#1888f0' : '#fff', padding: 10, ...Colors.shadow, width: '50%'}} onPress={() => setTabOpened('login')}>
              <Text style={{color: tabOpened !== 'login' ? '#1888f0' : '#fff', textAlign: 'center'}}>Accedi</Text>
            </Pressable>
            <Pressable style={{backgroundColor: tabOpened === 'register' ? '#1888f0' : '#fff', padding: 10, ...Colors.shadow, width: '50%'}} onPress={() => setTabOpened('register')}>
              <Text style={{color: tabOpened !== 'register' ? '#1888f0' : '#fff', textAlign: 'center'}}>Registrati</Text>
            </Pressable>
          </View>

          {
            tabOpened === 'register'
            ?
            <View style={{display: 'flex', width: '100%'}}>
              <Title style={{textAlign: 'center'}} size={18} weight={500}>Iscriviti tu TeckyStream</Title>

              <TextInput placeholder='Nome...' style={styles.textInput}/>
              <TextInput placeholder='Cognome...' style={styles.textInput}/>
              <TextInput placeholder='Indirizzo email...' style={styles.textInput}/>
              <TextInput placeholder='Password...' style={styles.textInput}/>
              <TextInput placeholder='Ripeti password...' style={styles.textInput}/>
                  
              <Pressable style={{backgroundColor: '#1888f0', padding: 10, borderRadius: 8, ...Colors.shadow, width: '100%'}} onPress={() => Alert.alert('Iscrizione in corso... (IN CORSO DI SVILUPPO')}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Iscriviti ora</Text>
              </Pressable>
            </View>
            :
            <View style={{display: 'flex', width: '100%'}}>
              <Title style={{textAlign: 'center'}} size={18} weight={500}>Accedi</Title>

              <TextInput placeholder='Nome utente o email...' style={styles.textInput}/>
              <TextInput placeholder='Password...' style={styles.textInput}/>
                  
              <Pressable style={{backgroundColor: '#1888f0', padding: 10, borderRadius: 8, ...Colors.shadow, width: '100%'}} onPress={() => Alert.alert('Login in corso... (IN CORSO DI SVILUPPO')}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Accedi ora</Text>
              </Pressable>
            </View>
          }

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
    justifyContent: 'center',
  },
  searchInner: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 0,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 18,
    ...Colors.shadow
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
