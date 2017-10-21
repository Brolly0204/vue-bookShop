<template>
  <div class="loading">
    <div class='loader loader--audioWave'></div>
    <div class='loader loader--snake'></div>
    <div class='loader loader--spinningDisc'></div>
    <div class='loader loader--glisteningWindow'></div>
    <div class='loader loader--circularSquare'></div>
  </div>
</template>
<script>
    export default {
      data() {
        return {};
      }
    };
</script>
<style scoped>
  .loading {
      /* width: 100%; */
      position: absolute;
      left: 50%; 
      top: 50%;
      transform: translate3d(-50%, -50%, 0)
   }
  .loader--audioWave {
    width: 3em;
    height: 2em;
    background: linear-gradient(#9b59b6, #9b59b6) 0 50%, linear-gradient(#9b59b6, #9b59b6) 0.625em 50%, linear-gradient(#9b59b6, #9b59b6) 1.25em 50%, linear-gradient(#9b59b6, #9b59b6) 1.875em 50%, linear-gradient(#9b59b6, #9b59b6) 2.5em 50%;
    background-repeat: no-repeat;
    background-size: 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em;
    animation: audioWave 1.5s linear infinite;
  }
  @keyframes audioWave {
    25% {
      background: linear-gradient(#3498db, #3498db) 0 50%, linear-gradient(#9b59b6, #9b59b6) 0.625em 50%, linear-gradient(#9b59b6, #9b59b6) 1.25em 50%, linear-gradient(#9b59b6, #9b59b6) 1.875em 50%, linear-gradient(#9b59b6, #9b59b6) 2.5em 50%;
      background-repeat: no-repeat;
      background-size: 0.5em 2em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em;
    }
    37.5% {
      background: linear-gradient(#9b59b6, #9b59b6) 0 50%, linear-gradient(#3498db, #3498db) 0.625em 50%, linear-gradient(#9b59b6, #9b59b6) 1.25em 50%, linear-gradient(#9b59b6, #9b59b6) 1.875em 50%, linear-gradient(#9b59b6, #9b59b6) 2.5em 50%;
      background-repeat: no-repeat;
      background-size: 0.5em 0.25em, 0.5em 2em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em;
    }
    50% {
      background: linear-gradient(#9b59b6, #9b59b6) 0 50%, linear-gradient(#9b59b6, #9b59b6) 0.625em 50%, linear-gradient(#3498db, #3498db) 1.25em 50%, linear-gradient(#9b59b6, #9b59b6) 1.875em 50%, linear-gradient(#9b59b6, #9b59b6) 2.5em 50%;
      background-repeat: no-repeat;
      background-size: 0.5em 0.25em, 0.5em 0.25em, 0.5em 2em, 0.5em 0.25em, 0.5em 0.25em;
    }
    62.5% {
      background: linear-gradient(#9b59b6, #9b59b6) 0 50%, linear-gradient(#9b59b6, #9b59b6) 0.625em 50%, linear-gradient(#9b59b6, #9b59b6) 1.25em 50%, linear-gradient(#3498db, #3498db) 1.875em 50%, linear-gradient(#9b59b6, #9b59b6) 2.5em 50%;
      background-repeat: no-repeat;
      background-size: 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 2em, 0.5em 0.25em;
    }
    75% {
      background: linear-gradient(#9b59b6, #9b59b6) 0 50%, linear-gradient(#9b59b6, #9b59b6) 0.625em 50%, linear-gradient(#9b59b6, #9b59b6) 1.25em 50%, linear-gradient(#9b59b6, #9b59b6) 1.875em 50%, linear-gradient(#3498db, #3498db) 2.5em 50%;
      background-repeat: no-repeat;
      background-size: 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 0.25em, 0.5em 2em;
    }
  }
</style>