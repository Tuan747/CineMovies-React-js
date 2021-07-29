import React, { Suspense } from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import News from "./components/Main/News/News"
import Promotion from "./components/Main/Promotion/Promotion"
import DetailMovies from "./components/Main/Movies/Detail/DetailMovie"
import Movies from "./components/Main/Movies/Movies";
import Ticket from "./components/Main/ticket/Ticket";
import Page404 from "./components/404page/404page"
import Schedule from "./components/Main/Schedule/Schedule";
import Loading from "./components/Main/loading/loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoUser from "./components/Main/User/InfoUser/InfoUser";
import Search from "./components/Main/Search/Search";

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Loading />
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Router>
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="/phim" />
                        <Route path="/phim" component={Movies} />
                        <Route exact path="/tintuc" component={News} />
                        <Route exact path="/khuyenmai" component={Promotion} />
                        <Route exact path="/detailphim/:slug" component={DetailMovies} />
                        <Route exact path="/byticket/:slug" component={Ticket} />
                        <Route exact path="/lich" component={Schedule} />
                        <Route exact path="/Info_user" component={InfoUser} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="*" component={Page404} />
                    </Switch>
                    <Footer />
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
