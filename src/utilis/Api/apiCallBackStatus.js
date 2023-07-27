import {ToastAndroid} from 'react-native'
const apiCallBackStatus = ({ error }) => {
    let message = error?.response?.data?.message
    if (typeof message == 'object') {
        message[Object.keys(message)[0]]
        ToastAndroid.show(message[Object.keys(message)[0]][0], Toast.LONG)
    } else {
        ToastAndroid.show(message, Toast.LONG)
    }
}

export default apiCallBackStatus