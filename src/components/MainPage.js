import React, { useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import './MainPage.test'


const MainPage = (props) => {
    const [count, setCount] = useState(0)
    const { searchField, onSearchChange, robots, isPending, onRequestRobots } = props;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    useEffect(() =>  {
        onRequestRobots()
    }, [onRequestRobots])


    return isPending?  (<h1>Loading...</h1>) :
        (
            <div className='tc'>
                <Header />
                <button onClick={() => setCount(count + 1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    
}

export default MainPage;