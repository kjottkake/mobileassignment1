let countryData = [
    {
      "Country": "China  ",
      "Total doses given": 2044625000,
      "People fully vaccinated": 889439000,
      "Percent fully vaccinated": 63.4
    },
    {
      "Country": "India  ",
      "Total doses given": 684515513,
      "People fully vaccinated": 159196152,
      "Percent fully vaccinated": 11.7
      
    },
    {
      "Country": "United States ",
      "Total doses given": 374488924,
      "People fully vaccinated": 175968266,
      "Percent fully vaccinated": 53.4
    },
    {
      "Country": "Brazil ",
      "Total doses given": 200714744,
      "People fully vaccinated": 66548816,
      "Percent fully vaccinated": 31.5
    },
    {
      "Country": "Japan ",
      "Total doses given": 133058203,
      "People fully vaccinated": 59593329,
      "Percent fully vaccinated": 47.3
    },
    {
      "Country": "Indonesia ",
      "Total doses given": 105005826,
      "People fully vaccinated": 38223153,
      "Percent fully vaccinated": 14.3
    },
    {
      "Country": "Germany ",
      "Total doses given": 102453033,
      "People fully vaccinated": 50762444,
      "Percent fully vaccinated": 61
    },
    {
      "Country": "Turkey ",
      "Total doses given": 97113297,
      "People fully vaccinated": 38288329,
      "Percent fully vaccinated": 46
    },
    {
      "Country": "United Kingdom ",
      "Total doses given": 91623530,
      "People fully vaccinated": 43378193,
      "Percent fully vaccinated": 65.3
    },
    {
      "Country": "France ",
      "Total doses given": 88660059,
      "People fully vaccinated": 40912442,
      "Percent fully vaccinated": 61
    }
   ]

//task 1b. calculate the total number of fully vaccinated people for these countries
function displayFullyVaccinated(){
  let i;
  let total = 0;  //MUST INITALIZE AS 0  
  for (i = 0 ; i < countryData.length; i++){
      total  += countryData[i]["People fully vaccinated"]; //this is the format for displaying json elements with spaces in their names
  }
  console.log("Total Number of Vaccinated across all countries: " + total);
};

//task 1c. display the total number of doses given for all the listed countries
function displayTotalDoses(){
  let i;
  let total = 0;  //MUST INITALIZE AS 0
  for (i = 0 ; i < countryData.length; i++){
      total  += countryData[i]["Total doses given"]; //this is the format for displaying json elements with spaces in their names
  }
  console.log("Total Number of Doses across all countries: " + total);
};


//task 1d. output the country name with the highest and lowest percentage of population fully vaccinated.

//selection sort
function selectionSort(){
  let t0 = performance.now() //testing speed
  var minIdx, temp, 
      len = countryData.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(countryData[j]["Percent fully vaccinated"]< countryData[minIdx]["Percent fully vaccinated"]){
          minIdx = j;
       }
    }
    temp = countryData[i]["Percent fully vaccinated"];
    countryData[i]["Percent fully vaccinated"] = countryData[minIdx]["Percent fully vaccinated"];
    countryData[minIdx]["Percent fully vaccinated"] = temp;
  }
  let t1 = performance.now() //testing speed
  console.log("Call to selectionSort took " + (t1 - t0) + " milliseconds.") //output speed test
  console.log("Lowest Country " + countryData[0].Country + "with a " + countryData[0]["Percent fully vaccinated"] + "% vaccinated rated")
  console.log("Highest Country " + countryData[9].Country + "with a " + countryData[9]["Percent fully vaccinated"] + "% vaccinated rated")
  return countryData;
}

//task 1e. Based on the figures, estimate the total population of all ten countries.

//total doses
//people fully vaccinated
//% of population fully vaccinated
//x??? total population 
//x = ()

function totalPopulation(){
  // (peoplefullyvaxed * 100) / percentage vaxed
  let totalPop; 
  totalPop = ((countryData[0]["People fully vaccinated"] * 100) / countryData[0]["Percent fully vaccinated"] );
  console.log("Total population of " + countryData[0].Country + ": " + totalPop);
}