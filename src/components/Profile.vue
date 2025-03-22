<template>
    <div class="profile">
        <div class="head_profile">
            <h1>Профиль</h1>
            <button><img src="./../assets/image/dottripple.png" alt=""></button> 
            <button><img src="./../assets/image/close.png" alt=""></button>     
        </div>
      
      <div class="profile-card">
        <img :src="user.avatar" alt="Аватар пользователя" class="avatar" />
        <h2>{{ user.name }}</h2>
        <p>Email: {{ user.email }}</p>
        <button @click="logout">Выйти</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'Имя пользователя',
          email: 'user@example.com',
          avatar: 'https://via.placeholder.com/150'
        }
      };
    },
    methods: {
      logout() {
        // Очистка данных пользователя и редирект на страницу входа
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .profile {
    text-align: center;
    padding: 20px;
    background: #fff;
  }
  
  </style>