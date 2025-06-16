import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import SingleCard from "./components/SingleCard";


function App() {
	//useEffect-> it is a hook which is mostly used to perfrom side effects
	//sideeffects -> Any task or operation which take amount of time that is known as
	// side effects. for example -> fetching data from the api.

	// let arr = [];// it is stateless
	const [arr, setArr] = useState([])
	const [loader, setLoader] = useState(false)
	let [count, setCount] = useState(1)
	const [singleData, setSingleData] = useState();
	// async function fetchData(url) {
	// 	try {
	// 		const response = await fetch(url);
	// 		console.log("response", response);

	// 		const finalAns = await response.json()
	// 		console.log("json-data", finalAns[0])
	// 		console.log("Data coming from an api call", finalAns)
	// 		setArr(finalAns)
	// 		// for (let i = 0; i < 10; i++) {
	// 		// 	arr.push(finalAns[i])
	// 		// }
	// 		// arr.push(finalAns)

	// 	}
	// 	catch (error) {
	// 		console.log("Error occured", error);
	// 	}

	// }
	// fetchData("https://jsonplaceholder.typicode.com/users");
	// useEffect(()=>{
	// 	fetchData("https://jsonplaceholder.typicode.com/users");
	// })




	// useEffect(() => {
	// 	fetchData("https://jsonplaceholder.typicode.com/users");
	// }, [])
	console.log("array me data", arr);


	function countHandler() {
		setCount(count++)
	}


	async function fetchSinglData(url) {
		try {
			setLoader(true)
			const response = await fetch(url);
			console.log("response", response);

			const finalAns = await response.json()
			console.log("json-data", finalAns[0])
			console.log("Single Data coming", finalAns)
			setSingleData(finalAns)
			setLoader(false)

		}
		catch (error) {
			console.log("Error occured", error);
		}
		setLoader(false)

	}



	//3rd case 
	useEffect(() => {
		fetchSinglData(`https://jsonplaceholder.typicode.com/users/${count}`)
	}, [count])
	return (
		<div className="App">
			{/* <UserCard arr={arr} /> */}
			<button onClick={countHandler}>change count Value{count} </button>
			<button onClick={() => {
				setCount(1)
			}}>Go to Home </button>
			<SingleCard data={singleData} loader={loader} />
		</div>
	);
}

export default App;
