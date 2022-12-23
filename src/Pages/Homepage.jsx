import React from "react";
import '../css/Homepage.css';

const Homepage = () => {
    return ( 
        <>
            <div className="home-page">
                <section className="heading">
                    <p>
                        Register for Petrocup 2023
                    </p>
                </section>
                <div className="section1">
                    <div className="general-info">
                        <section className="information">
                            <p className="user-info-text">
                                Name: 
                            </p>
                            <input type="text" />
                        </section>
                        <section className="information">
                            <p className="user-info-text">
                                Email ID: 
                            </p>
                            <input type="text" />
                        </section>
                        <section className="information">
                            <p className="user-info-text">
                                Organization: 
                            </p>
                            <input type="text" />
                        </section>
                        <section className="information">
                            <p className="user-info-text">
                                GSTN Number: 
                            </p>
                            <input type="text" />
                        </section>
                    </div>
                </div>
                <div className="section2">
                    <div className="general-info">
                        <p className="games-text">
                            Games: 
                        </p>
                        <div className="games-list">
                                <div className="list1">
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Basketball</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Cricket</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Football</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Table</label>  
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Tennis</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list1">
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Basketball</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Cricket</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Football</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Table</label>  
                                        </li>
                                        <li>
                                            <input type="checkbox" id="basketball" value="basketball" />
                                            <label htmlFor="basketball">Tennis</label>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Homepage;