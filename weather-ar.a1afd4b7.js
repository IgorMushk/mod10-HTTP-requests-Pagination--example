var search=document.querySelector(".js-search"),list=document.querySelector(".js-list");function onSearch(e){e.preventDefault();var t=e.currentTarget.elements,n=t.query,a=t.days;getWeather(n.value,a.value).then((function(e){return list.innerHTML=createMarkup(e.forecast.forecastday)})).catch((function(e){return console.log(e)}))}function getWeather(e,t){var n=new URLSearchParams({key:"ce2cb9b2a3da414bb5b172546231704",q:e,days:t,lang:"uk"});return fetch("".concat("https://api.weatherapi.com/v1","/forecast.json?").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}function createMarkup(e){return e.map((function(e){var t=e.date,n=e.day,a=n.avgtemp_c,r=n.condition,c=r.text,o=r.icon;return'<li>\n    <img src="'.concat(o,'" alt="').concat(c,'">\n    <p>').concat(c,"</p>\n    <h2>").concat(t,"</h2>\n    <h3>").concat(a,"</h3>\n</li>")})).join("")}search.addEventListener("submit",onSearch);
//# sourceMappingURL=weather-ar.a1afd4b7.js.map
