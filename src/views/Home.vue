<template>
  <div
    class="container mx-auto grid gap-4 lg:grid-cols-12 sm:grid-cols-2 md:grid-cols-4 p-2 xl:p-4"
  >
    <div
      class="lg:col-span-3 md:col-span-2 col-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2"
    >
      <h1 class="text-3xl">Horace Keating</h1>
      <h2 class="text-xl">Web Developer</h2>
    </div>
    <div
      class="lg:col-span-2 row-span-2 lg:col-start-11 md:col-start-4 md:col-span-1 col-start-1 border-l-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/profile-pic.jpg"
        alt="My headshot"
      />
    </div>
    <div
      class="lg:col-start-3 lg:col-span-6 md:col-span-4 md:col-start-1 border-l-2 border-b-2 border-black border-opacity-75 p-2 transition-background duration-300 hover:bg-yellow-50"
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
      class="col-span-3 row-span-1 col-start-1 md:col-start-2 lg:col-start-1 lg:col-span-4 border-l-2 border-t-2 border-black border-opacity-75 p-2 transition-background duration-300 hover:bg-blue-50"
    >
      <a
        href="https://britaintakeabow.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/btab-1.png"
          alt="Britain, take a bow"
        />
      </a>
    </div>
    <div
      class="lg:col-start-6 lg:col-span-4 lg:row-start-3 md:row-span-2 md:row-start-4 md:col-span-1 border-r-2 border-t-2 border-black border-opacity-75 p-2 transition-background duration-300 hover:bg-red-50"
    >
      <p class="text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sit
        saepe esse blanditiis laborum ipsam numquam, accusamus ea beatae unde
        sed nihil non natus, deleniti odio ullam aliquam tenetur veritatis.
      </p>
    </div>
    <div
      class="col-span-2 col-start-1 sm:row-start-6 md:col-start-2 lg:row-start-5 lg:col-start-7 lg:col-span-5 lg:row-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2 lg:border-t-2 lg:border-l-2 lg:border-r-0 lg:border-b-0 transition-background duration-300 hover:bg-yellow-50"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://flappy-sausage.herokuapp.com"
      >
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/flappy-sausage.png"
          alt="Flappy sausage game"
        />
      </a>
    </div>
    <div
      class="col-start-1 col-span-2 lg:row-start-5 lg:col-start-3 lg:col-span-4 lg:row-span-1 border-l-2 border-t-2 border-black border-opacity-75 p-2 lg:border-r-2 lg:border-b-2 lg:border-t-0 lg:border-l-0 transition-background duration-300 hover:bg-blue-50"
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
