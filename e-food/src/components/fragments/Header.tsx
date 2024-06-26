function Header() {
    return (
        <>
            <div className="header">
                <nav className="navbar py-4 shadow-sm">
                    <div className="container-xxl">

                        {/* <!-- header rightbar icon --> */}
                        <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                            <div className="d-flex">
                                <a className="nav-link text-primary collapsed" href="#" title="Get Help">
                                    {/* <i className="icofont-info-square fs-5"></i> */}
                                </a>
                                <div className="avatar-list avatar-list-stacked px-3">
                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar2.jpg" alt="" />
                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar1.jpg" alt="" />
                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar3.jpg" alt="" />
                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar4.jpg" alt="" />
                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar7.jpg" alt="" />
                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar8.jpg" alt="" />
                                    <span className="avatar rounded-circle text-center pointer" data-bs-toggle="modal" data-bs-target="#addUser"><i className="bi bi-plus-lg"></i></span>
                                </div>
                            </div>
                            <div className="dropdown notifications zindex-popover">
                                <a className="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                    <i className=" bi bi-bell-fill"></i>
                                    <span className="pulse-ring"></span>
                                </a>
                                <div id="NotificationsDiv" className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0">
                                    <div className="card border-0 w380">
                                        <div className="card-header border-0 p-3">
                                            <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                                <span>Notifications</span>
                                                <span className="badge text-white">11</span>
                                            </h5>
                                        </div>
                                        <div className="tab-content card-body">
                                            <div className="tab-pane fade show active">
                                                <ul className="list-unstyled list mb-0">
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <img className="avatar rounded-circle" src="/imgs/xs/avatar1.jpg" alt="" />
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Dylan Hunter</span> <small>2MIN</small></p>
                                                                <span className="">Added  2021-02-19 my-Task ui/ux Design <span className="badge bg-success">Review</span></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <div className="avatar rounded-circle no-thumbnail">DF</div>
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                                <span className="">Task added Get Started with Fast Cad project</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <img className="avatar rounded-circle" src="/imgs/xs/avatar3.jpg" alt="" />
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                                <span className="">Quality Assurance Task Completed</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <img className="avatar rounded-circle" src="/imgs/xs/avatar5.jpg" alt="" />
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                                <span className="">Add New Project for App Developemnt</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <img className="avatar rounded-circle" src="/imgs/xs/avatar6.jpg" alt="" />
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                                <span className="">Add Timesheet For Rhinestone project</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <img className="avatar rounded-circle" src="/imgs/xs/avatar7.jpg" alt="" />
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Zoe Wright</span> <small className="">1DAY</small></p>
                                                                <span className="">Add Calander Event</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="card-footer text-center border-top-0" href="#"> View all notifications</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                                <div className="u-info me-2">
                                    <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">Dylan Hunter</span></p>
                                    <small>Admin Profile</small>
                                </div>
                                <a className="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                                    <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/profile_av.png" alt="profile" />
                                </a>
                                <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                    <div className="card border-0 w280">
                                        <div className="card-body pb-0">
                                            <div className="d-flex py-1">
                                                <img className="avatar rounded-circle" src="/imgs/profile_av.png" alt="profile" />
                                                <div className="flex-fill ms-3">
                                                    <p className="mb-0"><span className="font-weight-bold">Dylan Hunter</span></p>
                                                    <small className="">Dylan.hunter@gmail.com</small>
                                                </div>
                                            </div>

                                            <div><hr className="dropdown-divider border-dark" /></div>
                                        </div>
                                        <div className="list-group m-2 ">
                                            <a href="task.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-tasks fs-5 me-3"></i>My Task</a>
                                            <a href="members.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-ui-user-group fs-6 me-3"></i>members</a>
                                            <a href="ui-elements/auth-signin.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-6 me-3"></i>Signout</a>
                                            <div><hr className="dropdown-divider border-dark" /></div>
                                            <a href="ui-elements/auth-signup.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-contact-add fs-5 me-3"></i>Add personal account</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- menu toggler --> */}
                        <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                            <span className="fa fa-bars"></span>
                        </button>

                        {/* <!-- main menu Search--> */}
                        <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                            <div className="input-group flex-nowrap input-group-lg">
                                <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search"></i></button>
                                <input type="search" className="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping" />
                                <button type="button" className="input-group-text add-member-top" id="addon-wrappingone" data-bs-toggle="modal" data-bs-target="#addUser"><i className="fa fa-plus"></i></button>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;