<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <div class="container-item">
      <b-button>Default</b-button>
      <b-button type="primary">Primary</b-button>
      <b-button type="warning">Warning</b-button>
      <b-button type="info">Info</b-button>
      <b-button type="danger">Danger</b-button>
      <b-button type="danger" :disabled="true">Disabled</b-button>
    </div>
    <div class="container-item">
      <b-button :fill="false">Default</b-button>
      <b-button type="primary" :fill="false">Primary</b-button>
      <b-button type="warning" :fill="false">Warning</b-button>
      <b-button type="info" :fill="false">Info</b-button>
      <b-button type="danger" :fill="false">Danger</b-button>
      <b-button type="danger" :fill="false" :disabled="true">Disabled</b-button>
    </div>
    <div class="container-item">
      <b-button type="primary" :fill="false" :block="true">Primary</b-button>
    </div>
    <div class="container-item">
      <b-button type="warning" width="200" height="50">Primary</b-button>
      <b-button type="info" width="200" height="50">Primary</b-button>
    </div>
    <div class="container-item">
      <b-icon name="home"></b-icon>
      <b-icon name="setting"></b-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container-item {
  width: 520px;
  margin: 15px auto;
}
.b-button {
  margin: 0 5px;
}
</style>
