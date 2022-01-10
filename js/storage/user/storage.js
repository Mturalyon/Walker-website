const tokenKey = "token";
const userKey = "user";

//flexible functions
export function saveToken(token) {
    saveToStorage(tokenKey, token);
};

export function getToken() {
    return getFromStorage(tokenKey);
};

export function saveUser(user) {
    saveToStorage(userKey, user);
};

export function getUsername() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
};

export function clearStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

//static functions
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return null;
    }

    return JSON.parse(value);
};