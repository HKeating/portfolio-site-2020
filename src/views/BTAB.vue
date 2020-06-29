<template>
  <div
    class="btab container mx-auto grid lg:grid-cols-12 grid-cols-2 md:grid-cols-4 p-2 xl:p-4"
  >
    <div
      class="m-2 lg:col-span-4 md:col-span-2 col-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2"
    >
      <h1 class="text-3xl">Britain, Take A Bow!</h1>
      <h2 class="text-xl">A generative digital artwork</h2>
    </div>
    <div class="home-nav-link sticky m-2 col-start-1">
      <link-internal
        class="p-2 border-t-2 border-l-2 border-black border-opacity-75 bg-gray-75"
        :routeName="'Home'"
        >Home</link-internal
      >
    </div>
    <div
      class="m-2 col-span-1 row-span-1 col-start-2 row-start-2 md:col-start-3 md:row-start-2 md:col-span-2 md:row-span-2 lg:col-start-9 lg:col-span-4 border-r-2 border-b-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/btab-3.jpg"
        alt="Britain, take a bow"
      />
    </div>
    <div
      class="m-2 p-2 border-b-2 border-l-2 border-black border-opacity-75 col-start-1 col-span-2 row-start-3 sm:col-start-1 md:col-start-1 md:col-span-2 lg:col-start-4 lg:col-span-5"
    >
      <p class="text-base">
        Britain, Take A Bow is a multi-participatory, generative artwork
        conceived by
        <link-external :linkUrl="'http://www.graemecrowley.com/'"
          >Graeme Crowley</link-external
        >.
      </p>
    </div>
    <div
      class="m-2 p-2 border-t-2 border-r-2 border-black border-opacity-75 col-start-1 col-span-2 row-start-4 sm:col-start-1 md:col-start-2 md:col-span-3 lg:col-start-4 lg:col-span-6"
    >
      <p class="text-base">
        Users are able to upload video clips, which are then combined with a
        database of audio samples and a typographic layer to create a unique
        film for each viewing. Once a generated version of the film has been
        viewed it is deleted, and a new version is created to take its place. We
        presented the project at the
        <link-external
          :linkUrl="'https://designmcr.com/artists/britain-take-a-bow'"
          >Design Manchester festival</link-external
        >
        in November 2018, which led to further collaborations with artists and
        filmmakers, who contributed video clips and additional typographic
        overlays. This project allowed me to explore my interests in digital
        storytelling and the intersection of technology and art.
      </p>
      <link-external :linkUrl="'https://britaintakeabow.org'"
        >Take a look at the site here.</link-external
      >
    </div>
    <div
      class="m-2 col-span-3 row-span-1 col-start-1 md:col-start-1 md:row-start-5 md:col-span-2 lg:col-start-2 lg:col-span-4 border-l-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/btab-4.jpg"
        alt="Britain, take a bow"
      />
    </div>
    <div
      class="m-2 p-2 border-b-2 border-r-2 border-black border-opacity-75 col-start-1 col-span-2 row-start-6 sm:col-start-1 md:col-start-3 md:col-span-2 lg:col-start-4 lg:col-span-5"
    >
      <p class="text-base">
        The frontend of Britain, Take a Bow is built with:
      </p>
      <ul class="">
        <li>
          <link-external :linkUrl="'https://vuejs.org/'">Vue.js</link-external>
        </li>
        <li>
          <link-external :linkUrl="'https://vuex.vuejs.org/'"
            >Vuex</link-external
          >
        </li>
        <li>
          <link-external :linkUrl="'https://www.npmjs.com/package/vue-resource'"
            >Vue-resource</link-external
          >
        </li>
        <li>
          <link-external :linkUrl="'https://uppy.io/'">Uppy</link-external>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LinkInternal from '@/components/LinkInternal';
import LinkExternal from '@/components/LinkExternal';
export default {
  name: 'BTAB',
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
