<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Srv from '@/service/services'

Srv.getAll()
const { t } = useI18n()
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ t("message.hello") }}
  </h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
