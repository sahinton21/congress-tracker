<template id="outermost-container">
  <header>
    <div>
      <h1>Bills Page</h1>
    </div>
    <!--Sticky these buttons to the top of the page-->
    
  </header>

  <nav>
    <div v-if="prevLink" class="page-button">
      <a href="" class="page-link">Prev</a>
    </div>
    <div v-if="nextLink" class="page-button">
      <a href="" class="page-link">Next</a>
    </div>
  </nav>

  

  <div v-if="bills" id="bills-page">
    <table>
      <thead>
        <tr>
          <th>Bill Number</th>
          <th>Bill Title</th>
          <th>Last Action</th>
          <th>Action Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bill in bills" :key="bill.number" @click="goToBill(bill.type, bill.number, bill.congress)" class="clickable-row"
          href>
          <td>{{ bill.type }} {{ bill.number }}</td>
          <td>{{ bill.title }}</td>
          <td>{{ bill.latestAction.text }}</td>
          <td>{{ bill.latestAction.actionDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h2 >Loading</h2>
  </div>

  

</template>

<script>
import APIClient from '@/components/APIClient.js';
//import { ref, onMounted } from 'vue';

export default {
  data () {
    return {
      waiting: true,
      bills: null,
      nextLink:null,
      prevLink:null
    }
  },
  // setup() {
  //   const bills = ref([]);

  //   // Function to fetch data from the API
  //   const fetchBills = async () => {
  //     this.loading = false;
  //     try {
  //       const response = await APIClient.getBills(); // Query API
  //       const data = await response.json();
  //       bills.value = data.bills; // Update items with the fetched data
  //       console.log(bills.value)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       this.loading = true;
  //     }
  //   };

  //   onMounted(fetchBills); // Fetch data when the component loads

  //   return { 
  //     bills, 
  //     fetchBills

  //   };
  // },
  methods: {
    fetchBills() {
      APIClient.getBills()
      .then(response=> {
        if(!response.ok){
          throw new Error("Could Not Fetch Bills");
        }
        else {
          return response.json();
        }
      })
      .then(response => {
        this.bills = response.bills;
        if(response.pagination.next){
          this.nextLink = response.pagination.next;
        }
        else{
          this.nextLink = null;
        }

        if(response.pagination.prev){
          this.prevLink = response.pagination.prev;
        } 
        else{
          this.prevLink = null;
        }

      })
      .catch(error =>{
        console.error(error);
      });
    },
    goToBill(type, number,congress){
      console.log(`${type} ${number} ${congress}`)
      console.log("WIP");
    }
  },
  mounted() {
    this.fetchBills();
  }
};


</script>
