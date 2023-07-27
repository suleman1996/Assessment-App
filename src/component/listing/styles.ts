import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    listView: {
        margin: 10,
        alignItems: 'center',
        marginTop: 12,
        borderRadius: 10,
        elevation: 10,
        position: 'relative'
    },
    image: {
        borderRadius: 10,
    },
    heart: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    heartImage:{
        height:30,
        width:30
    }
});
export default styles