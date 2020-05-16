<template>
  <div>
    <p>You can add new row or column and you can switch column places</p>
    <div>
      <app-button @click="addRow()">Add row</app-button>
      <app-button @click="addColumn()">Add column</app-button>
    </div>
    <div>
      <app-button @click="removeRow()">Remove row</app-button>
      <app-button @click="removeColumn()">Remove column</app-button>
    </div>
    <table>
      <tab-head :columns="columns" @switchColumns="changePosition"></tab-head>
      <tab-body :rows="rows" :columns="columns"></tab-body>
    </table>
  </div>
</template>

<script>
import { Button } from '@components';
import TableHead from './TableHead/TableHead.vue';
import TableBody from './TableBody/TableBody.vue';

export default {
  name: 'Table',

  data() {
    return {
      rows: 3,
      columns: [
        {
          columnName: 'A',
          columnOrder: 1,
        },
        {
          columnName: 'B',
          columnOrder: 2,
        },
        {
          columnName: 'C',
          columnOrder: 3,
        },
      ],
      lastLetter: 'C',
    };
  },

  methods: {
    addRow() {
      this.rows += 1;
    },

    addColumn() {
      this.columns.push({
        columnName: this.getName(),
        columnOrder: this.columns[this.columns.length - 1].columnOrder + 1,
      });
    },

    removeRow() {
      if (this.rows > 1) {
        this.rows -= 1;
      } else {
        this.rows = 1;
      }
    },

    removeColumn() {
      if (this.columns.length > 1) {
        this.columns.splice(-1, 1);
      }
    },

    getName() {
      const name = this.lastLetter.charCodeAt(0);
      this.lastLetter = String.fromCharCode(name + 1);
      return String.fromCharCode(name + 1);
    },

    changePosition(data) {
      this.columns[data.index].columnOrder = data.newOrder;
      if (data.direction === 'left') {
        this.columns[data.index - 1].columnOrder = data.newOrder + 1;
      } else {
        this.columns[data.index + 1].columnOrder = data.newOrder - 1;
      }
      this.columns = this.columns.sort(this.compare);
    },

    compare(a, b) {
      if (a.columnOrder > b.columnOrder) return 1;
      if (b.columnOrder > a.columnOrder) return -1;

      return 0;
    },
  },

  components: {
    'app-button': Button,
    'tab-head': TableHead,
    'tab-body': TableBody,
  },
};
</script>
