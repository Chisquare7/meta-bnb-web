import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Placepage from './pages/Placepage';
import metatoken__rating from './assets/metatoken__rating.png'
import metatoken__one from './assets/metatoken__one.png'
import metatoken__two from './assets/metatoken__two.png'
import metatoken__three from './assets/metatoken__three.png'
import metatoken__four from './assets/metatoken__four.png'
import metatoken__five from './assets/metatoken__five.png'
import metatoken__six from './assets/metatoken__six.png'
import metatoken__seven from './assets/metatoken__seven.png'
import metatoken__eight from './assets/metatoken__eight.png'
import metatoken__nine from './assets/metatoken__nine.png'
import metatoken__ten from './assets/metatoken__ten.png'
import metatoken__eleven from './assets/metatoken__eleven.png'
import metatoken__twelve from './assets/metatoken__twelve.png'
import metatoken__thirteen from './assets/metatoken__thirteen.png'
import metatoken__fourteen from './assets/metatoken__fourteen.png'
import metatoken__fifteen from './assets/metatoken__fifteen.png'
import metatoken__sixteen from './assets/metatoken__sixteen.png'


function App() {


  const data = [
		{
			placeIcon: metatoken__one,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__two,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__three,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__four,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__five,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__six,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__seven,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__eight,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
  ];
  
  const items = [
		{
			placeIcon: metatoken__one,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__two,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__three,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__four,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__five,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__six,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__seven,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__eight,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__nine,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__ten,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__eleven,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__twelve,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__thirteen,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__fourteen,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__fifteen,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
		{
			placeIcon: metatoken__sixteen,
			placeName: "Desert King",
			placeAmount: "1MBT per night",
			placeDistance: "2345km away",
			placePeriod: "available for 2weeks stay",
			placeRating: metatoken__rating,
		},
	];

  return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Homepage data={data} />} />
					<Route path="/placepage" element={<Placepage items={items} />} />
					{/* <Route path='/placeToStay' element={ <placeToStay items={items} /> } /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
