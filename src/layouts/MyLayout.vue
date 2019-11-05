<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Poll App
        </q-toolbar-title>
        <q-btn 
          @click="addPoll" 
          push color="white" 
          text-color="primary" 
          label="Add Poll" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item exact clickable to="/">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Polls</q-item-label>
          </q-item-section>
        </q-item>
        <q-item exact clickable to="/settings">
          <q-item-section avatar>
            <q-icon name="settings_applications" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-dialog v-model="showAddPoll">
      <add-poll />
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
    'add-poll': require('../components/AddPoll.vue').default
  },
  data () {
    return {
      leftDrawerOpen: false,
      showAddPoll: false
    }
  },
  methods: {
    addPoll() {
      // TODO: Some input validations required
      // TODO: Add poll to the vuex store
      this.showAddPoll = true
      this.optionsCount = 2
    }
  }
}
</script>
