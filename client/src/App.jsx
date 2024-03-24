import React, {useEffect} from 'react';
import AppRoutes from "./components/Routes/Routes";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './styles/index.css'

const App = () => {
    return (
        <div className="app">
            <Header/>
            <div className="container">
                <Sidebar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;