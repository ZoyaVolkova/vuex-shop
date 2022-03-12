import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  products: [],
  images: [
    6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
    6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
    6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
    6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
  ],
};

const getters = {
  total(state, getters) {
    return getters.cartProducts.reduce((total, p) => {
      return total + p.price * p.quantity;
    }, 0);
  },
  cartProducts: (state) => {
    return state.products.filter((p) => p.quantity !== 0);
  },
  likedProducts: (state) => {
    return state.products.filter((p) => p.liked === "yes");
  },
  itemsInCart: (state, getters) => {
    return getters.cartProducts.reduce(
      (accum, item) => accum + item.quantity,
      0
    );
  },
  itemsInLiked(state, getters) {
    return getters.likedProducts.length;
  },
};

const actions = {
  async getProducts({ commit }) {
    let response = await fetch(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    if (response.ok) {
      let json = await response.json();
      commit("allProducts", json);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  },
};

const mutations = {
  allProducts: (state, payload) => {
    payload.forEach((el) => {
      el.price = Math.floor(Math.random() * 5 + 10);
      el.quantity = 0;
      let rand = Math.floor(Math.random() * state.images.length);
      el.src = "images/" + state.images[rand] + ".webp";
      el.liked = "no";
    });
    state.products = payload;
  },

  addToCart: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    item.quantity++;
  },

  removeFromCart: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      item.quantity = 0;
    }
  },

  addToLiked: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    if (item) {
      item.liked = "yes";
    }
  },
  removeFromLiked: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    item.liked = "no";
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
