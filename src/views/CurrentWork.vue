<template>
  <div
    class="btab container mx-auto grid lg:grid-cols-12 grid-cols-2 md:grid-cols-4 p-2 xl:p-4"
  >
    <div
      class="m-2 lg:col-span-4 md:col-span-2 col-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2"
    >
      <h1 class="text-3xl">Tui Media</h1>
      <h2 class="text-xl">Front end developer</h2>
      <h2 class="text-lg italic">Aug 2017 - Present</h2>
    </div>
    <div class="home-nav-link sticky m-2 col-start-1">
      <link-internal
        class="p-2 border-t-2 border-l-2 border-black border-opacity-75 bg-white-75"
        :routeName="'Home'"
        >Home</link-internal
      >
    </div>
    <div
      class="m-2 col-span-2 row-span-1 col-start-1 row-start-4 sm:col-span-1 sm:col-start-2 sm:row-start-3 md:col-start-3 md:row-start-2 md:col-span-2 md:row-span-2 lg:col-start-8 lg:col-span-4 border-r-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/pa-platform.jpg"
        alt="Leadership training platform"
      />
    </div>
    <div
      class="m-2 p-2 border-t-2 border-l-2 border-black border-opacity-75 col-start-1 col-span-2 row-start-3 sm:col-span-1 md:col-start-1 md:col-span-2 lg:col-start-3 lg:col-span-5"
    >
      <h2 class="text-xl">Vue.js</h2>
      <p class="text-base">
        I have developed a high level of expertise with Vue.js over the past
        three years and have led development on multiple Vue projects.
      </p>
    </div>
    <div
      class="m-2 p-2 border-b-2 border-r-2 border-black border-opacity-75 col-start-1 col-span-2 row-start-6 sm:col-span-1 sm:col-start-1 sm:row-start-5 md:col-start-1 md:col-span-2 lg:col-start-10 lg:col-span-3 lg:row-start-4 xl:col-start-10 xl:col-span-2"
    >
      <p class="text-base">
        I am experienced with a variety tools from around the Vue ecosystem
        including, but not limited to:
      </p>
      <ul class="">
        <li>
          <link-external :linkUrl="'https://vuex.vuejs.org/'"
            >Vuex</link-external
          >
        </li>
        <li>
          <link-external :linkUrl="'https://nuxtjs.org/'"
            >Nuxt.js</link-external
          >
        </li>
        <li>
          <link-external :linkUrl="'https://nativescript-vue.org/'"
            >NativeScript-Vue</link-external
          >
        </li>
        <li>
          <link-external :linkUrl="'https://www.npmjs.com/package/vue-cordova'"
            >Vue-Cordova</link-external
          >
        </li>
        <li>
          <link-external :linkUrl="'https://kazupon.github.io/vue-i18n/'"
            >Vue-i18n</link-external
          >
        </li>
      </ul>
    </div>
    <div
      class="m-2 p-2 border-b-2 border-l-2 border-black border-opacity-75 col-start-1 col-span-2 row-start-5 sm:col-start-1 sm:row-start-4 md:col-start-1 md:col-span-4 lg:col-start-3 lg:col-span-7 lg:row-start-4"
    >
      <h2 class="text-lg">Learning platform</h2>
      <p class="text-base mb-2">
        I built a
        <link-external
          :linkUrl="
            'https://www.paconsulting.com/insights/2018/leadership-essentials/'
          "
          >white-label, modular, CMS-backed web portal</link-external
        >
        for PA Consulting. By passing a flag in the build command, the project
        can be configured with different features, components, and styles for
        different clients.
      </p>
      <p class="text-base">
        In a subsequent phase of work I collaborated closely with another
        developer to add multi-language support. This involved updating the CMS
        to include separate versions of each page for each supported language.
      </p>
    </div>
    <div
      class="m-2 p-2 border-t-2 border-r-2 border-black border-opacity-75 col-start-1 col-span-2 sm:row-start-6 sm:col-start-1 md:col-start-2 md:col-span-3 md:row-start-6 lg:row-start-5 lg:col-start-4 lg:col-span-6"
    >
      <h2 class="text-xl">Native App Development</h2>
      <p class="text-base">
        In the last two years I have expanded my skillset to include app
        development. I have used
        <link-external :linkUrl="'https://cordova.apache.org/'"
          >Cordova</link-external
        >
        and
        <link-external :linkUrl="'https://nativescript.org/'"
          >NativeScript</link-external
        >
        to build multiple production apps, and have also experimented with
        <link-external :linkUrl="'https://flutter.dev/'">Flutter</link-external
        >.
      </p>
    </div>
    <div
      class="m-2 p-2 border-b-2 border-l-2 md:border-r-2 md:border-l-0 border-black border-opacity-75 col-start-1 col-span-1 sm:col-start-1 md:col-start-2 md:col-span-3 lg:col-start-4 lg:col-span-6"
    >
      <h2 class="text-lg">Chat Bot</h2>
      <p class="text-base">
        I used NativeScript-Vue to build the front-end app for an onboarding
        chatbot for Rolls-Royce.
      </p>
      <p class="text-base">
        I also built a proof-of-concept DialogFlow agent to handle the bot's
        natural language processing and worked with my team to expand its
        capabilities for release.
      </p>
    </div>
    <div
      class="m-2 col-span-1 row-span-2 col-start-2 md:col-start-1 md:col-span-1 md:row-start-6 lg:row-start-5 lg:col-start-1 lg:col-span-3 xl:col-start-2 xl:col-span-2 border-l-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/chatbot.png"
        alt="Rolls-Royce ChatBot"
      />
    </div>
    <div
      class="m-2 p-2 border-t-2 border-l-2 border-black border-opacity-75 col-start-1 col-span-2 sm:col-start-1 md:col-start-2 md:col-span-3 lg:col-start-3 lg:col-span-6"
    >
      <h2 class="text-xl">SaaS Succession Planning</h2>
      <p class="text-base">
        For the past two years I have led front-end development for a
        <link-external :linkUrl="'https://pulsevisual.com/'"
          >succession planning SaaS system</link-external
        >. The service comprises a native iOS and Android app, built with
        Cordova, and a web portal, built with Vue.js.
      </p>
    </div>
    <div
      class="m-2 p-2 border-b-2 border-l-2 md:border-t-2 md:border-b-0 border-black border-opacity-75 col-start-1 col-span-2 md:col-start-1 md:col-span-2 md:row-span-1 lg:col-start-3 lg:col-span-6"
    >
      <h2 class="text-lg">Highly Configurable</h2>
      <p class="text-base">
        As part of the process of white-labelling the app I designed a system to
        configure each app instance according to the client requirements and
        data schema. This increased the ability of our client to customise the
        look and feel, as well as the data insights, of each app instance.
      </p>
    </div>
    <div
      class="m-2 col-span-2 row-span-1 col-start-1 sm:col-start-1 md:col-start-3 md:col-span-2 lg:col-start-9 lg:col-span-4 border-r-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/feel-good.jpg"
        alt="Pulse Visual app"
      />
    </div>
    <div
      class="m-2 p-2 border-b-2 border-r-2 border-black border-opacity-75 col-start-1 col-span-2 md:col-start-1 md:col-span-4 lg:col-start-3 lg:col-span-8"
    >
      <h2 class="text-lg">Deployment and Distribution</h2>
      <p class="text-base">
        I wrote build scripts that allowed us to abstract platform-specific
        config, such as bundle ID, build number and display name into separate
        files, rather than maintaining distinct git branches to hold config for
        each app version. This streamlined the build and release process for the
        apps, saving time and effort for myself and colleagues.
      </p>
    </div>
  </div>
</template>

<script>
import LinkInternal from '@/components/LinkInternal';
import LinkExternal from '@/components/LinkExternal';
export default {
  name: 'CurrentWork',
  data() {
    return {};
  },
  components: {
    LinkInternal,
    LinkExternal,
  },
};
</script>

<style lang="postcss">
.home-nav-link {
  top: 16px;
}
</style>
