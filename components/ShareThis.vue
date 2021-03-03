<template>
  <div>
    <div class="container mx-auto">
      <p class="font-bold text-sm text-center">
        Suka dengan konten ini? Yuk bagikan
      </p>
      <client-only>
        <div class="medsos flex justify-center relative">
          <div class="flex justify-center space-x-10 px-20 py-5 bg-white z-10">
            <ShareNetwork
              v-for="network in resNetworks"
              :network="network.network"
              :key="network.network"
              :style="{ backgroundColor: network.color }"
              :url="sharing.url"
              :title="sharing.title"
              :description="sharing.description"
              :quote="sharing.quote"
              :hashtags="sharing.hashtags"
              :twitterUser="sharing.twitterUser"
              class="flex justify-center items-center w-10 h-10 rounded-full cursor-pointer"
              :aria-label="`Bagikan ke ${network.name}`"
            >
              <!-- <i :class="network.icon" class="w-10 h-10 rounded-full"></i> -->
              <font-awesome-icon
                class="lg:text-lg text-white"
                :icon="network.icon"
              />
            </ShareNetwork>
          </div>

          <hr
            class="absolute border-white-dust w-full z-0"
            style="height: 0.063rem; top: 50%;"
          />
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sharing: {
      type: Object
    },
    sosmed: {
      type: Array
    }
  },
  mounted() {
    this.resNetworks = this.networks.filter(res => {
      return this.sosmed.includes(res.network);
    });
  },
  data() {
    return {
      resNetworks: [],
      networks: [
        {
          network: "email",
          name: "Email",
          icon: ["fa", "envelope"],
          color: "#333333"
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: ["fab", "facebook-f"],
          color: "#4867aa"
        },
        {
          network: "line",
          name: "Line",
          icon: ["fab", "line"],
          color: "#00c300"
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: ["fab", "linkedin"],
          color: "#007bb5"
        },
        {
          network: "quora",
          name: "Quora",
          icon: ["fab", "quora"],
          color: "#a82400"
        },
        {
          network: "sms",
          name: "SMS",
          icon: ["fa", "comment-dots"],
          color: "#333333"
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: ["fab", "telegram-plane"],
          color: "#0088cc"
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: ["fab", "twitter"],
          color: "#50abf1"
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: ["fab", "whatsapp"],
          color: "#25d366"
        }
        // { network: 'fakeblock', name: 'Custom Network', icon: 'fab fah fa-lg fa-vuejs', color: '#41b883' }
      ]
    };
  }
};
</script>
