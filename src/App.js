import React from "react";
import Info  from "./components/info";
import Form from "./components/form";
import Course_info from "./components/Course_info";

const API_KEY="835ac10d420d652ef34c280a2e97902b";

class App extends React.Component {
    state={
        temp:undefined,
        city:undefined,
        country:undefined,
        sunrise:undefined,
        sunset:undefined,
        error:undefined
    }

gettingCourse_info = async (e) => {
    e.preventDefault();
    const base = e.target.elements.base.value;

    if (base) {
        const api_url = await fetch(`http://data.fixer.io/api/latest?=${API_KEY}&base=${base}&symbols=USD,PLN,UAH,RUB&format=1`);
        const data = await api_url.json();

        /*let sunset = data.sys.sunset;
        let date = new Date();
        date.setTime(sunset);
        let sunset_date = date.getHours() + ":" + date.getMinutes()
         + ":" + date.getSeconds();

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: undefined
        });
    } else {
        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: "Неккоректные данные.."
        });*/
    }
}

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
                                <Form courseMethod={this.gettingCourse_info}/>
                                <Course_info
                                    /*temp={this.state.temp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    pressure={this.state.pressure}
                                    sunset={this.state.sunset}
                                    error={this.state.error}*/
                                />
                            </div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App;
