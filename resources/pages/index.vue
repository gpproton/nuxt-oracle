<template>
    <v-layout class="bode" row fluid>
    <v-flex xs4>
      <form>
        <v-text-field
          v-model="transc"
          :counter="7"
          label="Transaction number"
          required>
        </v-text-field>
        <v-checkbox
          v-model="checkbox"
          label="Confirm ?"
          required>
        </v-checkbox>
    
        <v-btn color="success" @click="submit">Search</v-btn>
        <v-btn color="error" @click="clear">Clear</v-btn>
      </form>
      </v-flex>

      <v-flex xs8 style="padding: 0px 0px 0px 25px;">
        <v-list two-line subheader>
          <v-subheader style="font-weight: 900;">ONLINE LAST ENTRY PULLS</v-subheader>
          <v-list-tile v-if="raylists" >
            <v-list-tile-content v-for="(raylist, index) in raylists" :key="index">
              <v-list-tile-title>TRUCK NO: {{ raylist.FT_NEW_VEHICLE_NUMBER }}</v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
              <v-list-tile-sub-title>TEAM: {{ raylist.FT_OWNER_NAME }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>CREATED DATE: {{ raylist.FT_CR_DT }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>EVENT TYPE: {{ raylist.FT_FLEET_TIME_NAME }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
</template>

<script>
import Swal from 'sweetalert2'
const axios = require('axios');

export default {
data: () => ({
      transc: '',
      checkbox: false,
      raylists: null,
      walert: false,
      dictionary: {
        attributes: {},
        custom: {
          name: {
            required: () => 'Trans no can not be empty',
            max: 'Trans no shouldnot be greater than 7 characters'
            // custom messages
          }
        }
      }
    }),
    mounted() {
      

    },
  methods: {
    submit () {
    if (this.checkbox == true && this.transc.length > 0) {
    this.walert = false;
    // Make a request for a truck tans with a given no
    axios.get('/api/v1/truckinfo/' + this.transc)
    .then((response) =>  {
      this.raylists = response.data.data;
      //console.log(this.raylists);
      Swal.fire({
        title: 'Valid!',
        text: 'transaction code is valid.',
        type: 'success',
        confirmButtonText: 'Ok'
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Enter transaction number and check.',
        type: 'warning',
        confirmButtonText: 'Ok'
      });
    }
      


    },
    clear () {
      this.transc = ''
      this.checkbox = false
    }
  }
}
</script>

<style scoped>
  .bode {
    padding: 75px 0px 0px 75px;
  }
</style>
