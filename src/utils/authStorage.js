import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor() {
    this.namespace = "auth";
  }

  async setAuth(auth) {
    await AsyncStorage.setItem(this.namespace, JSON.stringify(auth));
  }

  async getAuth() {
    const auth = await AsyncStorage.getItem(this.namespace);
    return auth ? JSON.parse(auth) : null;
  }

  async setItem(key, value) {
    await AsyncStorage.setItem(`${this.namespace}:${key}`, value);
  }

  async getItem(key) {
    return await AsyncStorage.getItem(`${this.namespace}:${key}`);
  }

  async removeItem(key) {
    await AsyncStorage.removeItem(`${this.namespace}:${key}`);
  }

  async clear() {
    await AsyncStorage.clear();
  }

  async getAccessToken() {
    const accessToken = await this.getItem("accessToken");
    return accessToken ? JSON.parse(accessToken) : null;
  }

  async setAccessToken(accessToken) {
    await this.setItem("accessToken", accessToken);
  }

  async removeAccessToken() {
    await this.removeItem("accessToken");
  }

  async getExpiresAt() {
    const expiresAt = await this.getItem("expiresAt");
    return expiresAt ? JSON.parse(expiresAt) : null;
  }

  async isAuthenticated() {
    const auth = await this.getAuth();
    if (!auth) {
      return false;
    }
    const { accessToken, expiresAt } = JSON.parse(auth);
    return accessToken && expiresAt && expiresAt > Date.now();
  }

  async removeAuth() {
    await AsyncStorage.removeItem(this.namespace);
  }
}

export default AuthStorage;
