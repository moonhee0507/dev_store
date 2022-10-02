export let ascending = function (products) {
    products.sort(function (a, b) {
        return a.price - b.price;
    });

    return products;
};

export let descending = function (products) {
    products.sort(function (a, b) {
        return b.price - a.price;
    });

    return products;
};

export let newItemOrder = function (products) {
    products.sort(function (a, b) {
        return a.created_at - b.created_at;
    });

    return products;
};
