import React from "react";
import { Link } from 'react-router-dom';
function SideBar() {
    return (
        <>
            <div className="sidebar px-4 py-4 py-md-5 me-0">
                <div className="d-flex flex-column h-100">
                    <a href="#" className="mb-0 brand-icon">
                        <span className="logo-icon">
                            <svg width="35" height="35" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <span className="logo-text">E-Food</span>
                    </a>
                    {/* <!-- Menu: main ul --> */}

                    <ul className="menu-list flex-grow-1 mt-3">
                        <li className="collapsed">
                            <a className="m-link active" data-bs-toggle="collapse" data-bs-target="#dashboard-Components" href="#">
                                <i className="icofont-home fs-5 bi bi-house-fill"></i> <span>Dashboard</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5 bi bi-chevron-down"></span></a>
                            {/* <!-- Menu: Sub menu ul --> */}
                            <ul className="sub-menu collapse show" id="dashboard-Components">
                                <Link to="/"><a className="ms-link active" href=""> <span>Home</span></a></Link>
                                {/* <Link to="/liste"><a className="ms-link active" href=""> <span>Liste Users</span></a></Link> */}
                                <Link to="/"><a className="ms-link active" href=""> <span>Users</span></a></Link>
                               
                            </ul>
                        </li>
                    </ul>

                    {/* <!-- Theme: Switch Theme --> */}
                    <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center justify-content-center">
                            <div className="form-check form-switch theme-switch">
                                <input className="form-check-input" type="checkbox" id="theme-switch" />
                                <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                            </div>
                        </li>
                        <li className="d-flex align-items-center justify-content-center">
                            <div className="form-check form-switch theme-rtl">
                                <input className="form-check-input" type="checkbox" id="theme-rtl" />
                                <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
                            </div>
                        </li>
                    </ul>

                    {/* <!-- Menu: menu collepce btn --> */}
                    <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                        <span className="ms-2"><i className="bi bi-arrows"></i></span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default SideBar;