
// const userTab = document.querySelector("[data-userweather]");
// const searchTab = document.querySelector("[data-searchweather]");
// const userContainer = document.querySelector(".weather-container");

// const grantaccesContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchform]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container")

// // initial tags
// let oldTab = userTab;
// const API_key = "d1845658f92b31c64bd94f06f7188c9c";
// oldTab.classList.add("current-tab");
// getfromSessionStorage();

// function switchTab(newTab){
//     if(newTab!=oldTab){
//         oldTab.classList.remove("current-tab");
//         oldTab = newTab;
//         oldTab.classList.add("current-tab");
//         // kiya searchform wala container invisible if Yes then make it visible
//         if(!searchForm.classList.contains("active")){
//             userInfoContainer.classList.remove("active");
//             grantaccesContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//         // main phle se hi search wale pr tha, ab your weather tab visible krna hoga
//         else{
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             //ab me your weather tab me aya hu, toh weather bhi display krna padega, so let's check local storage first
//             // for coordinate, if we saved them there.
//             getfromSessionStorage();

//         }
//     }
// }

// userTab.addEventListener("click",()=> {
//     switchTab(userTab);
// });
// searchTab.addEventListener("click",()=> {
//     switchTab(searchTab);
// });
// // check if coordinate are aleady present in session storage
// function getfromSessionStorage(){
//     const localCoordinate = sessionStorage.getItem("user-coordinate");
//     if(!localCoordinate){
//         // if local coordinate nhi mile 
//         grantaccesContainer.classList.add("active"); 
//     }
//     // agar local coordinate mil gye to
//     else{
//         const coordinates = JSON.parse(localCoordinate);
//         fetchuserWeatherInfo(coordinates);
//     }
// }

// async function fetchuserWeatherInfo(coordinates){
//     const {lat,lon} = coordinates;
//     // make grantaccesscontiner visible
//     grantaccesContainer.classList.remove("active");

//     // make loader visible
//     loadingScreen.classList.add("active");
//     // API call
//     try{
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//           );
//         const  data = await response.json();

//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         loadingScreen.classList.remove("active");
//         window.alert("Loading error")
//         //hm
//     }
// }
// function renderWeatherInfo(weatherInfo){
//     //firstly we have to fetch the element
//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryIcon]");
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[data-temp]");
//     const windspeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloudiness]");

//     // inser the fetch value
//     cityName.innerText = weatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = weatherInfo?.main?.temp;
//     windspeed.innerText = weatherInfo?.wind?.speed;
//     humidity.innerText = weatherInfo?.main?.humidity;
//     cloudiness.innerText = weatherInfo?.clouds?.all;
// }

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         //home work
//     }
// }
// function showPosition(position){
//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//     }
//     sessionStorage.setItem("user-coordinate",JSON.stringify(userCoordinates));
//     fetchuserWeatherInfo(userCoordinates);
// }
// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click",getLocation);
// const searchInput = document.querySelector("[data-searchInput]");
// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let cityName = searchInput.value;
//     if(cityName === "")
//         return;
//     else
//         fetchSearchWeatherInfo(searchInput.value);
// })
// async function fetchSearchWeatherInfo(city){
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantaccesContainer.classList.remove("active");

//     try{
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//           );
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);

//     }
//     catch(e){
//         window.alert("Wrong answer");
//     }
     

// }
