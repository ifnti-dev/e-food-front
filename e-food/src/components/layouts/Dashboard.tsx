function Dashboad() {
    return (
        <>
                <div id="mytask-layout" className="theme-indigo">

                    {/* <!-- sidebar --> */}
                    <div className="sidebar px-4 py-4 py-md-5 me-0">
                        <div className="d-flex flex-column h-100">
                            <a href="index.html" className="mb-0 brand-icon">
                                <span className="logo-icon">
                                    <svg width="35" height="35" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                    </svg>
                                </span>
                                <span className="logo-text">My-Task</span>
                            </a>
                            {/* <!-- Menu: main ul --> */}

                            <ul className="menu-list flex-grow-1 mt-3">
                                <li className="collapsed">
                                    <a className="m-link active" data-bs-toggle="collapse" data-bs-target="#dashboard-Components" href="#">
                                        <i className="icofont-home fs-5"></i> <span>Dashboard</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse show" id="dashboard-Components">
                                        <li><a className="ms-link active" href="index.html"> <span>Hr Dashboard</span></a></li>
                                        <li><a className="ms-link" href="project-dashboard.html"> <span>Project Dashboard</span></a></li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#project-Components" href="#">
                                        <i className="icofont-briefcase"></i><span>Projects</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="project-Components">
                                        <li><a className="ms-link" href="projects.html"><span>Projects</span></a></li>
                                        <li><a className="ms-link" href="task.html"><span>Tasks</span></a></li>
                                        <li><a className="ms-link" href="timesheet.html"><span>Timesheet</span></a></li>
                                        <li><a className="ms-link" href="team-leader.html"><span>Leaders</span></a></li>
                                    </ul>
                                </li>

                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#tikit-Components" href="#"><i
                                        className="icofont-ticket"></i> <span>Tickets</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="tikit-Components">
                                        <li><a className="ms-link" href="tickets.html"> <span>Tickets View</span></a></li>
                                        <li><a className="ms-link" href="ticket-detail.html"> <span>Ticket Detail</span></a></li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#client-Components" href="#"><i
                                        className="icofont-user-male"></i> <span>Our Clients</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="client-Components">
                                        <li><a className="ms-link" href="ourclients.html"> <span>Clients</span></a></li>
                                        <li><a className="ms-link" href="profile.html"> <span>Client Profile</span></a></li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#emp-Components" href="#"><i
                                        className="icofont-users-alt-5"></i> <span>Employees</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="emp-Components">
                                        <li><a className="ms-link" href="members.html"> <span>Members</span></a></li>
                                        <li><a className="ms-link" href="employee-profile.html"> <span>Members Profile</span></a></li>
                                        <li><a className="ms-link" href="holidays.html"> <span>Holidays</span></a></li>
                                        <li><a className="ms-link" href="attendance-employees.html"> <span>Attendance Employees</span></a></li>
                                        <li><a className="ms-link" href="attendance.html"> <span>Attendance</span></a></li>
                                        <li><a className="ms-link" href="leave-request.html"> <span>Leave Request</span></a></li>
                                        <li><a className="ms-link" href="department.html"> <span>Department</span></a></li>
                                    </ul>
                                </li>

                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Componentsone" href="#"><i
                                        className="icofont-ui-calculator"></i> <span>Accounts</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="menu-Componentsone">
                                        <li><a className="ms-link" href="invoices.html"><span>Invoices</span> </a></li>
                                        <li><a className="ms-link" href="payments.html"><span>Payments</span> </a></li>
                                        <li><a className="ms-link" href="expenses.html"><span>Expenses</span> </a></li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#payroll-Components" href="#"><i
                                        className="icofont-users-alt-5"></i> <span>Payroll</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="payroll-Components">
                                        <li><a className="ms-link" href="salaryslip.html"><span>Employee Salary</span> </a></li>

                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#app-Components" href="#">
                                        <i className="icofont-contrast"></i> <span>App</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="app-Components">
                                        <li><a className="ms-link" href="calendar.html"> <span>Calander</span></a></li>
                                        <li><a className="ms-link" href="chat.html"><span>Chat App</span></a></li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a className="m-link" data-bs-toggle="collapse" data-bs-target="#extra-Components" href="#">
                                        <i className="icofont-code-alt"></i> <span>Other Pages</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                                    {/* <!-- Menu: Sub menu ul --> */}
                                    <ul className="sub-menu collapse" id="extra-Components">
                                        <li><a className="ms-link" href="charts.html"> <span>Apex Charts</span></a></li>
                                        <li><a className="ms-link" href="forms.html"><span>Forms Example</span></a></li>
                                        <li><a className="ms-link" href="table.html"> <span>Table Example</span></a></li>
                                        <li><a className="ms-link" href="review.html"><span>Reviews Page</span></a></li>
                                        <li><a className="ms-link" href="icon.html"><span>Icons</span></a></li>
                                        <li><a className="ms-link" href="contact.html"><span>Contact</span></a></li>
                                        <li><a className="ms-link" href="widgets.html"><span>Widgets</span></a></li>
                                    </ul>
                                </li>
                                <li><a className="m-link" href="ui-elements/ui-alerts.html"><i className="icofont-paint"></i> <span>UI Components</span></a></li>
                            </ul>

                            {/* <!-- Theme: Switch Theme --> */}
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex align-items-center justify-content-center">
                                    <div className="form-check form-switch theme-switch">
                                        <input className="form-check-input" type="checkbox" id="theme-switch"/>
                                            <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center justify-content-center">
                                    <div className="form-check form-switch theme-rtl">
                                        <input className="form-check-input" type="checkbox" id="theme-rtl"/>
                                            <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
                                    </div>
                                </li>
                            </ul>

                            {/* <!-- Menu: menu collepce btn --> */}
                            <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                                <span className="ms-2"><i className="icofont-bubble-right"></i></span>
                            </button>
                        </div>
                    </div>

                    {/* <!-- main body area --> */}
                    <div className="main px-lg-4 px-md-4">

                        {/* <!-- Body: Header --> */}
                        <div className="header">
                            <nav className="navbar py-4">
                                <div className="container-xxl">

                                    {/* <!-- header rightbar icon --> */}
                                    <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                                        <div className="d-flex">
                                            <a className="nav-link text-primary collapsed" href="help.html" title="Get Help">
                                                <i className="icofont-info-square fs-5"></i>
                                            </a>
                                            <div className="avatar-list avatar-list-stacked px-3">
                                                <img className="avatar rounded-circle" src="/imgs/xs/avatar2.jpg" alt=""/>
                                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar1.jpg" alt=""/>
                                                        <img className="avatar rounded-circle" src="/imgs/xs/avatar3.jpg" alt=""/>
                                                            <img className="avatar rounded-circle" src="/imgs/xs/avatar4.jpg" alt=""/>
                                                                <img className="avatar rounded-circle" src="/imgs/xs/avatar7.jpg" alt=""/>
                                                                    <img className="avatar rounded-circle" src="/imgs/xs/avatar8.jpg" alt=""/>
                                                                        <span className="avatar rounded-circle text-center pointer" data-bs-toggle="modal" data-bs-target="#addUser"><i className="icofont-ui-add"></i></span>
                                                                    </div>
                                                                </div>
                                                                <div className="dropdown notifications zindex-popover">
                                                                    <a className="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                                                        <i className="icofont-alarm fs-5"></i>
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
                                                                                                <img className="avatar rounded-circle" src="/imgs/xs/avatar1.jpg" alt=""/>
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
                                                                                                <img className="avatar rounded-circle" src="/imgs/xs/avatar3.jpg" alt=""/>
                                                                                                    <div className="flex-fill ms-2">
                                                                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                                                                        <span className="">Quality Assurance Task Completed</span>
                                                                                                    </div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="py-2 mb-1 border-bottom">
                                                                                            <a href="javascript:void(0);" className="d-flex">
                                                                                                <img className="avatar rounded-circle" src="/imgs/xs/avatar5.jpg" alt=""/>
                                                                                                    <div className="flex-fill ms-2">
                                                                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                                                                        <span className="">Add New Project for App Developemnt</span>
                                                                                                    </div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="py-2 mb-1 border-bottom">
                                                                                            <a href="javascript:void(0);" className="d-flex">
                                                                                                <img className="avatar rounded-circle" src="/imgs/xs/avatar6.jpg" alt=""/>
                                                                                                    <div className="flex-fill ms-2">
                                                                                                        <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                                                                        <span className="">Add Timesheet For Rhinestone project</span>
                                                                                                    </div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="py-2">
                                                                                            <a href="javascript:void(0);" className="d-flex">
                                                                                                <img className="avatar rounded-circle" src="/imgs/xs/avatar7.jpg" alt=""/>
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
                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/profile_av.png" alt="profile"/>
                                                                    </a>
                                                                    <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                                                        <div className="card border-0 w280">
                                                                            <div className="card-body pb-0">
                                                                                <div className="d-flex py-1">
                                                                                    <img className="avatar rounded-circle" src="/imgs/profile_av.png" alt="profile"/>
                                                                                        <div className="flex-fill ms-3">
                                                                                            <p className="mb-0"><span className="font-weight-bold">Dylan Hunter</span></p>
                                                                                            <small className="">Dylan.hunter@gmail.com</small>
                                                                                        </div>
                                                                                </div>

                                                                                <div><hr className="dropdown-divider border-dark"/></div>
                                                                            </div>
                                                                            <div className="list-group m-2 ">
                                                                                <a href="task.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-tasks fs-5 me-3"></i>My Task</a>
                                                                                <a href="members.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-ui-user-group fs-6 me-3"></i>members</a>
                                                                                <a href="ui-elements/auth-signin.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-6 me-3"></i>Signout</a>
                                                                                <div><hr className="dropdown-divider border-dark"/></div>
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
                                                                    <input type="search" className="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping"/>
                                                                        <button type="button" className="input-group-text add-member-top" id="addon-wrappingone" data-bs-toggle="modal" data-bs-target="#addUser"><i className="fa fa-plus"></i></button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </nav>
                                            </div>

                                            {/* <!-- Body: Body --> */}
                                            <div className="body d-flex py-3">
                                                <div className="container-xxl">
                                                    <div className="row clearfix g-3">
                                                        <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
                                                            <div className="row g-3">
                                                                <div className="col-md-12">
                                                                    <div className="card">
                                                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                                            <h6 className="mb-0 fw-bold ">Employees Info</h6>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <div className="ac-line-transparent" id="apex-emplyoeeAnalytics"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="card">
                                                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                                            <h6 className="mb-0 fw-bold ">Employees Availability</h6>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <div className="row g-2 row-deck">
                                                                                <div className="col-md-6 col-sm-6">
                                                                                    <div className="card">
                                                                                        <div className="card-body ">
                                                                                            <i className="icofont-checked fs-3"></i>
                                                                                            <h6 className="mt-3 mb-0 fw-bold small-14">Attendance</h6>
                                                                                            <span className="text-muted">400</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6 col-sm-6">
                                                                                    <div className="card">
                                                                                        <div className="card-body ">
                                                                                            <i className="icofont-stopwatch fs-3"></i>
                                                                                            <h6 className="mt-3 mb-0 fw-bold small-14">Late Coming</h6>
                                                                                            <span className="text-muted">17</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6 col-sm-6">
                                                                                    <div className="card">
                                                                                        <div className="card-body ">
                                                                                            <i className="icofont-ban fs-3"></i>
                                                                                            <h6 className="mt-3 mb-0 fw-bold small-14">Absent</h6>
                                                                                            <span className="text-muted">06</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6 col-sm-6">
                                                                                    <div className="card">
                                                                                        <div className="card-body ">
                                                                                            <i className="icofont-beach-bed fs-3"></i>
                                                                                            <h6 className="mt-3 mb-0 fw-bold small-14">Leave Apply</h6>
                                                                                            <span className="text-muted">14</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="card">
                                                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                                            <h6 className="mb-0 fw-bold ">Total Employees</h6>
                                                                            <h4 className="mb-0 fw-bold ">423</h4>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <div className="mt-3" id="apex-MainCategories"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="card">
                                                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                                            <h6 className="mb-0 fw-bold ">Top Hiring Sources</h6>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <div id="hiringsources"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-lg-12 col-md-12">
                                                            <div className="row g-3 row-deck">
                                                                <div className="col-md-6 col-lg-6 col-xl-12">
                                                                    <div className="card bg-primary">
                                                                        <div className="card-body row">
                                                                            <div className="col">
                                                                                <span className="avatar lg bg-white rounded-circle text-center d-flex align-items-center justify-content-center"><i className="icofont-file-text fs-5"></i></span>
                                                                                <h1 className="mt-3 mb-0 fw-bold text-white">1546</h1>
                                                                                <span className="text-white">Applications</span>
                                                                            </div>
                                                                            <div className="col">
                                                                                <img className="img-fluid" src="/imgs/interview.svg" alt="interview"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-lg-6 col-xl-12  flex-column">
                                                                    <div className="card mb-3">
                                                                        <div className="card-body">
                                                                            <div className="d-flex align-items-center flex-fill">
                                                                                <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i className="icofont-users-alt-2 fs-5"></i></span>
                                                                                <div className="d-flex flex-column ps-3  flex-fill">
                                                                                    <h6 className="fw-bold mb-0 fs-4">246</h6>
                                                                                    <span className="text-muted">Interviews</span>
                                                                                </div>
                                                                                <i className="icofont-chart-bar-graph fs-3 text-muted"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <div className="d-flex align-items-center flex-fill">
                                                                                <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i className="icofont-holding-hands fs-5"></i></span>
                                                                                <div className="d-flex flex-column ps-3 flex-fill">
                                                                                    <h6 className="fw-bold mb-0 fs-4">101</h6>
                                                                                    <span className="text-muted">Hired</span>
                                                                                </div>
                                                                                <i className="icofont-chart-line fs-3 text-muted"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-lg-12 col-xl-12">
                                                                    <div className="card">
                                                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                                            <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <div className="flex-grow-1">
                                                                                <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                                                    <div className="d-flex align-items-center flex-fill">
                                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/lg/avatar2.jpg" alt="profile"/>
                                                                                            <div className="d-flex flex-column ps-3">
                                                                                                <h6 className="fw-bold mb-0 small-14">Natalie Gibson</h6>
                                                                                                <span className="text-muted">Ui/UX Designer</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="time-block text-truncate">
                                                                                        <i className="icofont-clock-time"></i> 1.30 - 1:30
                                                                                    </div>
                                                                                </div>
                                                                                <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                                                    <div className="d-flex align-items-center flex-fill">
                                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/lg/avatar9.jpg" alt="profile"/>
                                                                                            <div className="d-flex flex-column ps-3">
                                                                                                <h6 className="fw-bold mb-0 small-14">Peter	Piperg</h6>
                                                                                                <span className="text-muted">Web Design</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="time-block text-truncate">
                                                                                        <i className="icofont-clock-time"></i> 9.00 - 1:30
                                                                                    </div>
                                                                                </div>
                                                                                <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                                                    <div className="d-flex align-items-center flex-fill">
                                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/lg/avatar12.jpg" alt="profile"/>
                                                                                            <div className="d-flex flex-column ps-3">
                                                                                                <h6 className="fw-bold mb-0 small-14">Robert Young</h6>
                                                                                                <span className="text-muted">PHP Developer</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="time-block text-truncate">
                                                                                        <i className="icofont-clock-time"></i> 1.30 - 2:30
                                                                                    </div>
                                                                                </div>
                                                                                <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                                                    <div className="d-flex align-items-center flex-fill">
                                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/lg/avatar8.jpg" alt="profile"/>
                                                                                            <div className="d-flex flex-column ps-3">
                                                                                                <h6 className="fw-bold mb-0 small-14">Victoria Vbell</h6>
                                                                                                <span className="text-muted">IOS Developer</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="time-block text-truncate">
                                                                                        <i className="icofont-clock-time"></i> 2.00 - 3:30
                                                                                    </div>
                                                                                </div>
                                                                                <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                                                    <div className="d-flex align-items-center flex-fill">
                                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/lg/avatar7.jpg" alt="profile"/>
                                                                                            <div className="d-flex flex-column ps-3">
                                                                                                <h6 className="fw-bold mb-0 small-14">Mary Butler</h6>
                                                                                                <span className="text-muted">Writer</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="time-block text-truncate">
                                                                                        <i className="icofont-clock-time"></i> 4.00 - 4:30
                                                                                    </div>
                                                                                </div>
                                                                                <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                                                    <div className="d-flex align-items-center flex-fill">
                                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/lg/avatar3.jpg" alt="profile"/>
                                                                                            <div className="d-flex flex-column ps-3">
                                                                                                <h6 className="fw-bold mb-0 small-14">Youn Bel</h6>
                                                                                                <span className="text-muted">Unity 3d</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="time-block text-truncate">
                                                                                        <i className="icofont-clock-time"></i> 7.00 - 8.00
                                                                                    </div>
                                                                                </div>
                                                                                <div className="py-2 d-flex align-items-center  flex-wrap">
                                                                                    <div className="d-flex align-items-center flex-fill">
                                                                                        <img className="avatar lg rounded-circle img-thumbnail" src="/imgs/lg/avatar2.jpg" alt="profile"/>
                                                                                            <div className="d-flex flex-column ps-3">
                                                                                                <h6 className="fw-bold mb-0 small-14">Gibson Butler</h6>
                                                                                                <span className="text-muted">Networking</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="time-block text-truncate">
                                                                                        <i className="icofont-clock-time"></i> 8.00 - 9.00
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="card light-danger-bg">
                                                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                                    <h6 className="mb-0 fw-bold ">Top Perfrormers</h6>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="row g-3 align-items-center">
                                                                        <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-2">
                                                                            <p>You have 140 <span className="fw-bold">influencers </span> in your company.</p>
                                                                            <div className="d-flex  justify-content-between text-center">
                                                                                <div className="">
                                                                                    <h3 className="fw-bold">350</h3>
                                                                                    <span className="small">New Task</span>
                                                                                </div>
                                                                                <div className="">
                                                                                    <h3 className="fw-bold">130</h3>
                                                                                    <span className="small">Task Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-10">
                                                                            <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-6 row-deck top-perfomer">
                                                                                <div className="col">
                                                                                    <div className="card shadow">
                                                                                        <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                                            <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="/imgs/lg/avatar2.jpg" alt="profile"/>
                                                                                                <h6 className="fw-bold my-2 small-14">Luke Short</h6>
                                                                                                <span className="text-muted mb-2">@Short</span>
                                                                                                <h4 className="fw-bold text-primary fs-3">80%</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <div className="card shadow">
                                                                                        <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                                            <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="/imgs/lg/avatar5.jpg" alt="profile"/>
                                                                                                <h6 className="fw-bold my-2 small-14">John Hard</h6>
                                                                                                <span className="text-muted mb-2">@rdacre</span>
                                                                                                <h4 className="fw-bold text-primary fs-3">70%</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <div className="card shadow">
                                                                                        <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                                            <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="/imgs/lg/avatar8.jpg" alt="profile"/>
                                                                                                <h6 className="fw-bold my-2 small-14">Paul Rees</h6>
                                                                                                <span className="text-muted mb-2">@Rees</span>
                                                                                                <h4 className="fw-bold text-primary fs-3">77%</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <div className="card shadow">
                                                                                        <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                                            <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="/imgs/lg/avatar9.jpg" alt="profile"/>
                                                                                                <h6 className="fw-bold my-2 small-14">Rachel Parr</h6>
                                                                                                <span className="text-muted mb-2">@Parr</span>
                                                                                                <h4 className="fw-bold text-primary fs-3">85%</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <div className="card shadow">
                                                                                        <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                                            <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="/imgs/lg/avatar12.jpg" alt="profile"/>
                                                                                                <h6 className="fw-bold my-2 small-14">Eric Reid</h6>
                                                                                                <span className="text-muted mb-2">@Eric</span>
                                                                                                <h4 className="fw-bold text-primary fs-3">95%</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <div className="card shadow">
                                                                                        <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                                            <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="/imgs/lg/avatar3.jpg" alt="profile"/>
                                                                                                <h6 className="fw-bold my-2 small-14">Jan Ince</h6>
                                                                                                <span className="text-muted mb-2">@Ince</span>
                                                                                                <h4 className="fw-bold text-primary fs-3">97%</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Row End --> */}
                                                </div>
                                            </div>

                                            {/* <!-- Modal Members--> */}
                                            <div className="modal fade" id="addUser" tabIndex={-1} aria-labelledby="addUserLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title  fw-bold" id="addUserLabel">Employee Invitation</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="inviteby_email">
                                                                <div className="input-group mb-3">
                                                                    <input type="email" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="exampleInputEmail1"/>
                                                                        <button className="btn btn-dark" type="button" id="button-addon2">Sent</button>
                                                                </div>
                                                            </div>
                                                            <div className="members_list">
                                                                <h6 className="fw-bold ">Employee </h6>
                                                                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                                                    <li className="list-group-item py-3 text-center text-md-start">
                                                                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                                            <div className="no-thumbnail mb-2 mb-md-0">
                                                                                <img className="avatar lg rounded-circle" src="/imgs/xs/avatar2.jpg" alt=""/>
                                                                            </div>
                                                                            <div className="flex-fill ms-3 text-truncate">
                                                                                <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                                                                                <span className="text-muted">rachel.carr@gmail.com</span>
                                                                            </div>
                                                                            <div className="members-action">
                                                                                <span className="members-role ">Admin</span>
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        <i className="icofont-ui-settings  fs-6"></i>
                                                                                    </button>
                                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                                        <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                                                                        <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-group-item py-3 text-center text-md-start">
                                                                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                                            <div className="no-thumbnail mb-2 mb-md-0">
                                                                                <img className="avatar lg rounded-circle" src="/imgs/xs/avatar3.jpg" alt=""/>
                                                                            </div>
                                                                            <div className="flex-fill ms-3 text-truncate">
                                                                                <h6 className="mb-0  fw-bold">Lucas Baker<a href="#" className="link-secondary ms-2">(Resend invitation)</a></h6>
                                                                                <span className="text-muted">lucas.baker@gmail.com</span>
                                                                            </div>
                                                                            <div className="members-action">
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        Members
                                                                                    </button>
                                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                                        <li>
                                                                                            <a className="dropdown-item" href="#">
                                                                                                <i className="icofont-check-circled"></i>

                                                                                                <span>All operations permission</span>
                                                                                            </a>

                                                                                        </li>
                                                                                        <li>
                                                                                            <a className="dropdown-item" href="#">
                                                                                                <i className="fs-6 p-2 me-1"></i>
                                                                                                <span>Only Invite & manage team</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        <i className="icofont-ui-settings  fs-6"></i>
                                                                                    </button>
                                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                                        <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2"></i>Delete Member</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-group-item py-3 text-center text-md-start">
                                                                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                                            <div className="no-thumbnail mb-2 mb-md-0">
                                                                                <img className="avatar lg rounded-circle" src="/imgs/xs/avatar8.jpg" alt=""/>
                                                                            </div>
                                                                            <div className="flex-fill ms-3 text-truncate">
                                                                                <h6 className="mb-0  fw-bold">Una Coleman</h6>
                                                                                <span className="text-muted">una.coleman@gmail.com</span>
                                                                            </div>
                                                                            <div className="members-action">
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        Members
                                                                                    </button>
                                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                                        <li>
                                                                                            <a className="dropdown-item" href="#">
                                                                                                <i className="icofont-check-circled"></i>

                                                                                                <span>All operations permission</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a className="dropdown-item" href="#">
                                                                                                <i className="fs-6 p-2 me-1"></i>
                                                                                                <span>Only Invite & manage team</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="btn-group">
                                                                                    <div className="btn-group">
                                                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="icofont-ui-settings  fs-6"></i>
                                                                                        </button>
                                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                                            <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                                                                            <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                                                                            <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2"></i>Suspend member</a></li>
                                                                                            <li><a className="dropdown-item" href="#"><i className="icofont-not-allowed fs-6 me-2"></i>Delete Member</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                 
                                
                            </>
                            )
}

export default Dashboad;