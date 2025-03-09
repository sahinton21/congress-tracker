<template>
  <div>
    <h1>About Page</h1>
    <p>This is the bills page.</p>
  </div>
  <table>
    <thead>
      <tr>
        <th>Bill Number</th>
        <th>Bill Title</th>
      </tr>
    </thead>
      <tbody>
      <tr v-for="bill in bills" :key="bill.number" @click="goToBill(bill.type, bill.number, bill.congress)" class="clickable-row">
        <td>{{ bill.type }} {{ bill.number }}</td>
        <td>{{ bill.title }}</td>
      </tr>
    </tbody>

  </table>
</template>

<script>
import APIClient from '@/components/APIClient.js';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const bills = ref([]);

    // Function to fetch data from the API
    const fetchBills = async () => {
      try {
        const response = await APIClient.getBills(); // Query API
        const data = await response.json();
        bills.value = data.bills; // Update items with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(fetchBills); // Fetch data when the component loads

    return { 
      bills, 
      fetchBills

    };
  },
  methods: {
    goToBill(type, number,congress){
      console.log(`${type} ${number} ${congress}`)
      console.log("WIP");
    }
  }
};


</script>
