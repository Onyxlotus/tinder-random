<template>
    <div class="preloader">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>  
    </div>
</template>
  
<style scoped>

.bar {
    width: 8px;
    height: 30px;
    background: #9771EC;
    display: inline-block;
    margin-right: 0px;
    opacity: 0.1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation: pulse .7s ease-in-out infinite alternate;
    animation: pulse .7s ease-in-out infinite alternate;
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