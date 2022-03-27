import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    
    root: {
        flexDirection: 'row',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    image: {
        flex: 2,
        resizeMode: 'contain',
        height: 150,
    },
    rightContainer: {
        flex: 3,
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 18,
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
})

export default styles;