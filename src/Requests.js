const Request = {

    getWeather() {
        return fetch("http://localhost:8080/weather").then(res => res.json());
    }

};

export default Request
