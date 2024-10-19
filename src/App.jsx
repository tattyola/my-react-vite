import './App.css'
import MyChart from "./components/MyChart.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";

function App() {

    return (
        <>
            <Header/>
            <div className='app-container'>
                <List/>
                <MyChart/>
            </div>
        </>
    )
}

export default App
