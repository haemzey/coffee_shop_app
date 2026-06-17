<template>
  <div id="app">
    <header class="site-header">
      <div class="brand">
        <div class="brand-mark">C</div>
        <div>
          <p class="brand-name">Caffeine Corner</p>
          <p class="brand-tag">Coffee shop experience</p>
        </div>
      </div>
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/order">Order</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <p>Designed for modern coffee lovers — crafted with Vue 3 and Vite.</p>
    </footer>
  </div>
</template>

<script setup></script>
