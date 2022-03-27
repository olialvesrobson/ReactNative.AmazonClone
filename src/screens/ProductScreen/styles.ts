import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        color: '#797979'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },
    star: {
        margin: 2,
    },
    price: {
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
        marginLeft: 5,
    },
    description: {
        marginVertical: 15,
        lineHeight: 20
    }
})

export default styles;