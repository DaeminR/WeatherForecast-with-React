import { useEffect, useState } from "react"
import DailyTemp from "./DailyTemp";

export default function WeatherAPI(props) {
    const location = [
        {id : 1, city: "Singapore", lat:1.3521, lng: 103.8198},
        {id : 2, city: "Kuala Lumpur", lat: 3.1319, lng: 101.6841},
        {id : 3, city: "Johor Bahru", lat: 1.4927, lng: 103.7414},
        {id : 4, city: "Bangkok", lat: 13.756, lng: 100.5018},
        {id : 5, city: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297},
        {id : 6, city: "Hanoi", lat: 21.0285, lng: 105.8542},
        {id : 7, city: "Manila", lat: 14.5995, lng: 120.9842},
        {id : 8, city: "Jakarta", lat: -6.2088, lng: 106.8456},
        {id : 9, city: "Tokyo", lat: 35.6762, lng: 139.6503},
        {id : 10, city: "Seoul", lat: 37.5665, lng: 126.9781}
    ];

    const [data, setData] = useState([]);

    function getLocation(){
        for (const item of location) {
            if (item.city === props.city) {
                return { lat: item.lat, lng: item.lng };
            }
        }
    }
    const {lat, lng} = getLocation();   

    useEffect(() => {
        console.log("calling weather API");
        fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lng+"&daily=temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,weather_code&timezone=auto")
        .then((response) => response.json())
        .then(json => setData(json));
    }, [props]);

    if (!data) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="weatherbox">
            <DailyTemp data={data} />
        </div>
    );
}
