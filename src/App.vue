<template>
  <div class="wrapper">
    <div v-if="loading" class="preloader">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>  
    </div>
    <div v-else class="container">
      <img :src=picture.large alt="photo" class="avatar">
      <div class="about-me">
        <p class="name">{{ name.first }}</p>
        <p class="surname">{{ name.last }}</p>
        <p class="location">{{ location.city }}, {{ location.country }}</p>
        <div class="gen-age-block">
          <p class="gender">{{ gender }}</p>
          <p class="age">{{ dob.age }}</p>          
        </div>
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
        dob: {},
        location: {},
        loading: false
      }
    },
    methods: {
      async fetchUser() {
        this.loading = true;
        try {
          const res = await fetch(this.url);
          const data = await res.json();
          const user = data.results[0];

          this.picture = user.picture;
          this.name = user.name;
          this.gender = user.gender;
          this.dob = user.dob;
          this.location = user.location;
        } catch (error) {
          console.error('Ошибка загрузки данных:', error);
        } finally {
          this.loading = false;
        }
      }
    },
    mounted() {
      this.fetchUser();
    }
  }
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  min-width: 25%;
  min-height: 50%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.avatar {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

.about-me p {
  margin: 5px 0;
}

.name, .surname {
  font-weight: bold;
  font-size: 24px;
}

.location {
  font-size: 18px;
}

.gen-age-block{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;
  margin-top: 10px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 15px;
}

.like, .dislike {
  background: none;
  border: none;
  cursor: pointer;
}

.like-img, .dislike-img {
  width: 40px;
  height: 40px;
  transition: transform 0.2s;
}

.like:hover .like-img, .dislike:hover .dislike-img {
  transform: scale(1.1);
}

.bar {
    width: 8px;
    height: 30px;
    background: #9771EC;
    display: inline-block;
    margin-right: 0px;
    opacity: 0.1;
    -webkit-transform: scale(1);
    -webkit-animation: pulse .7s ease-in-out infinite alternate;
    transform-origin: center;
  }
  
  .bar:nth-child(1) {
    animation-delay: 0.05s;
  }
  
  .bar:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .bar:nth-child(3) {
    animation-delay: 0.35s;
    margin-right: 0;
  }
  
  @-webkit-keyframes pulse {
    to {
      -webkit-transform: scale(1.2);
      opacity: 1;
    }
  }

  @keyframes pulse {
    to {
      transform: scale(1.2);
      opacity: 1;
    }
  }
</style>
