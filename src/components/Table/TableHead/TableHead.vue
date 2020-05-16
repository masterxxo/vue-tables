<template>
  <thead>
    <tr >
      <th v-for="(column, index) in columns" :key="randomIndex(column.columnOrder)">
        <app-button @click="changePosition(index, 'left')">Left</app-button>
        <app-button @click="changePosition(index, 'right')">Right</app-button>
      </th>
    </tr>
    <tr>
      <th v-for="column in columns" :key="randomIndex(column.columnOrder)">
        Column {{column.columnName}}
      </th>
    </tr>
  </thead>
</template>

<script>
import { Button } from '@components';

export default {
  name: 'TableHead',

  props: {
    columns: {
      type: Array,
      required: true,
    },
  },

  methods: {
    randomIndex(index) {
      return Math.random() * 1000 + index;
    },

    changePosition(index, direction) {
      const column = this.columns[index];
      let newOrder = column.columnOrder;

      if (direction === 'left') {
        if (newOrder > 1) {
          newOrder -= 1;
        }
      } else if (direction === 'right') {
        if (newOrder < this.columns.length - 1) {
          newOrder += 1;
        }
      }

      this.$emit('switchColumns', { index, newOrder, direction });
    },
  },

  components: {
    'app-button': Button,
  },
};
</script>
