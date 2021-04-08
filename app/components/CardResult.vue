<template>
  <div>
    <b-overlay :show="show" rounded="sm">
      <div class="card-result shadow mb-3">
        <div class="card-image">
          <img
            src="../assets/img/logo.png"
            class="px-4 py-5"
            :alt="item.name"
          />
        </div>
        <div class="card-info">
          <ul class="mb-3 small pl-3">
            <li
              v-for="feature in item.features"
              :key="feature"
              class="font-weight-bold pl-2"
            >
              {{ feature }}
            </li>
          </ul>
          <ul class="mb-3 small pl-3">
            <li
              v-for="(feature, index) in item.educative_offer.features"
              :key="feature"
              class="pl-2"
            >
              <span v-if="index === 0" class="font-weight-bold">{{
                feature
              }}</span>
              <span v-else>{{ feature }}</span>
            </li>
          </ul>
          <!-- :href="item.educative_offer.url" -->
          <b-button class="button-secondary" pill block :href="item.url"
            >Aplicar para esta oferta</b-button
          >
        </div>
      </div>
    </b-overlay>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    getUser() {
      return this.$store.state.form.user
    },
  },
}
</script>
<style scoped>
.card-result {
  width: 100%;
  position: relative;
  border-radius: 10px;
}
.card-image {
  background: white;
}
.card-info {
  background-color: #5d04ab;
  color: white;
  padding: 1rem;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

ul {
  list-style-type: '→';
}
</style>
