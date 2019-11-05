<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <div class="text-h6">Add Poll</div>
    </q-card-section>

    <q-card-section>
      <q-input class="q-ma-sm" outlined label="Creator" />
      <q-input class="q-ma-sm" outlined label="Question" />
      <q-input v-for="cnt in optionsCount" :key="cnt" class="q-ma-sm" outlined :label="'Option '.concat(cnt)" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn class="q-mt-md q-mb-md" @click="optionsCount++" flat label="Add Option" color="primary" />
      <q-btn class="q-ma-md bg-primary text-white" label="Add Poll" color="primary" v-close-popup />
    </q-card-actions>
      </q-card>
</template>

<script>
export default {
  data() {
    return {
      optionsCount: 2,
      pollToAdd: {
        // TODO: think about the poll id
        creator: '',
        question: '',
        options: []
      }
    }
  },
  methods: {
    addPoll() {
      // TODO: Add some input validation checkers
      // TODO: Add Poll the the vuex store
    }
  }
}
</script>

<style scoped>

</style>