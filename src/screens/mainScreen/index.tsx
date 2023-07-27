import React, { Fragment, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../component/header'
import ListItems from '../../component/listing'

import { addFavorites, getProducts, removeFavorites } from '../../store/actions'

import styles from './styles'

const MainScreen: React.FC<any> = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const fav = useSelector((state: any) => state.FavoriteReducer.favoritesList)
    const products = useSelector((state: any) => state.FavoriteReducer.products)
    const isLoading = useSelector((state: any) => state.FavoriteReducer.loading)

    
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const handleFavItem = (item: any) => {
        if (fav.find((favItem: any) => favItem.id === item.id)) {
            dispatch(removeFavorites(item.id))
        } else {
            dispatch(addFavorites(item))
        }
    }

    const onCountPress = () => {
        if (fav.find((item: any) => item.id)) {
            navigation.navigate('FavoriteScreen')
        }
    }

    const renderItem = ({ item }: any) => {
        return <ListItems item={item} showicon onPress={() => handleFavItem(item)} isFav={fav.find((favItem: any) => favItem.id === item.id)} />
    }

    if (isLoading) {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    return (
        <Fragment>
            <Header text='Main Screen' count={fav.length + 0} onCountPress={onCountPress}/>

            <View style={styles.mainView}>
                <FlatList
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    data={products}
                    renderItem={renderItem}
                    contentContainerStyle={{ backgroundColor: '#EDEDF4', alignItems: 'center' }}
                />

            </View>
        </Fragment>
    )
}
export default MainScreen
