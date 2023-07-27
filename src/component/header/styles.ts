import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F0F5F9',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        flexDirection:'row',

    },
    text:{
        color:'#000000',
        fontSize:20,
    },
    count:{
        color:'#39C58D',
        fontSize:20
    },
    countView:{
        backgroundColor:'white',
        width:30,
        height:30,
        borderRadius:30/2,
        alignItems:'center',
        justifyContent:'center',
        elevation:10
    },
    backArrow:{
        height:25,
        width:25,
    }
});
export default styles