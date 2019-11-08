<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section class="row">
      <div class="text-h6">Add Poll</div>
      <q-space />
      <q-btn flat icon="close" v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-input autofocus v-model="pollToAdd.creator" class="q-ma-sm" outlined label="Creator" />
      <q-input
        ref="question"
        :rules="[val => !!val || 'Field is required']"
        v-model="pollToAdd.question"
        class="q-ma-sm"
        outlined label="Question"/>
      <q-input
        v-model="pollToAdd.forceOptions[0].value"
        ref="option1"
        :rules="[val => !!val || 'Field is required']"
        class="q-ma-sm"
        outlined
        label="Option 1" />
      <q-input
        v-model="pollToAdd.forceOptions[1].value"
        ref="option2"
        :rules="[val => !!val || 'Field is required']"
        class="q-ma-sm"
        outlined
        label="Option 2" />
      <q-input
        v-for="option in pollToAdd.optionalOptions"
        :key="option.id"
        v-model="option.value"
        class="q-ma-sm"
        outlined
        :label="'Option '.concat(option.id)" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn class="q-mt-md q-mb-md" @click="addOption" flat label="Add Option" color="primary" />
      <q-btn
        @click="add"
        class="q-ma-md bg-primary text-white"
        label="Add Poll" color="primary" />
    </q-card-actions>
      </q-card>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        pollToAdd: {
          id: 0,
          creator: '',
          question: '',
          forceOptions: [
            {
              id: 1,
              value: '',
              counter: 0
            },
            {
              id: 2,
              value: '',
              counter: 0
            }
          ],
          optionalOptions: []
        }
      }
    },
    methods: {
      ...mapActions('polls', ['addPoll']),
      add() {
        if (this.isPollValid()) {
          let options = [];
          this.pollToAdd.forceOptions.forEach((forceOption) => {
            options.push(forceOption)
          });
          if (this.pollToAdd.optionalOptions.length > 0) {
            this.pollToAdd.optionalOptions.forEach((optionalOption) => {
              if (optionalOption.value !== '') {
                options.push(optionalOption)
              }
            })
          }
          const poll = {
            id: this.pollToAdd.id,
            creator: this.pollToAdd.creator,
            question: this.pollToAdd.question,
            options: options
          };
          this.addPoll(poll);
        }
      },
      addOption() {
        this.pollToAdd.optionalOptions.push({
          id: 2 + this.pollToAdd.optionalOptions.length + 1,
          value: '',
          counter: 0
        })
      },
      isPollValid() {
        this.$refs.option1.validate();
        this.$refs.option2.validate();
        this.$refs.question.validate();
        return !(this.$refs.option1.hasError || this.$refs.option2.hasError || this.$refs.question.hasError);
      }
    }
  }
</script>

<style scoped>

</style>
