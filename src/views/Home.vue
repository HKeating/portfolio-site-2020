<template>
  <div
    class="container mx-auto grid lg:grid-cols-12 grid-cols-2 md:grid-cols-4 p-2 xl:p-4"
  >
    <div
      :class="elementBackgroundClasses[0]"
      @click="randomiseBackgroundClassByIndex(0)"
      class="m-2 cursor-pointer lg:col-span-3 md:col-span-2 col-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2 transition-background duration-300"
    >
      <h1 class="text-3xl">Horace Keating</h1>
      <h2 class="text-xl">Web Developer</h2>
    </div>
    <div
      :class="elementBackgroundClasses[1]"
      @click="randomiseBackgroundClassByIndex(1)"
      class="m-2 cursor-pointer row-span-1 col-start-1 col-span-1 md:row-span-2 md:col-start-4 md:col-span-1 lg:col-span-2 lg:col-start-11 border-l-2 border-t-2 border-black border-opacity-75 p-2 transition-background duration-300"
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
      class="m-2 cursor-pointer col-span-1 col-start-2 lg:col-start-3 lg:col-span-6 md:col-span-4 md:col-start-1 border-l-2 border-b-2 border-black border-opacity-75 p-2 transition-background duration-300"
    >
      <p class="text-base">
        Hi, I am a web developer specialising in JavaScript and
        <link-external :linkUrl="'https://vuejs.org/'">Vue.js</link-external>.
        For the past {{ yearsInCurrentRole }} years, I have worked for a
        London-based
        <link-external :linkUrl="'https://tuimedia.com'">
          digital agency</link-external
        >. In that time I have built
        <link-internal :routeName="'CurrentWork'">
          learning platforms, websites, native apps, and SaaS systems
        </link-internal>
        for multinational clients, and developed expertise in a wide range of
        web technologies.
      </p>
    </div>
    <div
      class="m-2 col-span-3 row-span-1 col-start-1 md:col-start-2 lg:col-start-1 lg:col-span-4 lg:row-span-2 border-l-2 border-t-2 border-black border-opacity-75 p-2 transition-background duration-300 hover:bg-blue-50"
    >
      <router-link :to="{ name: 'BTAB' }">
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/btab-2.jpg"
          alt="Britain, take a bow"
        />
      </router-link>
    </div>
    <div
      :class="elementBackgroundClasses[4]"
      @click="randomiseBackgroundClassByIndex(4)"
      class="m-2 cursor-pointer col-span-2 lg:col-start-6 lg:col-span-5 lg:row-start-3 md:row-span-1 md:row-start-4 md:col-span-1 border-r-2 border-b-2 md:border-b-0 md:border-t-2 border-black border-opacity-75 p-2 transition-background duration-300"
    >
      <p class="text-base">
        In 2018, alongside two colleagues, I built
        <link-internal :routeName="'BTAB'">Britain, Take A Bow</link-internal>,
        a generative digital art piece responding to the national debate about
        Brexit.
      </p>
    </div>
    <div
      class="m-2 col-span-2 col-start-1 sm:row-start-6 md:row-start-5 md:col-start-1 lg:row-start-5 lg:col-start-9 lg:col-span-3 lg:row-span-1 border-t-2 border-r-2 md:border-t-0 md:border-b-2 border-black border-opacity-75 p-2 lg:border-t-2 lg:border-l-2 lg:border-r-0 lg:border-b-0 transition-background duration-300 hover:bg-yellow-50"
    >
      <router-link :to="{ name: 'GA' }">
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/ga-projects.jpg"
          alt="General Assembly projects"
        />
      </router-link>
    </div>
    <div
      :class="elementBackgroundClasses[6]"
      @click="randomiseBackgroundClassByIndex(6)"
      class="m-2 cursor-pointer col-start-1 col-span-2 md:col-start-3 lg:row-start-5 lg:col-start-3 lg:col-span-5 lg:row-span-1 border-l-2 border-b-2 md:border-b-0 md:border-t-2 border-black border-opacity-75 p-2 lg:border-r-2 lg:border-b-2 lg:border-t-0 lg:border-l-0 transition-background duration-300"
    >
      <p class="text-base">
        My fascination with technology, and the transformative effect of the
        internet on communication, media and the arts drove me to complete the
        Web Development Immersive course at
        <link-internal :routeName="'GA'">General Assembly</link-internal>
        after completing my degree in German.
      </p>
    </div>
    <div
      class="m-2 cursor-pointer col-start-1 col-span-2 md:col-start-2 lg:row-start-6 lg:col-start-7 lg:col-span-4 border-l-2 border-t-2 border-black border-opacity-75 p-2 bg-gray-50 transition-background duration-300"
    >
      <h2 class="text-lg text-white-100">
        Get in touch:
      </h2>
      <div class="flex justify-between py-2">
        <a href="mailto:hkeatingcontact@gmail.com?subject=Website%20Contact"
          ><img
            class="w-20 md:w-12 contact-link"
            src="@/assets/images/email-icon.png"
            alt="Email Contact"
        /></a>

        <link-external
          :linkUrl="'https://www.linkedin.com/in/horace-keating-6599b513b/'"
          ><img
            class="w-20 md:w-12 contact-link"
            src="@/assets/images/linkedin.png"
            alt="My LinkedIn profile"
        /></link-external>

        <link-external :linkUrl="'https://github.com/HKeating'"
          ><img
            class="w-20 md:w-12 contact-link"
            src="@/assets/images/github-logo.png"
            alt="My GitHub profile"
        /></link-external>

        <link-external :linkUrl="'https://twitter.com/HoraceKeating'"
          ><img
            class="w-20 md:w-12 contact-link"
            src="@/assets/images/twitter.png"
            alt="My Twitter account"
        /></link-external>
      </div>
    </div>
  </div>
</template>

<script>
import LinkExternal from '@/components/LinkExternal';
import LinkInternal from '@/components/LinkInternal';

export default {
  name: 'Home',
  data() {
    return {
      elementBackgroundClasses: Array(8).fill(''),
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
  computed: {
    yearsInCurrentRole() {
      const joinedTui = 2017;
      return new Date().getFullYear() - joinedTui;
    },
  },
  components: {
    LinkExternal,
    LinkInternal,
  },
};
</script>

<style lang="postcss">
.contact-link {
  transition: transform 300ms ease-in-out;
}
.contact-link:hover {
  transform: translateY(-4px) scale(1.05);
}
</style>
