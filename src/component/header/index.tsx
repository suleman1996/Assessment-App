import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

interface Props {
    text: string
    count: number
    onCountPress: () => void
    onBackPress: () => void
}

const Header: React.FC<Props> = ({ count, text, onCountPress, onBackPress }: Props) => {
    return (
        <View style={styles.header}>
            {onBackPress &&
                <TouchableOpacity onPress={onBackPress}>
                    <Image source={require('../../images/back.png')} style={styles.backArrow} />
                </TouchableOpacity>
            }
            <Text style={styles.text}>{text}</Text>
            {onCountPress ?
                <TouchableOpacity style={styles.countView} onPress={onCountPress}>
                    <Text style={styles.count}>{count}</Text>
                </TouchableOpacity>
                :
                <Text></Text>
            }
        </View>
    )
}
export default Header