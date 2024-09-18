import { Text, type TextProps, StyleSheet } from "react-native"
import { Colors } from "@/constants/Colors"

export type TitleProps = TextProps & {
    title?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    margin?: number
    size?: number|boolean
}

export default function Title({children, style, title = 'h1', margin = 20, weight = 400, size = false}: TitleProps) {
    return <Text 
        style={[
            style, 
            {
                fontFamily: `Poppins_${weight}`,
                fontSize: size ? size as number : Colors.fontSizes.titles[title],
                marginBottom: margin
            }
        ]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins',
        fontWeight: 600
    }
})