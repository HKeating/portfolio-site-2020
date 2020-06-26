<template>
  <div
    class="container mx-auto grid gap-4 lg:grid-cols-12 sm:grid-cols-2 md:grid-cols-4"
  >
    <div
      class="lg:col-span-3 md:col-span-2 sm:col-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2"
    >
      <h1 class="text-3xl">Horace Keating</h1>
      <h2 class="text-xl">Web Developer</h2>
    </div>
    <div
      class="col-span-2 row-span-2 lg:col-start-10 md:col-start-3 sm:col-start-1 border-l-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/profile-pic.jpg"
        alt="My headshot"
      />
    </div>
    <div
      class="lg:col-start-3 lg:col-span-6 border-l-2 border-b-2 border-black border-opacity-75 p-2"
    >
      <p class="text-base">
        Hi, I am a web developer specialising in JavaScript and Vue.js. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, modi id.
        Perferendis, optio voluptatum? Itaque illum necessitatibus est, atque
        praesentium dolore eius facilis pariatur sit velit officia eligendi
        voluptas nemo?
      </p>
    </div>
    <div
      class="lg:col-start-5 lg:col-span-4 border-r-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <p class="text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sit
        saepe esse blanditiis laborum ipsam numquam, accusamus ea beatae unde
        sed nihil non natus, deleniti odio ullam aliquam tenetur veritatis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
