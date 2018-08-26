const API_KEY = '696f632001ca006b2aabec75ce0b54c0';

export class API {
  static getWeather(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  }

  // static Todo() {
  //   return fetch("https://vue-todo-list-exam.firebaseio.com/data.json", {
  //     method: "PUT",
  //     body: [],
  //     mode: 'cors',
  //   });
  // }
}

