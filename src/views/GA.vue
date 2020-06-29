<template>
  <div
    class="btab container mx-auto grid lg:grid-cols-12 grid-cols-2 md:grid-cols-4 p-2 xl:p-4"
  >
    <div
      class="m-2 lg:col-span-4 md:col-span-2 col-span-2 border-b-2 border-r-2 border-black border-opacity-75 p-2"
    >
      <h1 class="text-3xl">General Assembly</h1>
      <h2 class="text-xl">Web Development Immersive</h2>
      <h2 class="text-lg italic">Mar-Jun 2017</h2>
    </div>
    <div class="home-nav-link sticky m-2 col-start-1">
      <link-internal
        class="p-2 border-t-2 border-l-2 border-black border-opacity-75 bg-white-75"
        :routeName="'Home'"
        >Home</link-internal
      >
    </div>
    <div
      class="m-2 col-span-1 row-span-2 col-start-2 row-start-2 md:col-start-3 md:row-start-2 md:col-span-2 md:row-span-2 lg:col-start-9 lg:col-span-4 border-r-2 border-b-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/pod-me.jpg"
        alt="Podcast matching app"
      />
    </div>
    <div
      class="m-2 p-2 border-b-2 border-l-2 border-black border-opacity-75 col-start-1 col-span-1 row-start-3 sm:col-start-1 md:col-start-1 md:col-span-2 lg:col-start-4 lg:col-span-5"
    >
      <p class="text-base">
        I began my career in web development by taking the Web Development
        Immersive programme at
        <link-external :linkUrl="'https://generalassemb.ly/'"
          >General Assembly</link-external
        >.
      </p>
      <p class="text-base">
        This was an intensive 12 week web development course with a focus on
        JavaScript and Ruby on Rails. There, I obtained a grounding in the
        fundamentals of front and back-end web development.
      </p>
    </div>
    <div
      class="m-2 p-2 border-t-2 border-r-2 border-black border-opacity-75 col-start-1 col-span-2 row-start-4 sm:col-start-1 md:col-start-2 md:col-span-3 lg:col-start-4 lg:col-span-6"
    >
      <p class="text-base">
        The course was divided into four three-week chunks, each culminating in
        a project. During this period I gained experience across the stack, and
        built APIs using Node.js and Ruby on Rails.
      </p>
      <p class="text-base">
        Two of my projects were completed alongside other students; I learned to
        pair program through blockers, and supported other team members when
        they were struggling.
      </p>
    </div>
    <div
      class="m-2 col-span-1 row-span-1 col-start-1 md:col-start-1 row-start-5 md:col-span-2 lg:col-start-2 lg:col-span-4 border-l-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/flappy-sausage.png"
        alt="JavaScript game screenshot"
      />
    </div>
    <div
      class="m-2 p-2 border-b-2 border-r-2 border-black border-opacity-75 col-span-1 col-start-2 row-start-5 md:col-start-3 md:col-span-2 lg:col-start-6 lg:col-span-4"
    >
      <p class="text-base">
        For my first project I built
        <link-external :linkUrl="'https://flappy-sausage.herokuapp.com'"
          >a game</link-external
        >
        similar to the popular Flappy Bird.
      </p>
      <p class="text-base">- Built with JavaScript, jQuery, HTML and CSS.</p>
    </div>
    <div
      class="m-2 p-2 border-t-2 border-r-2 border-black border-opacity-75 col-span-2 col-start-1 row-start-6 md:col-start-2 md:col-span-3 lg:col-start-4 lg:col-span-6"
    >
      <p class="text-base">
        The second project was my first full-stack web app.
        <link-external :linkUrl="'https://pod-me.herokuapp.com/'"
          >PodMe</link-external
        >
        allows a user to find podcast episodes that match the duration of a
        given journey by making calls to the Google Maps and iTunes APIs and
        algorithmically sorting the returned episodes.
      </p>
      <p class="text-base">
        - Built with Express.js, Node.js, jQuery, MongoDB, bcrypt, slick.js and
        Materialize.
      </p>
    </div>
    <div
      class="m-2 p-2 border-b-2 border-l-2 border-black border-opacity-75 col-span-2 col-start-1 row-start-7 sm:col-span-1 md:col-start-1 md:col-span-2 lg:col-start-4 lg:col-span-5"
    >
      <p class="text-base">
        Project three was a MEAN-stack application.
        <link-external :linkUrl="'https://feelgood-hkeating.herokuapp.com/'"
          >The site</link-external
        >
        allows users to post jobs or tasks that they need help with, other users
        can then apply to help out with those tasks in exchange for the original
        poster making a donation to charity.
      </p>
      <p class="text-base">
        - Built with MongoDB, Express.js, AngularJS and Node.js, plus AngularJS
        Material, and Tachyons.
      </p>
    </div>
    <div
      class="m-2 col-span-2 row-span-1 col-start-1 sm:col-span-1 sm:col-start-2 sm:row-start-7 md:col-start-3 row-start-8 md:col-span-2 lg:col-start-9 lg:col-span-4 border-r-2 border-t-2 border-black border-opacity-75 p-2"
    >
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/feel-good.jpg"
        alt="JavaScript game screenshot"
      />
    </div>
    <div
      class="m-2 p-2 border-b-2 border-r-2 border-black border-opacity-75 col-span-2 col-start-1 row-start-9 md:col-start-1 md:col-span-4 lg:col-start-4 lg:col-span-6"
    >
      <p class="text-base">
        <link-external :linkUrl="'https://fck-it-shp-it.herokuapp.com/'"
          >My final project</link-external
        >
        was a collaboration with two other WDI students. We built a
        project-management tool specifically for developers.
      </p>
      <p class="text-base">
        It allows the user to clearly visualise how long they have left to hit
        their next deadline, milestone or sprint target while closely tracking
        project activity so you can see who has been doing what on your project.
      </p>
      <p class="text-base">
        - Built with a Ruby on Rails back-end and AngularJS front-end. We also
        used Angular-gridster, Angular Dragdrop and Angular-avatar.
      </p>
    </div>
  </div>
</template>

<script>
import LinkInternal from '@/components/LinkInternal';
import LinkExternal from '@/components/LinkExternal';
export default {
  name: 'GA',
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
