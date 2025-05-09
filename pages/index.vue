<template>
    <div class="container">
      <h1>Gombos oldal</h1>
      <button @click="firstAction" data-tag="login">Első gomb</button>
      <button @click="secondAction" data-tag="registration">Második gomb</button>
    </div>
  </template>
  
  <script setup>
const firstAction = (event) => {
    const tag = event.target.getAttribute("data-tag");
    sendEventToAnalytics(tag);
};

const secondAction = (event) => {
    const tag = event.target.getAttribute("data-tag");
    sendEventToAnalytics(tag);
};

// Esemény küldése analitikához
const sendEventToAnalytics = (tag) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "button_click",
        button_type: tag // Login vagy Registration
    });

    console.log(`Event sent: ${tag}`);
};
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
  