import { useEffect, useRef, useState } from "react"
import Header from "./components/Header"
import WeatherInfo from "./components/WeatherInfo"
import ForecastList from "./components/ForecastList"
import Modal from "./components/Modal"
import { ClipLoader } from "react-spinners"

function App() {

  const input = useRef()
  const dialog = useRef()
  const [address, setAddress] = useState('Zdzieszowice')
  const [showLoader, setshowLoader] = useState(true)
  console.log(address)
  const [weatherData, setWeatherData] = useState({
    city: '',
    countryCode: null,
    temp: null,
    humidity: null,
    windSpeed: null,
    feelsLike: null,
    pressure: null,
    main: '',
    forecastData: []
  })
  useEffect(() => {
    search()
    setTimeout(() => {
      setshowLoader(false)
    }, 1000)

  }, []
  )

  const API_KEY = '452e79bfc1e406582ecd0f681f600cc8'

  const search = async () => {
    const city = input.current.value || address
    console.log(city)
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      const response = await fetch(url)
      const data = await response.json()
      const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      const responseForecast = await fetch(urlForecast)
      const forecastData = await responseForecast.json()
      const filteredData = forecastData.list.filter((weather, i) => i % 8 === 0 && i !== 0)
      console.log(data)
      console.log(filteredData)
      setWeatherData((prevData) => {
        return {
          ...prevData,
          city,
          countryCode: data.sys.country,
          temp: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          feelsLike: data.main.feels_like,
          pressure: data.main.pressure,
          main: data.weather[0].main,
          forecastData: filteredData
        }
      })
      console.log(data.weather[0].main)
    } catch (error) {
      dialog.current.open()
    }

  }

  return (
    <div className='container mx-auto text-center  w-full'>

      <Header ref={input} onSubmit={search} />
      {showLoader ? <ClipLoader size={150} cssOverride={{
        margin: 'auto',
        marginTop: '20%'
      }} /> :
        <>
          <WeatherInfo weatherData={weatherData} />
          <ForecastList forecastData={weatherData.forecastData} />
        </>
      }
      <Modal ref={dialog}>
        <h2 className='text-blue-800 font-bold text-2xl mb-4'>City not found</h2>
        <h3 className='text-blue-800 font-semibold text-lg mb-4'>Please provide valid input</h3>
      </Modal>
    </div>

  )
}

export default App
