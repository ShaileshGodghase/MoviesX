import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Css/App.css'
import '../Css/Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             menuState: false,
             sticky: ""
        };
        this.menuClickHandler= this.menuClickHandler.bind(this);
        this.menuCloseHandler = this.menuCloseHandler.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
    listenToScroll(){
        window.scrollY > 0 ? this.setState({sticky: "sticky"}) : this.setState({sticky:""});
    }
    menuClickHandler(){
        this.setState({
            menuState: true
        })
    }
    menuCloseHandler(){
        this.setState({
            menuState: false
        })
    }
    render() {
        const {menuState,sticky} = this.state;
        return (
            <>
                <nav className={menuState ? `Navbar show ${sticky}`:`Navbar ${sticky}`}>
                    <div className="content">
                        <div className="logo">
                            <Link to="/" onClick={this.menuCloseHandler}><h2 className="heading">MoviesX</h2></Link>
                        </div>
                        <ul className="menu-list">
                            <div className="icon cancel-btn" onClick={this.menuCloseHandler}>
                                <i className="fas fa-times"></i>
                            </div>
                            <li><Link onClick={this.menuCloseHandler} to="/upcomingmovies">UpComing Movies</Link></li>
                            <li><Link onClick={this.menuCloseHandler} to="/find">Find Movies</Link></li>
                            <li><Link onClick={this.menuCloseHandler} to="/latestmovies">Latest Movies</Link></li>
                            <li><Link onClick={this.menuCloseHandler} to="/contact">Contact</Link></li>
                        </ul>
                        <div className={menuState ? "icon menu-btn hide":"icon menu-btn"} onClick={this.menuClickHandler}>
                            <i className="fas fa-bars"></i>
                        </div>  
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar