<template>
  <div
    class="container mx-auto grid gap-4 lg:grid-cols-12 sm:grid-cols-2 md:grid-cols-4 p-2 xl:p-4"
  >
    <div
      :class="elementBackgroundClasses[0]"
      @click="randomiseBackgroundClassByIndex(0)"
      class="cursor-pointer lg:col-span-3 md:col-span-2 col-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2 transition-background duration-300"
    >
      <h1 class="text-3xl">Horace Keating</h1>
      <h2 class="text-xl">Web Developer</h2>
    </div>
    <div
      :class="elementBackgroundClasses[1]"
      @click="randomiseBackgroundClassByIndex(1)"
      class="cursor-pointer lg:col-span-2 row-span-2 lg:col-start-11 md:col-start-4 md:col-span-1 col-start-1 border-l-2 border-t-2 border-black border-opacity-75 p-2 transition-background duration-300"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/profile-pic.jpg"
        alt="My headshot"
      />
    </div>
    <div
      :class="elementBackgroundClasses[2]"
      @click="randomiseBackgroundClassByIndex(2)"
      class="cursor-pointer lg:col-start-3 lg:col-span-6 md:col-span-4 md:col-start-1 border-l-2 border-b-2 border-black border-opacity-75 p-2 transition-background duration-300"
    >
      <p class="text-base">
        Hi, I am a web developer specialising in JavaScript and
        <link-external :linkUrl="'https://vuejs.org/'">Vue.js</link-external>.
        Since 2017 I have worked for a London-based
        <link-external :linkUrl="'https://tuimedia.com'">
          digital agency</link-external
        >. In that time I have built
        <link-external
          :LinkUrl="
            'https://www.paconsulting.com/insights/2018/leadership-essentials/'
          "
          >learning platforms</link-external
        >, websites, native apps, and
        <link-external :linkUrl="'https://pulsevisual.com/'"
          >SaaS systems</link-external
        >
        for a range of multinational clients.
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
      :class="elementBackgroundClasses[4]"
      @click="randomiseBackgroundClassByIndex(4)"
      class="cursor-pointer lg:col-start-6 lg:col-span-4 lg:row-start-3 md:row-span-2 md:row-start-4 md:col-span-1 border-r-2 border-t-2 border-black border-opacity-75 p-2 transition-background duration-300"
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
      :class="elementBackgroundClasses[6]"
      @click="randomiseBackgroundClassByIndex(6)"
      class="cursor-pointer col-start-1 col-span-2 lg:row-start-5 lg:col-start-3 lg:col-span-4 lg:row-span-1 border-l-2 border-t-2 border-black border-opacity-75 p-2 lg:border-r-2 lg:border-b-2 lg:border-t-0 lg:border-l-0 transition-background duration-300"
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
import LinkExternal from '@/components/LinkExternal';

export default {
  name: 'Home',
  data() {
    return {
      elementBackgroundClasses: Array(7).fill(''),
      backgroundClasses: [
        '',
        'bg-blue-25',
        'bg-blue-50',
        'bg-blue-75',
        'bg-yellow-25',
        'bg-yellow-50',
        'bg-yellow-75',
        'bg-red-25',
        'bg-red-50',
        'bg-red-75',
      ],
    };
  },
  methods: {
    randomiseBackgroundClassByIndex(index) {
      const availableClasses = this.backgroundClasses.filter(
        bgClass => bgClass !== this.elementBackgroundClasses[index]
      );
      const rand = Math.floor(Math.random() * availableClasses.length);
      this.elementBackgroundClasses.splice(index, 1, availableClasses[rand]);
    },
  },
  components: {
    LinkExternal,
  },
};
</script>
