import './App.css'
import MyChart from "./components/MyChart.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
    const header = 'My Chart Demo';
    const data = [
        {name: "first card"},
        {name: "second card"},
        {name: "third card"},
        {name: "fourth card"},
        {name: "fifth card"},
        {name: "sixth card"},
        {name: "seventh card"},
    ];
    return (
        <>
            <div className='app-container'>
                <Header header={header}/>
                <List/>
                <MyChart/>
                <Carousel data={data}/>
            </div>
        </>
    )
}

export default App
