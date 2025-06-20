import "./ShowWeather.css";

export default function ShowWeather(props) {

    function formatDate(dateStr) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const [year, month, day] = dateStr.split('-');

        const dayNum = parseInt(day);
        const daySuffix = (n) => {
            if (n >= 11 && n <= 13) return 'th';
            switch (n % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${dayNum}${daySuffix(dayNum)} ${months[parseInt(month) - 1]}`;
    }

    
    const WMO_WEATHER_CODES = {
	"0":{
			"description":"Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
	"1":{
			"description":"Mainly Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
	"2":{
			"description":"Partly Cloudy",
			"image":"http://openweathermap.org/img/wn/02d@2x.png"
		},
	"3":{
			"description":"Cloudy",
			"image":"http://openweathermap.org/img/wn/03d@2x.png"
	    },
	"45":{
			"description":"Foggy",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
	},
	"48":{
			"description":"Rime Fog",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
	},
	"51":{
			"description":"Light Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"53":{
			"description":"Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"55":{
			"description":"Heavy Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"56":{
			"description":"Light Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"57":{
			"description":"Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"61":{
			"description":"Light Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
	},
	"63":{
			"description":"Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
	},
	"65":{
			"description":"Heavy Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
	},
	"66":{
			"description":"Light Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
	},
	"67":{
			"description":"Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
	},
	"71":{
			"description":"Light Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
	},
	"73":{
			"description":"Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
	},
	"75":{
			"description":"Heavy Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
	},
	"77":{
			"description":"Snow Grains",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
	},
	"80":{
			"description":"Light Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"81":{
			"description":"Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"82":{
			"description":"Heavy Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
	},
	"85":{
			"description":"Light Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
	},
	"86":{
			"description":"Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
	    },
	"95":{
			"description":"Thunderstorm",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
	},
	"96":{
			"description":"Light Thunderstorms With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
	    },
	"99":{
			"description":"Thunderstorm With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		}
	}

    return (
        <div className ="weather-card">
            <h3>{formatDate(props.data.date)}</h3>
            <div className="weather-icon">
                <img src={WMO_WEATHER_CODES[props.data.weatherCode].image} alt={WMO_WEATHER_CODES[props.data.weatherCode].description} />
                <p>{WMO_WEATHER_CODES[props.data.weatherCode].description}</p>
            </div>
            <div className="weather-details">
                <h5>Temperature</h5>
                <div className="temperature-bar">
                </div>
                <div className="temperature-values">
                    <span className="temperature-style">{props.data.minTemp}°C</span>
                    <span className="temperature-style">{props.data.maxTemp}°C</span>
                </div>
                <h5>Precipitation</h5>
                <div className="precipitation-values">
                    <p>Rain: {props.data.rain}mm</p>
                    <p>Showers: {props.data.showers}mm</p>
                </div>
            </div>
        </div>
    )
}