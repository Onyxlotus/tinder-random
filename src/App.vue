<template>
  <div class="wrapper">
    <Preloader v-if="loading" />
    <UserCard 
      v-else 
      :picture="picture" 
      :name="name" 
      :gender="gender" 
      :dob="dob" 
      :location="location"
      @fetchUser="fetchUser"
    />
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue';
import Preloader from './components/Preloader.vue';

export default {
  components: {
    UserCard,
    Preloader
  },
  data() {
    return {
      url: 'https://randomuser.me/api/',
      picture: {},
      name: {},
      gender: '',
      dob: {},
      location: {},
      loading: false
    };
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
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
