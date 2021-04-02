<template>
  <div class="container flex flex-col items-center text-center">
    <h1>El medidor de altura tech</h1>
    <form class="flex flex-wrap py-4">
      <div class="w-full md:w-1/2 p-1">
        <input v-model="user.name" placeholder="Pon tu nombre" type="text" />
      </div>
      <div class="w-full md:w-1/2 p-1">
        <input
          v-model="user.height"
          placeholder="Pon tu altura (cm)"
          type="Number"
        />
      </div>
    </form>
    <div class="flex flex-wrap justify-center items-end space-x-2">
      <client-only>
        <TheHuman :user="{ name: 'Miriam', height: 163 }" color="#D2489E" />
        <TheHuman :user="user" color="white" />
        <TheHuman :user="{ name: 'Alba', height: 163 }" color="#D2489E" />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        height: '',
      },
    }
  },
}
</script>
