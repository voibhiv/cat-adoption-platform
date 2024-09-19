<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const nav = [
  { label: "Home", to: "/" },
  { label: "Login", to: "/login" },
  // { label: 'Parent (index)', to: '/parent' },
  // { label: 'Parent (b)', to: '/parent/b' },
  // { label: 'Keyed child', onClick: () => router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`) },
  // { label: 'Non-Keyed child', onClick: () => router.push(`/parent/static-${(Math.random() * 100).toFixed()}`) },
];

</script>

<style lang="scss">
body,
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

html,
body,
#__nuxt,
#__layout,
.root-class {
  height: 100% !important;
  width: 100% !important;
  background: $secondary;
}
</style>
