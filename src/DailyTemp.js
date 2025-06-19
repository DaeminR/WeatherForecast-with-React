export default function DailyTemp(props) {
    console.log(props)
    const { temperature_2m_max, temperature_2m_min, time, rain_sum, showers_sum, weather_code } = props.data.daily;
    console.log(temperature_2m_max)
    return(
        <div>
            <h1>
                Min Temperature: {temperature_2m_min}
            </h1>
            <h1>
                Max Temperature: {temperature_2m_max}
            </h1>
        </div>
    )

}