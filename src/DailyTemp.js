import ShowWeather from "./ShowWeather";

export default function DailyTemp(props) {
    if (!props.data || !props.data.daily) {
        return <div>Loading...</div>;
    }
    const { temperature_2m_max, temperature_2m_min, time, rain_sum, showers_sum, weather_code } = props.data.daily;
    const dailyData = time.map((date, index) => ({
        date: time[index],
        maxTemp: temperature_2m_max[index],
        minTemp: temperature_2m_min[index],
        rain: rain_sum[index],
        showers: showers_sum[index],
        weatherCode: weather_code[index]
    }));
    return(
        <div>
            {dailyData.map((day, index) => (
                <ShowWeather key={index} data={day}/>
            ))}
        </div>
    )

}