//grab the required stuff / input
const coding = document.querySelector(".coding");
const motivation = document.querySelector(".motivation");
const fitness = document.querySelector(".fitness");
const recomendationOne = document.querySelector(".recomendation--one");
const recomendationTwo = document.querySelector(".recomendation--two");

//processing
function showCoding() {
  recomendationOne.textContent = "CodeWithHarry";
  recomendationOne.href =
    "https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww";
  recomendationTwo.textContent = "tanay pratap";
  recomendationTwo.href = "https://www.youtube.com/c/TanayPratap/featured";
}
function showMotivation() {
  recomendationOne.textContent = "beerBiceps";
  recomendationOne.href =
    "https://www.youtube.com/channel/UCPxMZIFE856tbTfdkdjzTSQ";
  recomendationTwo.textContent = "aman dhattarwal";
  recomendationTwo.href =
    "https://www.youtube.com/channel/UCmXZxX_qexEZxhb5_vQKPCw";
}
function showFitness() {
  recomendationOne.textContent = "saket ghokhale";
  recomendationOne.href =
    "https://www.youtube.com/channel/UCfgrg0SXgNkZ7rTbnZCp6tg";
  recomendationTwo.textContent = "Fit Tuber";
  recomendationTwo.href =
    "https://www.youtube.com/channel/UCYC6Vcczj8v-Y5OgpEJTFBw";
}

//add event listeners / output
coding.addEventListener("click", showCoding);
motivation.addEventListener("click", showMotivation);
fitness.addEventListener("click", showFitness);
