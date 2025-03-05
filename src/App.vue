<template>
  <div class="wrapper">
    <div class="container">
      <img :src= picture.large alt="photo" class="avatar">
      <div class="about-me">
        <p class="name">{{ name.first }}</p>
        <p class="surname">{{ name.last }}</p>
        <p class="gender">{{ gender }}</p>
        <p class="age">{{ dob.age }}</p>
      </div>
      <div class="buttons">
        <button @click="fetchUser" class="like"> 
          <img src="./assets/image/like.png" alt="like" class="like-img"> 
        </button>
        <button @click="fetchUser" class="dislike">
          <img src="./assets/image/dislike.png" alt="dislike" class="dislike-img">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'App',
    data(){
      return{
        url: 'https://randomuser.me/api/',
        picture: {},
        name: {},
        gender: '',
        dob: {}
      }
    },
    methods: {
      async fetchUser() {
        try {
          const res = await fetch(this.url);
          const data = await res.json();
          const user = data.results[0];

          this.picture = user.picture;
          this.name = user.name;
          this.gender = user.gender;
          this.dob = user.dob;
        } catch (error) {
          console.error('Ошибка загрузки данных:', error);
        }
      }
    },
    mounted() {
      this.fetchUser(); // Загружаем пользователя при старте
    }
  }
</script>

<style scoped>

</style>
