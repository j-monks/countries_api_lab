import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      allCountries: []
    },

    computed: {
       totalPopulation: function() {
           return this.calculatePopulation(this.allCountries);
       }
    },

    mounted() {
        this.fetchCountry();
    },

    methods: {
        fetchCountry: function(){
            fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => this.allCountries = data);
        },

        calculatePopulation: function(allCountries) {
            return allCountries.reduce((total, country) => total + country.population, 0);
          }    
    }
  })
})
