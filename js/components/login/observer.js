const observer = (variable, callback) =>
    new Proxy(variable, {
        set: (obj, prop, value) => {
            obj[prop] = value;
            callback(obj);
        },
        get: (obj, prop) => {
            return prop in obj ? obj[prop] : undefined;
        },
    });

export default observer;
