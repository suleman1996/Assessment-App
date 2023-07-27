import AsyncStorage from '@react-native-async-storage/async-storage';

const get_data = async key => {
  try {
    const userInfo = await AsyncStorage.getItem(key);
    const data = JSON.parse(userInfo);
    return data;
  } catch (e) {
    console.log('Failed to fetch the data from storage');
  }
};
export { get_data };
