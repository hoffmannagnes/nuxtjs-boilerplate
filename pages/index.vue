<template>
    <div class="container">
      <h1>Gombos oldal</h1>
      <button @click="firstAction">Első gomb</button>
      <button @click="secondAction">Második gomb</button>
    </div>
  </template>
  
  <script setup>
  const firstAction = () => {
    alert('Első gomb megnyomva');
  }
  
  const secondAction = () => {
    alert('Második gomb megnyomva');
  }
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
    text-align: center;
  }
  
  button {
    margin: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  </style>
  