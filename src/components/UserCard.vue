<template>
    <div class="container">
      <img :src="picture.large" alt="photo" class="avatar">
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
        <button @click="$emit('fetchUser')" class="like"> 
          <img src="./../assets/image/like.png" alt="like" class="like-img"> 
        </button>
        <button @click="$emit('fetchUser')" class="dislike">
          <img src="./../assets/image/dislike.png" alt="dislike" class="dislike-img">
        </button>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      picture: Object,
      name: Object,
      gender: String,
      dob: Object,
      location: Object
    }
  };
</script>
  
  
<style scoped>

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
</style>