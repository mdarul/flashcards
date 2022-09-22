import { StorageItemType } from '@models/enums';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: StorageItemType, value: object) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (e) {
		// saving error
	}
};

export const getData = async (key: StorageItemType) => {
	// AsyncStorage.clear();
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
		return null;
	}
};
