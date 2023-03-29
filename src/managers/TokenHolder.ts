import AsyncStorage from '@react-native-async-storage/async-storage';

export class TokenHolder {
  public static async storeToken(token: string) {
    try {
      await AsyncStorage.setItem('@token', token);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }

  public static async getToken() {
    try {
      const token = await AsyncStorage.getItem('@token');
      return token;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }
}
