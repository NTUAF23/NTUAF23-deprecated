<template lang="html">
  <section>

    <span class="card-row">
      <div v-for="s in sponser">
        <div v-if="s.Class[0]=='class_A'">
          <div class="card" style="width:180px;">
            <img :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename" style="width:100%">
            <div class="container">
              <h1><b>{{ s.Name }}</b></h1>
              <i>{{ s.Detail }}</i>
            </div>
          </div>
        </div>
      </div>
    </span>

    <span class="card-row">
      <div v-for="s in sponser">
        <div v-if="s.Class[0]=='class_B'">
          <div class="card">
            <img :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename" style="width:100%">
            <div class="container">
              <h5>{{ s.Name }}</h5>
              <!-- <i>{{ s.Detail }}</i> -->
            </div>
          </div>
        </div>
      </div>
    </span>

  </section>
</template>

<script>
// import { sponser } from '../service/airtable.js'
import _ from 'lodash'
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyC0ndMttA3rW78D'}).base('appQBrZJS5RUN4WPl');

export default {
  data(){
    return{
      sponser: [],
    }
  },


  created(){
    this.syncAirtable()
  },


  methods:{

    syncAirtable(){
      console.log('||||| syncAirtable()...')
      let item = []
      base('贊助商').select({
        maxRecords: 100,
        view: 'Website view',
      }).eachPage(function page(records, fetchNextPage){
        item = item.concat(_.map(records, (record) => _.set(record.fields, 'id', record.id)));
        fetchNextPage();
      }, (err) => {
        if(err){
          console.error(err);
          return;
        }
        this.sponser = item
        console.log('||||| Retrieved: ',this.sponser);
      });
    },

  }
}
</script>

<style lang="css" scoped>
section{
  border: 1px pink dashed;
}

/* sponser卡片(w3上的範例) */
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  width: 150px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
}
.container {
  padding: 2px 16px;
}
.card-row{
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
img{
  max-width: 100px;
}

</style>
