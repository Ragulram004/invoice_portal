import React from 'react'
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Navbar from "../components/Navbar.js"
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    plugins,
    options
    // tooltip,
    // options.plugins.tooltip,
} from 'chart.js';
//style
import '../Styles/Invoice.css';
import { DashBoardScreen, DashBoardNavigation, DashBoardSideBar, DashBoardContent, 
    DashBoardMain, DashBoardActionButtons, DashBoardActionTabs, 
     DashBoardActionTabsInput, DashBoardActionTabsLabel,TileDashBoard, DashBoardTabContent,DashBoardThreeDash,
    DashBoardNavigationLogo, DashBoardNavigationTitle, DashBoardNavigationSearch,
    Logoseparation,
    DashBoardNavigationDN,
    DashBoardNavigationDNInput,
    DashBoardNavigationNotification,
    DashBoardNavigationProfile,
    DashBoardSideBarSeperation,
    DashBoardSideBarButton,
    DashBoardSideBarSeperationBottom,
    LogoutBoxButton, LogoutBoxHighlight,DashBoardMultibox,DashBoardBox1,DashBoardBox2,DashBoardBox3,
    DashBoardBox4,DashBoardBox5,DashBoardBox6,DashBoardBox7,DashBoardBox8,DashBoardDate,DashBoardGraph,
    DashBoardGraphContent, TitleDashBoard,FieldDate} from './StyleDashboard';
import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENTID;
const API_URL = process.env.REACT_APP_API_URL;



function Dashboard() {

        const [activeTab, setActiveTab] = useState('Proposed');
        const [activeLink, setActiveLink] = useState('Home');
        const Navigate = useNavigate();
    
        const handleTabChange = (e) => {
            setActiveTab(e);
            const winthdraw = async () => {
                const id = "616b4b3b4b3b4b3b4b3b4b3b";
            const response = await axios.post(`${API_URL}/withdraw`, { id: id });
            console.log(response);
            }
            winthdraw();
        }
    
        const handleLinkChange = (e) => {
            setActiveLink(e);
        }
    
        const onSuccess = () => {
            // alert("Logout made successfully");
            Cookies.remove('token');
            console.log("Logged Out...");
            window.location.href = "/";
        };
    
        const onFailure = () => {
            console.log("Handle failure cases");
        };
    
        // const handleApplyClick = () => {
        //     Navigate('/Apply');
        // };
    
        // const handleKeyDown = (event) => {
        //     if (event.key === 'Enter') {
        //         event.preventDefault();
        //         event.stopPropagation();
        //     }
        // };
    
        const [email, setEmail] = useState('');
        const [showEmail, setShowEmail] = useState(false);
        const [status, setStatus] = useState('ProposedCount');
    
        const toggleEmail = () => {
            setShowEmail(!showEmail);
        }
    
        // useEffect(() => {
        //     const token = Cookies.get('token');
        //     const getEmail = async () => {
        //         const response = await axios.get(`${API_URL}/user`, {
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //             },
        //         });
        //         setEmail(response.data.email);
        //     };
        //     getEmail();
        // }, []);
    
        const [proposedcount, setProposedCount] = useState(0);
        const [withdrawncount, setWithdrawnCount] = useState(0);
        const [approvedcount, setApprovedCount] = useState(0);
        const [rejectedcount, setRejectedCount] = useState(0);
        const [completedcount, setCompletedCount] = useState(0);
    
        const [month, setMonth] = useState("1");
        const [year, setYear] = useState("2023");
        const [date, setDate] = useState("1");
        const [dashboard, setDashboard] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']);
        // const [dashboard_data, setDashboard_data] = useState({});
    
        useEffect(() => {
        const dashboard_data = async() => {{
            // const response = await axios.post(`${API_URL}/dashboard`, { month: month, year: year, status : status})
            // console.log(response);
            const randomNumbers = Array.from({ length: 31 }, () => Math.floor(Math.random() * 30) + 1);
            // setDashboard(response.data.dashboard);
            setDashboard(randomNumbers);
        }}
        dashboard_data();
        }, [status, month, year]);
        
        const data = {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27,
            28, 29, 30, 31
        ],
        datasets: [
            {
            label: 'Count',
            data: dashboard,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
        };
    
        const options = {
        scales: {
            x: {
            title: {
                display: true,
                text: 'Date',
                font: {
                size: 12,
                },
            },
            },
            y: {
            title: {
                display: true,
                text: 'Count',
                font: {
                size: 12,
                },
            },
            beginAtZero: true,
            },
        },
        plugins: {
            legend: {
            display: true,
            position: 'right',
            labels: {
                font: {
                size: 12,
                },
            },
            },
            tooltip: {
            enabled: true,
            callbacks: {
                label: function (context) {
                return 'Count' + ': ' + context.parsed.y;
                },
            },
            },
        },
        };
    
        ChartJS.register(
            // Legend,
            // plugins.tooltip,
            // options.plugins.tooltip,
            // tooltip,
            LineElement,
            CategoryScale,
            LinearScale,
            PointElement,
        );
    
        const handlestatuschange = (e) => {
            console.log(e);
            // setStatus(e);
        }
  return (
    <DashBoardScreen>
        <Navbar />
            <DashBoardContent >
                <TitleDashBoard className='title-dashboard'>Student Dashboard</TitleDashBoard>
                <DashBoardMain>
                    <div className="Multi-box">
                        <DashBoardBox1 className="grid-box" onClick={handlestatuschange} style={{cursor: "pointer"}}> <p>Proposed</p><span>  {proposedcount}</span></DashBoardBox1>
                        <DashBoardBox2 className="grid-box"> <p>Withdrawn</p> <span>{withdrawncount}</span> </DashBoardBox2>
                        <DashBoardBox3 className="grid-box"> <p>Approved</p> <span> {approvedcount}</span></DashBoardBox3>
                        <DashBoardBox4 className="grid-box"> <p>Rejected</p> <span> {rejectedcount}</span></DashBoardBox4>
                        <DashBoardBox5 className="grid-box"> <p>Completed</p> <span> {completedcount}</span></DashBoardBox5>
                        {/* <DashBoardBox6 className="grid-box"></DashBoardBox6>
                        <DashBoardBox7 className="grid-box"></DashBoardBox7>
                        <DashBoardBox8 className="grid-box"></DashBoardBox8> */}
                    </div>
                    
                    <TitleDashBoard>Graph:</TitleDashBoard>
                    <DashBoardGraphContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                            'DatePicker',
                            ]}
                        >
                            <DemoItem label="Pick Date">
                                <MobileDatePicker className='dashboard-date'/>
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    </DashBoardGraphContent>
                    <DashBoardGraph>
                        <Line
                            data={data}
                            style = {{ height : "100%", width : "100%", margin : "20px"}}
                            // height={400}
                            // width={600}
                            options={options}
                        />
                    </DashBoardGraph>
                </DashBoardMain>
            </DashBoardContent>
    </DashBoardScreen>
  )
}

export default Dashboard;