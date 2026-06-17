import { computed, reactive, watch } from 'vue'

const STORAGE_KEY = 'coffee-shop-cart'
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
const state = reactive({ items: saved })

watch(
  () => state.items,
  () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
  },
  { deep: true }
)

function findItem(id) {
  return state.items.find((item) => item.id === id)
}

function addItem(product) {
  const stored = findItem(product.id)
  if (stored) {
    stored.quantity += 1
  } else {
    state.items.push({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1
    })
  }
}

function removeItem(id) {
  const index = state.items.findIndex((item) => item.id === id)
  if (index >= 0) {
    state.items.splice(index, 1)
  }
}

function updateQuantity(id, delta) {
  const item = findItem(id)
  if (!item) return
  item.quantity = Math.max(1, item.quantity + delta)
}

function clearCart() {
  state.items.splice(0, state.items.length)
}

const totalItems = computed(() => state.items.reduce((sum, item) => sum + item.quantity, 0))
const totalCost = computed(() => state.items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2))

export function useCart() {
  return {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalCost
  }
}
