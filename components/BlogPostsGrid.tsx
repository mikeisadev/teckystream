import { Text, View, Image, StyleSheet, ScrollView } from "react-native"

import { Colors } from "@/constants/Colors"
import Title from "./Title"

type BlogPostsGridType = { data: Object[] }

export default function BlogPostsGrid({ data }: BlogPostsGridType) {
    function renderBlogPosts() {
        return data.map((v: any, i) => {
            const img = v.yoast_head_json.og_image[0].url

            console.log(img)

            return (
                <View key={i} style={styles.card}>
                    <View style={styles.imgBox}>
                        <Image style={styles.img} source={{uri: img}}/>
                    </View>
                    <View style={styles.cardMeta}>
                        <Title size={15} margin={0} weight={500}>{v.title.rendered}</Title>
                    </View>
                </View>
            )
        })
    }
    
    return <View style={styles.grid}>{renderBlogPosts()}</View>
}

const styles = StyleSheet.create({
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
    },
    cardMeta: {
        padding: 10
    },
    imgBox: {
        display: 'flex'
    }, 
    img: {
        width: 'auto',
        height: 200,
        position: 'relative',
        resizeMode: 'cover'
    }
})