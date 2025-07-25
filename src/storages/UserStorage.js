import AsyncStorage from "@react-native-async-storage/async-storage";

class UserStorage {
  constructor(namespace) {
    this.namespace = namespace;
  }

  async setUser(user) {
    await AsyncStorage.setItem(this.namespace, JSON.stringify(user));
  }

  async getUser() {
    return await AsyncStorage.getItem(this.namespace);
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
    return await this.getItem("accessToken");
  }

  async getExpiresAt() {
    return await this.getItem("expiresAt");
  }

  async isAuthenticated() {
    const accessToken = await this.getAccessToken();
    const expiresAt = await this.getExpiresAt();
    return accessToken && expiresAt && expiresAt > Date.now();
  }
}

export default new UserStorage("user");
