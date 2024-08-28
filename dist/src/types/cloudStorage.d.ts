export interface CloudStorage {
    /**
     * A method that stores a value in the cloud storage using the specified key.
     * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     * The value should contain 0-4096 characters.
     * You can store up to 1024 keys in the cloud storage.
     *
     * @param key - The key to store the value under.
     * @param value - The value to store.
     * @param callback - An optional callback function that will be called after the operation.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored.
     */
    setItem(key: string, value: string, callback?: (error: Error | null, success: boolean) => void): void;
    /**
     * A method that receives a value from the cloud storage using the specified key.
     * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     *
     * @param key - The key to retrieve the value for.
     * @param callback - A callback function that will be called after the operation.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null and the value will be passed as the second argument.
     */
    getItem(key: string, callback: (error: Error | null, value: string | null) => void): void;
    /**
     * A method that receives values from the cloud storage using the specified keys.
     * The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     *
     * @param keys - The keys to retrieve the values for.
     * @param callback - A callback function that will be called after the operation.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null and the values will be passed as the second argument.
     */
    getItems(keys: string[], callback: (error: Error | null, values: {
        [key: string]: string | null;
    }) => void): void;
    /**
     * A method that removes a value from the cloud storage using the specified key.
     * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     *
     * @param key - The key to remove the value for.
     * @param callback - An optional callback function that will be called after the operation.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed.
     */
    removeItem(key: string, callback?: (error: Error | null, success: boolean) => void): void;
    /**
     * A method that removes values from the cloud storage using the specified keys.
     * The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     *
     * @param keys - The keys to remove the values for.
     * @param callback - An optional callback function that will be called after the operation.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the values were removed.
     */
    removeItems(keys: string[], callback?: (error: Error | null, success: boolean) => void): void;
    /**
     * A method that receives the list of all keys stored in the cloud storage.
     *
     * @param callback - A callback function that will be called after the operation.
     * In case of an error, the first argument will contain the error.
     * In case of success, the first argument will be null and the list of keys will be passed as the second argument.
     */
    getKeys(callback: (error: Error | null, keys: string[]) => void): void;
}
//# sourceMappingURL=cloudStorage.d.ts.map