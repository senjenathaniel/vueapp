<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" placeholder="Search" v-mode="title">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li class="list-group" :class="{ active: index == currentIndex }" v-for="(tutorial, index) in tutorials"
          :key="index" @click="setActiveTutorial(tutorial, index)">
          {{ tutorial.title }}
        </li>
        <!-- <li :class="{ active: index == currentIndex }" class="list-group-item"
          v-for="(tutorial, index) in tutorials v - bind: key =" index" @click="setActiveTutorial(tutrial, index)">
          {{ tutorial.title }}
        </li> -->
      </ul>
      <button class="m3 btn btn-sm btn-danger" @click="removeAllTutorials">Remove All</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
          <label for=""><strong>Title:</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label for=""><strong>Description:</strong></label> {{ currentTutorial.discription }}
        </div>
        <div>
          <label for=""><strong>Status:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>
        <a href="'/tutorials/' + currentTutorial.id" class="badge badge-warning">Edit</a>
      </div>
      <div v-else>
        <br>
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "@/services/TutorialDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      index: []
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = index;
    },
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data)
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  mounted() {
    this.retrieveTutorials();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>