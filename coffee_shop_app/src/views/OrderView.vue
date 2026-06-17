<script setup>
import { computed } from "vue";
import { useCart } from "../store/cart";

const { items, totalItems, totalCost, updateQuantity, removeItem, clearCart } =
  useCart();

function increment(item) {
  updateQuantity(item.id, 1);
}

function decrement(item) {
  updateQuantity(item.id, -1);
}

function handleCheckout() {
  window.alert("Thanks for your order! We are preparing it now.");
  clearCart();
}
</script>

<template>
  <section class="page-section">
    <div class="section-header">
      <p class="eyebrow">Order review</p>
      <h2>Your cart is smelling great.</h2>
    </div>

    <div v-if="items.length === 0" class="empty-state">
      <p>No items in your cart yet. Browse the menu and add your favorites.</p>
      <router-link to="/menu" class="button button-primary"
        >Explore menu</router-link
      >
    </div>

    <div v-else class="order-layout">
      <div class="order-list">
        <div v-for="item in items" :key="item.id" class="order-card">
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="order-controls">
            <div class="quantity-control">
              <button type="button" @click="decrement(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button type="button" @click="increment(item)">+</button>
            </div>
            <strong>${{ (item.price * item.quantity).toFixed(2) }}</strong>
            <button
              type="button"
              class="link-button"
              @click="removeItem(item.id)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <aside class="order-summary">
        <div class="summary-card">
          <h3>Order summary</h3>
          <div class="summary-row">
            <span>Items</span>
            <strong>{{ totalItems }}</strong>
          </div>
          <div class="summary-row">
            <span>Subtotal</span>
            <strong>${{ totalCost }}</strong>
          </div>
          <div class="summary-row accent-row">
            <span>Estimated total</span>
            <strong>${{ totalCost }}</strong>
          </div>
          <button
            type="button"
            class="button button-primary full-width"
            @click="handleCheckout"
          >
            Complete order
          </button>
          <button
            type="button"
            class="button button-secondary full-width"
            @click="clearCart"
          >
            Clear cart
          </button>
        </div>
      </aside>
    </div>
  </section>
</template>
