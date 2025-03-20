<template>
    <div class="login-container">
      <h2>Вход</h2>
      <form @submit.prevent="login">
        <input v-model="text" type="text" placeholder="Логин" required />
        <input v-model="password" type="password" placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
      
      <div class="social-login">
        <button @click="loginWithVK">Войти через ВК</button>
        <button @click="loginWithGoogle">Войти через Google</button>
      </div>
      
      <p>Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Попытка входа:', this.email, this.password);
        // Здесь будет запрос к серверу
      },
      loginWithVK() {
        console.log('Вход через ВК');
        // Добавить логику OAuth для ВК
      },
      loginWithGoogle() {
        console.log('Вход через Google');
        // Добавить логику OAuth для Google
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  input, button {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
  }
  button {
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: #0056b3;
  }
  .social-login button {
    background: #4267B2;
  }
  .social-login button:nth-child(2) {
    background: #DB4437;
  }
  </style>