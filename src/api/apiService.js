import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const createUser = async (user) => {
    try {
        console.log(BASE_URL);
        const res = await axios.post(BASE_URL + "/users/signup", user);

        localStorage.setItem("token", res.data.token);
    }
    catch (err) {
        console.log(err);
    }
};

const loginUser = async (user) => {
    try {
        console.log(BASE_URL);
        const res = await axios.post(BASE_URL + "/users/login", user);

        localStorage.setItem("token", res.data.token);
    }
    catch (err) {
        console.log(err);
    }
};

const getCategories = async () => {
    try {
        const res = await axios.get(BASE_URL + "/categories");
        console.log(res.data.data);
        return res.data.data;
    }
    catch (err) {
        console.log(err);
    }
};

const getProducts = async (limitNo, search, category) => {
    try {
        const res = await axios.get(BASE_URL + "/products", {
            params: {
                limit: limitNo,
                search: search,
                category: category !== "All" ? category : undefined
            }
        });

        console.log(res.data.data);

        return res.data.data;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const getProductById = async (id) => {
    try {
        const res = await axios.get(BASE_URL + "/products/" + id);
        console.log(res.data.data);
        return res.data.data;
    }
    catch (err) {
        console.log(err);
    }
};

const addToWishlist = async (productId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.post(BASE_URL + "/wishlists", { productId }, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
};

const getWishlist = async () => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.get(BASE_URL + "/wishlists", {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data.data);
        return (res.data.data);
    }
    catch (err) {
        console.log(err);
    }
};

const removeFromWishlist = async (productId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.delete(BASE_URL + "/wishlists/" + productId, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data);
        return res.data;
    }
    catch (err) {
        return null;
    }
};

const addToCart = async (productId, quantity) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.post(BASE_URL + "/carts", { productId, quantity }, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
};

const getCart = async () => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.get(BASE_URL + "/carts", {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data.data);
        return res.data.data;
    }
    catch (err) {
        console.log(err);
    }
};

const updateCart = async (productId, quantity) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.put(BASE_URL + "/carts/" + productId, {quantity}, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
};

const removeFromCart = async (productId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.delete(BASE_URL + "/carts/" + productId, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
};

const createOrder = async (contactDetails, shippingAddress) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.post(BASE_URL + "/orders" ,{contactDetails, shippingAddress}, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
};

const findOrder = async () => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.get(BASE_URL + "/orders", {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err);
    }
};

const findOrderById = async (orderId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.get(BASE_URL + "/orders" + orderId, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err);
    }
};

const cancelOrder = async (orderId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.delete(BASE_URL + "/orders" + orderId, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err);
    }
};

const updatePaymentStatus = async (orderId) => {
    try {
        const token = localStorage.getItem("token");
        console.log(token);

        const res = await axios.put(BASE_URL + "/orders/" + orderId, {},{
            headers: {
                Authorization: "Bearer " + token
            }
        });

        console.log(res.data);
        return(res.data);
    }
    catch (err) {
        console.log(err);
    }
};

export { createUser, loginUser, getCategories, getProducts, getProductById, addToWishlist, getWishlist, removeFromWishlist, addToCart, getCart, updateCart, removeFromCart, createOrder, findOrder, findOrderById, cancelOrder, updatePaymentStatus };