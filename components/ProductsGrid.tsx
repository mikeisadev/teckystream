import { useState } from "react"
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native"

import { Colors } from "@/constants/Colors"
import Title from "./Title"

type ProductsGridType = { data: Object[], mode?: 'vertical' | 'horizontal' }

export default function ProductsGrid({ data, mode = 'vertical' }: ProductsGridType) {

    function render() {
        return data.map((v: any, i) => (
                <View key={i} style={mode === 'horizontal' ? styles.card : styles.semiCard}>
                    <View style={styles.imgBox}>
                        <Image style={styles.img} source={{uri: v.img}}/>
                    </View>
                    <View style={styles.cardMeta}>
                        <Title style={{textAlign: 'center'}} size={15} margin={0} weight={500}>{v.title}</Title>
                        <Button 
                            title="Compara"
                            color="#1888f0"
                        />
                    </View>
                </View>
            )
        )
    }
    
    return (
        <View style={styles.grid}>
            {
                mode === 'horizontal' ?
                <ScrollView horizontal contentContainerStyle={styles.scrollViewGridHorizontal}>
                    {render()}
                </ScrollView>
                :
                <ScrollView contentContainerStyle={styles.scrollViewGridVertical}>
                    {render()}
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewGridHorizontal: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
    },
    scrollViewGridVertical: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 0,
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingBottom: 80
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        overflow: 'scroll'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        ...Colors.shadow,
        overflow: 'hidden',
        width: 200
    },
    semiCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        ...Colors.shadow,
        padding: 4
    },
    cardMeta: {
        padding: 10
    },
    imgBox: {
        display: 'flex',
        padding: 8
    }, 
    img: {
        width: 'auto',
        height: 200,
        position: 'relative',
        resizeMode: 'contain',
    }
})