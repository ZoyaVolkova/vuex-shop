<template>
  <div>
    <h3 class="title">Favorite products</h3>

    <div v-show="!products.length">
      <p>You don't have any favorite products yet!</p>
      <router-link to="/">Go to catalog</router-link>
    </div>

    <div v-show="products.length">
      <ul class="product_list">
        <li v-for="product in products" :key="product.uid" class="product_item">
          <img :src="product.src" class="item_image" />
          <span class="item_name">{{ product.dish }}</span>
          <span class="item_price">{{ product.price + " руб." }}</span>

          <div class="product_actions">
            <button
              v-if="product.quantity === 0"
              type="button"
              class="button item_button add_button"
              @click="addToCart(product)"
            >
              Add
            </button>
            <div v-else>
              <button
                type="button"
                class="button item_button cart_button"
                @click="addToCart(product)"
              >
                +
              </button>
              <span v-if="product.quantity > 0" class="item_quantity">
                {{ product.quantity }}
              </span>
              <button
                type="button"
                class="button item_button remove_button"
                @click="removeFromCart(product)"
              >
                &minus;
              </button>
            </div>

            <button
              type="button"
              class="button item_button remove_like_button"
              @click="removeFromLiked(product)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#F44336"
                  d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "liked",

  computed: {
    ...mapGetters({
      products: "likedProducts",
    }),
  },
  methods: {
    ...mapMutations(["removeFromLiked", "addToCart", "removeFromCart"]),
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 20px;
  margin-left: 40px;
  font-size: 30px;
}
.product_list {
  display: flex;
  flex-wrap: wrap;
}
.product_item {
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-right: 70px;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.item_image {
  margin-bottom: 10px;
}
.item_name {
  padding: 10px;
  font-weight: bold;
}
.item_price,
.item_quantity {
  padding: 10px;
}
.button {
  border-radius: 4px;
  background: #35a2c7;
  color: #fff;
  border: none;
}
.button:hover {
  border: none;
  cursor: pointer;
}
.item_button {
  align-self: flex-start;
  padding: 4px;
  margin: 10px;
}
.product_actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart_button,
.remove_button {
  width: 30px;
}

.add_button {
  width: 120px;
  height: 42px;
}

.remove_like_button,
.like_button {
  width: 42px;
  height: 42px;
  background-color: transparent;
}
</style>
