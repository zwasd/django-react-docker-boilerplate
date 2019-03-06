// load state from local storage
export const loadState = (key) => {
    const serializedState = localStorage.getItem(key);
    try {
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return serializedState;
    }
}

// save state to local storage
export const saveState = (key, state) => {
    try {
        if (typeof state === 'object') {
            localStorage.setItem(key, JSON.stringify(state));
        } else {
            localStorage.setItem(key, state);
        }
    } catch (err) {
        console.log("Unable to save to local storage");
    }
}

// remove state from local storage
export const removeState = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.log("Error removing state from local storage");
    }
}