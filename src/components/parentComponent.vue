<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/about">About</router-link>
  <router-link to="/">Home</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>