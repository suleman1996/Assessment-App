import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

interface Props {
    item: string | any;
    onPress: () => void;
    isFav: any;
    showicon:any
}

const ListItems: React.FC<Props> = ({ item, onPress, isFav,showicon }: Props) => {
    return (
        <>
            <View style={styles.listView}>
                <Image source={{ uri: item?.image }} height={220} width={150} style={styles.image} />
                {showicon &&
                <TouchableOpacity style={styles.heart} onPress={onPress}>
                    <Image source={!isFav ? require('../../images/greyHeart.png') : require('../../images/redHeart.png')} style={styles.heartImage} />
                </TouchableOpacity>
}
            </View>
        </>
    )
}
export default ListItems