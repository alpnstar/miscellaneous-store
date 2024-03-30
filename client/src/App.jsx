import React, {useEffect} from 'react';
import AppRoutes from "./components/Routes/Routes";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './styles/index.css'
import {useDispatch, useSelector} from "react-redux";
import UserForm from "./components/User/UserForm";
import {loginUser} from "./store/slices/user/userSlice";

const App = () => {
    const categories = useSelector(state => state.categories.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginUser({onStart: true}));
    }, []);

    return (
        <div className="app">
            <Header/>
            <UserForm/>
            <div className="container">
                <Sidebar categories={categories} amount={7}/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;