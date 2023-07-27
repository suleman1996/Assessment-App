import React from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import ListItems from "../../component/listing";
import Header from "../../component/header";

import styles from "./styles";

const FavoriteScreen: React.FC<any> = () => {

    const favList = useSelector((state) => state.FavoriteReducer.favoritesList) || [];
    const navigation = useNavigation();

    const renderItem = ({ item }: any) => {
        return <ListItems item={item} onPress={function (): void {
            throw new Error("Function not implemented.");
        }} isFav={undefined} showicon={undefined} />
    }

    return (
        <View style={styles.mainView}>
            <Header text='Favortie Screen' onBackPress={() => navigation.goBack()} count={0} />
            <FlatList
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                data={favList}
                renderItem={renderItem}
                contentContainerStyle={{ backgroundColor: '#EDEDF4', alignItems: 'center',flex:1 }}
            />
        </View>
    )
}
export default FavoriteScreen