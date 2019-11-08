<template>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{question}}</div>
      <small>by {{creator}}</small>
    </q-card-section>

    <q-card-actions vertical align="left">
      <q-btn
        @click="vote(id, option.id)"
        v-for="(option, index) in options"
        :key="index"
        flat
        no-caps
      >
      {{option.value}}
      </q-btn>
    </q-card-actions>
    <div class="text-center absolute-bottom">
      <q-btn
        @click="$emit('showResult')"
        no-caps
        class="q-mb-sm"
        outline color="primary"
      >
      Show Results
      </q-btn>

    </div>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['id', 'question', 'creator', 'options'],
  data() {
    return {

    }
  },
  methods: {
    ...mapActions('polls', ['updatePoll']),
    vote(pollId, optionId) {
      const payload = {
        pollId: pollId,
        optionId: optionId
      };
      this.updatePoll(payload)
    }
  }
}
</script>

<style scoped>
  .q-card {
  height: 300px;
  width: 300px;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
