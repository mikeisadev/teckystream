import { Image, StyleSheet, View, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Header() {

    return (
        <View style={styles.headerContainer}>
            <Image 
                source={require('@/assets/images/tslogo.png')}
                style={styles.logo}
            />
            <TextInput style={styles.searchBar} placeholder="Cerca qualcosa..."/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        backgroundColor: Colors.light.background
    },
    logo: {
        width: 100,
        resizeMode: 'contain',
        height: 30
    },
    searchBar: {
        backgroundColor: '#ffffff',
        borderColor: '#f1f1f1',
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 4,
        width: '100%'
    }
})