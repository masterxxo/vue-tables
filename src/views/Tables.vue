<template>
  <div class="about">
    <h1>This is an about page</h1>
    <app-table></app-table>
  </div>
</template>

<script>
import { Table } from '@components';

export default {
  name: 'Tables',
  components: {
    'app-table': Table,
  },
};
</script>
