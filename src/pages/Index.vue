<template>
  <q-page class="row">
    <poll
      @showResult="getResult(poll.question, poll.options)"
      v-for="poll in polls"
      :key="poll.id"
      :id="poll.id"
      :question="poll.question" 
      :creator="poll.creator" 
      :options="poll.options">
    </poll>
    
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{pollToSeeResult.question}}</div>
        </q-card-section>

        <q-card-section v-for="option in pollToSeeResult.options" :key="option.id">
          {{option.value}} - {{option.counter}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
    'poll': require('../components/Poll.vue').default
  },
  data () {
    return {
      alert: false,
      pollToSeeResult: {
        question: '',
        options: []
      }
    }
  },
  computed: {
    ...mapGetters('polls', ['polls'])
  },
  methods: {
    getResult(question, options) {
      this.pollToSeeResult.question = question
      this.pollToSeeResult.options = options
      this.alert = true
    }
  }
}
</script>

<style scoped>

</style>
