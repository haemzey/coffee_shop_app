<script setup>
import { computed, ref } from "vue";
import { useCart } from "../store/cart";

const searchQuery = ref("");
const selectedCategory = ref("All");
const categories = ["All", "Espresso", "Cold Brew", "Desserts", "Favorites"];
const { addItem, totalItems } = useCart();

const menuItems = [
  {
    id: "bean-espresso",
    name: "Single Origin Espresso",
    description: "Intense body, caramel notes, and a clean finish.",
    price: 4.25,
    category: "Espresso",
    label: "Classic",
  },
  {
    id: "bean-flatwhite",
    name: "Flat White",
    description: "Smooth ristretto topped with silky microfoam.",
    price: 5.75,
    category: "Espresso",
    label: "Creamy",
  },
  {
    id: "bean-coldbrew",
    name: "Signature Cold Brew",
    description: "Slow-steeped and lightly sweetened for crisp clarity.",
    price: 5.95,
    category: "Cold Brew",
    label: "Chilled",
  },
  {
    id: "bean-brulee",
    name: "Brûlée Latte",
    description: "Sweet custard aroma with toasted sugar finish.",
    price: 6.25,
    category: "Espresso",
    label: "Seasonal",
  },
  {
    id: "bean-iced",
    name: "Vanilla Iced Coffee",
    description: "Classic roast, vanilla, and cold foam over ice.",
    price: 4.95,
    category: "Cold Brew",
    label: "Refreshing",
  },
  {
    id: "bean-cookie",
    name: "Chocolate Chip Cookie",
    description: "Warm and chewy with rich dark chocolate pieces.",
    price: 2.95,
    category: "Desserts",
    label: "Baked",
  },
  {
    id: "bean-cake",
    name: "Hazelnut Torte",
    description: "Almond sponge layered with espresso cream.",
    price: 6.5,
    category: "Desserts",
    label: "Sweet",
  },
  {
    id: "bean-affogato",
    name: "Affogato",
    description: "Vanilla gelato drowned in hot espresso.",
    price: 7.0,
    category: "Favorites",
    label: "Popular",
  },
];

const filteredItems = computed(() => {
  return menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory.value === "All" ||
      item.category === selectedCategory.value;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

function handleAdd(item) {
  addItem(item);
}
</script>

<template>
  <section class="page-section">
    <div class="section-header">
      <p class="eyebrow">Coffee menu</p>
      <h2>Choose your next favorite drink</h2>
    </div>

    <div class="toolbar">
      <label class="search-field">
        <input
          type="search"
          v-model="searchQuery"
          placeholder="Search drinks and treats"
        />
      </label>
      <div class="category-tabs">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="{ active: selectedCategory === category }"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="menu-grid">
      <article
        v-for="item in filteredItems"
        :key="item.id"
        class="menu-item-card"
      >
        <div class="menu-item-head">
          <div>
            <span class="item-label">{{ item.label }}</span>
            <h3>{{ item.name }}</h3>
          </div>
          <strong class="price">${{ item.price.toFixed(2) }}</strong>
        </div>
        <p>{{ item.description }}</p>
        <button
          type="button"
          class="button button-primary filled"
          @click="handleAdd(item)"
        >
          Add to Order
        </button>
      </article>
    </div>

    <div class="menu-summary">
      <div>
        <h3>Current cart</h3>
        <p>
          {{ totalItems }} item{{ totalItems === 1 ? "" : "s" }} ready to
          checkout.
        </p>
      </div>
      <router-link to="/order" class="button button-secondary"
        >Review order</router-link
      >
    </div>
  </section>
</template>
