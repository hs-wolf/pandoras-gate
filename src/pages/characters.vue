<script setup lang="ts"></script>

<template>
  <div class="page gap-2">
    <h1 class="px-3 py-4 text-2xl leading-none">
      Characters
    </h1>
    <button class="self-center btn-base btn-accent">
      Create new character
    </button>
    <div class="flex flex-col px-3 py-4">
      <button class="flex items-center gap-2 bg-secondary shadow-sm dark:bg-primary rounded-sm ">
        <NuxtImg
          src="https://i.pinimg.com/originals/9c/d1/e5/9cd1e53efc6eb863ee2480758c6bd124.jpg"
          width="80"
          height="80"
          class="rounded-sm"
        />
        <div class="flex flex-col justify-center gap-2">
          <p class="font-semibold leading-none">
            Tai Lung
          </p>
          <p class="text-sm leading-none">
            Nv 1, Grau 2
          </p>
          <p class="text-sm leading-none">
            Taoísta, Miku, Linker
          </p>
        </div>
      </button>
    </div>
  </div>
</template>
