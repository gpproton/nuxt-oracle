<template>
<div style="margin-top: 150px; margin-left: 75px;">
<v-alert
      :value="wialert"
      type="success"
      transition="scale-transition"
    >
      This is a success alert.
    </v-alert>
<v-combobox
v-model="chips"
:items="items"
label="Your favorite hobbies"
chips
clearable
prepend-icon="filter_list"
solo
multiple
>
<template v-slot:selection="data">
    <v-chip
    :selected="data.selected"
    close
    @input="remove(data.item)"
    >
    <span><v-avatar class="blue">{{ data.item.charAt(0) }}</v-avatar></span>
    <strong>{{ data.item }}</strong>&nbsp;
    </v-chip>
</template>
</v-combobox>
<v-btn v-on:click="wialert = !wialert" color="success">Success</v-btn>
</div>
</template>

<script>
export default {
data () {
    return {
    chips: [],
    items: ['Streaming', 'Eating', 'Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
    wialert: false
    }
},

methods: {
    remove (item) {
    this.chips.splice(this.chips.indexOf(item), 1)
    this.chips = [...this.chips]
    },
    logChips(){
        //console.log (this.chips.toString())
        var lop = 0;
        var conct = "";
        this.chips.forEach((e) => {
            lop++;
            if (lop == 1) {
                conct += `'${e}'`;
            } else if (lop == this.chips.length) {
                conct += ` '${e}'`;
            } else {
                conct += ` '${e}',`;
            }
        });
        
    }
}
}
</script>

<style>

</style>
