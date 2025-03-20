<template>
    <div class="register-container">
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <input v-model="name" type="text" placeholder="Имя" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Пароль" required />
        <input v-model="confirmPassword" type="password" placeholder="Подтвердите пароль" required />
        <button type="submit">Зарегистрироваться</button>
      </form>
      
      <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      register() {
        if (this.password !== this.confirmPassword) {
          alert('Пароли не совпадают');
          return;
        }
        console.log('Регистрация:', this.name, this.email, this.password);
        // Здесь будет запрос к серверу для регистрации
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
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
    background: #28a745;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: #218838;
  }
  </style>