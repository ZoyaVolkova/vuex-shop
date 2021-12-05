<template>
  <div>
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
            Добавить
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
            v-if="product.liked === 'no'"
            type="button"
            class="button item_button like_button"
            @click="addToLiked(product)"
          >
            В избранное
          </button>
          <button
            v-if="product.liked === 'yes'"
            type="button"
            class="button item_button remove_like_button"
            @click="removeFromLiked(product)"
          >
            Удалить из избранного
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "products",

  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations([
      "addToLiked",
      "removeFromLiked",
      "addToCart",
      "removeFromCart",
    ]),
  },
  async created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.product_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product_item {
  display: flex;
  width: 300px;
  flex-direction: column;

  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  justify-content: space-between;
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
  background: #fff;
  border: 1px solid #35a2c7;
  border-radius: 4px;
}
.button:hover {
  background: #35a2c7;
  color: #fff;
  border: none;
  cursor: pointer;
}
.item_button {
  align-self: flex-start;
  padding: 5px;
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
  height: 30px;
}
.remove_like_button,
.like_button,
.add_button {
  width: 120px;
  height: 42px;
}
</style>
