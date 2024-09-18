import { useState, useEffect, useRef, useContext } from "react";
import { Image, StyleSheet, View, TextInput, StatusBar, Text, ScrollView, Modal } from "react-native";
import { Colors } from "@/constants/Colors";
import axios from "axios";
import { APIs } from "@/constants/APIs";
import { Ionicons } from "@expo/vector-icons";

import { AppContext } from "@/context/AppContext";

export default function Header() {
    const [searchBarBg, setSearchBarBg] = useState(Colors.light.secondary)
    const [searchResults, setSearchResults] = useState<null|Object[]>(null)

    // Context
    const appCtx = useContext(AppContext)

    // Refs
    const searchBarRef = useRef(null)

    /**
     * Search bar on focus (tapping)
     */
    function searchBarOnFocus() {
        setSearchBarBg('#ffffff')
    }

    /**
     * Search bar out of focus (tapping elsewhere)
     */
    function searchBarOnBlur() {
        setSearchBarBg(Colors.light.secondary)

        setSearchResults(null)

        // appCtx?.setSearchStatus(false)
    }

    /**
     * Search bar on text input
     */
    function searchBarOnInput(text: any) {
        console.log(text)

        setSearchResults(null)
        appCtx?.setSearchResults([{}], false)

        axios.get(APIs.data.blogPostsSearch + text)
            .then(res => {
                const data = res.data

                setSearchResults(data)

                appCtx?.setSearchResults(data, true)

                console.log(appCtx?.header.isSearchActive)

                if (text.length <= 1) appCtx?.setSearchResults([{}], false)
            })
            .catch(err => err)
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLogoCont}>
                <View style={styles.icon} onTouchStart={() => appCtx?.setMenuStatus(true)}>
                    <Ionicons size={26} name="menu-outline"/>
                </View>
                <Image 
                    source={require('@/assets/images/tslogo.png')}
                    style={styles.logo}
                />
            </View>
            <View>
                <TextInput 
                    ref={searchBarRef}
                    onFocus={searchBarOnFocus}
                    onBlur={searchBarOnBlur}
                    onChangeText={searchBarOnInput}
                    style={[styles.searchBar, {backgroundColor: searchBarBg}]} 
                    placeholder="Cerca qualcosa..."
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        paddingTop: (StatusBar.currentHeight as number) + 8,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 5,
        backgroundColor: Colors.light.background,
        overflow: 'visible',
        zIndex: 9
    },
    headerLogoCont: {
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    logo: {
        width: 140,
        resizeMode: 'contain',
        height: 30
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50, 
        width:35, 
        height: 35, 
        backgroundColor: '#ffffff80'
    },
    searchBar: {
        borderColor: '#f1f1f1',
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: 'solid',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 16,
        paddingLeft: 16,
        width: '100%',
    }
})