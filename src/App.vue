<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <div class="container-item">
      <b-button class="m-5">Default</b-button>
      <b-button class="m-5" type="primary">Primary</b-button>
      <b-button class="m-5" type="warning">Warning</b-button>
      <b-button class="m-5" type="info">Info</b-button>
      <b-button class="m-5" type="danger">Danger</b-button>
      <b-button class="m-5" type="danger" :disabled="true">Disabled</b-button>
    </div>
    <div class="container-item">
      <b-button class="m-5" :fill="false">Default</b-button>
      <b-button class="m-5" type="primary" :fill="false">Primary</b-button>
      <b-button class="m-5" type="warning" :fill="false">Warning</b-button>
      <b-button class="m-5" type="info" :fill="false">Info</b-button>
      <b-button class="m-5" type="danger" :fill="false">Danger</b-button>
      <b-button class="m-5" type="danger" :fill="false" :disabled="true" @click="handleClick">Disabled</b-button>
    </div>
    <div class="container-item">
      <b-button type="primary" :fill="false" :block="true">Primary</b-button>
    </div>
    <div class="container-item">
      <b-button class="m-5" type="warning" width="200" height="50">Primary</b-button>
      <b-button class="m-5" type="info" width="200" height="50">Primary</b-button>
    </div>
    <div class="container-item">
      <b-icon class="m-5" name="home"></b-icon>
      <b-icon class="m-5" name="setting"></b-icon>
      <b-icon class="m-5" name="delete"></b-icon>
      <b-icon class="m-5" name="edit"></b-icon>
      <b-icon class="m-5" name="loading"></b-icon>
      <b-icon class="m-5" name="danger"></b-icon>
      <b-icon class="m-5" name="warn"></b-icon>
      <b-icon class="m-5" name="question"></b-icon>
      <b-icon class="m-5" name="search"></b-icon>
      <b-icon class="m-5" name="menu"></b-icon>
      <b-icon class="m-5" name="clear"></b-icon>
    </div>
    <div class="container-item">
      <b-input class="m-5" v-model="inputValue" placeholder="请输入"></b-input>
      <b-input class="m-5" v-model="inputValue" placeholder="请输入（禁用）" :disabled="true"></b-input>
      <b-input class="m-5" v-model="inputValue" placeholder="请输入（最大长度为10）" maxlength="10"></b-input>
      <b-input class="m-5" v-model="inputValue" placeholder="请输入密码" type="password"></b-input>
      <b-input class="m-5" v-model="inputValue" placeholder="请输入（可清除）" :clear="true"></b-input>
      <b-input class="m-5" v-model="inputValue" placeholder="带icon的输入框" :clear="true">
        <template #prefix>
          <b-icon name="search" width="18" height="18" fill="#ccc" style="padding: 3px 0 0 10px;"></b-icon>
        </template>
      </b-input>
      <b-input class="m-5" v-model="inputValue" placeholder="带icon的输入框">
        <template #subfix>
          <b-icon name="warn" width="18" height="18" fill="#ccc" style="padding: 3px 10px 0 0"></b-icon>
        </template>
      </b-input>
      <b-input class="m-5" v-model="inputValue" placeholder="带icon的输入框">
        <template #prefix>
          <b-icon name="search" width="18" height="18" fill="#ccc" style="padding: 3px 0 0 10px;"></b-icon>
        </template>
        <template #subfix>
          <b-icon name="warn" width="18" height="18" fill="#ccc" style="padding: 3px 10px 0 0"></b-icon>
        </template>
      </b-input>
    </div>
    <div class="container-item">
      <b-textarea v-model="textValue" placeholder="请输入" width="100"></b-textarea>
      <b-textarea v-model="textValue" placeholder="请输入" :resizable="false"></b-textarea>
      <b-textarea v-model="textValue" placeholder="请输入" max-width="300" max-height="200" min-width="200" min-height="100"></b-textarea>
    </div>
    <div class="container-item">
      <b-radio class="m-5">选项A</b-radio>
      <b-radio class="m-5" type="square">选项B</b-radio>
      <b-radio class="m-5" color="orange">选项C</b-radio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const handleClick = () => {
  console.log('click.')
}
const inputValue = ref('')
const textValue = ref('')
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
.m-5 {
  margin: 5px;
}
</style>
