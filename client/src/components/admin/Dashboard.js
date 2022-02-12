import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import hasToken from '../../layouts/auth';
import { login } from '../../redux/actions/auth';
import { Backdrop, CircularProgress,CardMedia,ButtonGroup } from '@mui/material';

const Home = () => {

    const { students } = useSelector(state => state.students)
    const {staffs} = useSelector(state => state.staffs)

    console.log('a:',students);
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-warning text-center">
                                            <i className="ti-user"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                            <p>Students</p>
                                            { students.length }
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-reload"></i> Updated now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-success text-center">
                                            <i className="ti-github"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                            <p>Staff</p>
                                            {staffs.length}
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-calendar"></i> Last day
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-danger text-center">
                                            <i className="ti-pulse"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                            <p>Errors</p>
                                            23
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-timer"></i> In the last hour
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-info text-center">
                                            <i className="ti-twitter-alt"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                            <p>Followers</p>
                                            +45
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-reload"></i> Updated now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Admin Dashboard</h4>
                                <p className="category">24 Hours performance</p>
                            </div>
                            <div className="content">
                                <div id="chartHours" className="ct-chart"></div>
                                <div className="footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Click
                                        <i className="fa fa-circle text-warning"></i> Click Second Time
                                    </div>
                                    
                                    <div className="stats">
                                        <i className="ti-reload"></i> Updated 3 minutes ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Email Statistics</h4>
                                <p className="category">Last Campaign Performance</p>
                            </div>
                            <div className="content">
                                <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

                                <div className="footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                                   
                                    <div className="stats">
                                        <i className="ti-timer"></i> Campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card ">
                            <div className="header">
                                <h4 className="title">2015 Sales</h4>
                                <p className="category">All products including Taxes</p>
                            </div>
                            <div className="content">
                                <div id="chartActivity" className="ct-chart"></div>

                                <div className="footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info"></i> Tesla Model S
                                        <i className="fa fa-circle text-warning"></i> BMW 5 Series
                                    </div>
                                    
                                    <div className="stats">
                                        <i className="ti-check"></i> Data information certified
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    
}


export default Home;
