<template>
  <section class="hero-panel">
    <div class="hero-copy">
      <div class="eyebrow">Premium coffee experience</div>
      <h1>Roasted for craftsmanship, brewed for moments.</h1>
      <p>
        Discover signature blends, handcrafted pours, and a fast pickup flow
        designed for modern coffee lovers.
      </p>
      <div class="hero-actions">
        <router-link to="/menu" class="button button-primary"
          >View Menu</router-link
        >
        <router-link to="/order" class="button button-secondary"
          >Your Order</router-link
        >
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-card">
        <span class="tag">Barista favorite</span>
        <strong>Caramel Mocha</strong>
        <p>
          Velvety espresso, dark chocolate, and toasted caramel with a cloud of
          milk foam.
        </p>
        <div class="hero-stats">
          <div><strong>32</strong><span>oz servings</span></div>
          <div><strong>4.8</strong><span>star rating</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="feature-grid">
    <article>
      <h2>Fast pickup</h2>
      <p>
        Place your order ahead, skip the line, and enjoy the freshest brew the
        moment you arrive.
      </p>
    </article>
    <article>
      <h2>Seasonal menus</h2>
      <p>
        Rotate between espresso classics, cold brews, and dessert-inspired
        creations every month.
      </p>
    </article>
    <article>
      <h2>Rewards & perks</h2>
      <p>
        Collect points on every order and unlock exclusive tasting events,
        discounts, and first access.
      </p>
    </article>
  </section>

  <section class="menu-preview">
    <div class="section-header">
      <p class="eyebrow">Menu highlights</p>
      <h2>Popular pours and seasonal favorites</h2>
    </div>
    <div class="menu-preview-grid">
      <article>
        <strong>Espresso Martini</strong>
        <p>Bright espresso with vanilla-tonic finish, served chilled.</p>
      </article>
      <article>
        <strong>Maple Latte</strong>
        <p>Rich espresso layered with maple syrup and steamed oat milk.</p>
      </article>
      <article>
        <strong>Cold Brew Twist</strong>
        <p>Slow-steeped brew blended with a splash of citrus and oat cream.</p>
      </article>
    </div>
  </section>
</template>

<script setup></script>
