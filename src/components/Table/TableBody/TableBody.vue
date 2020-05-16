<template>
  <tbody>
    <tr v-for="row in rows" :key="randomIndex(row)">
      <td v-for="col in columns" :key="randomIndex(col.columnOrder)">
        {{col.columnName}}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TableBody',

  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      Type: Number,
      required: true,
    },
  },

  methods: {
    randomIndex(index) {
      return Math.random() * 1000 + index;
    },
  },
};
</script>
