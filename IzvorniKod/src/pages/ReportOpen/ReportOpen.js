import './ReportOpen.css';
import Info from "../../components/Info/Info";
import AnonHeader from "../../components/AnonHeader/AnonHeader";
import ReportComponent from "../../components/Report/ReportComponent";
import AidActions from "../../components/AidActions/AidActions";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaFire, FaWater, FaBolt, FaMountain, FaHome } from "react-icons/fa";


const ReportOpen = () => {

    
    const [showInfo, setShowInfo] = useState(false);
   // const [reports, setReports] = useState([]); 
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); 
    const navigate = useNavigate();

//dummy data samo za prikaz

    const [reports, setReports] = useState([  
        {id: 1, date : "26 Oct 2024 10:35", organisationName: "THE RED CROSS", aidInfo: "informacije o sklonistima"},
        {id: 2, date : "27 Oct 2024 11:00", organisationName: "ORGANISATION2", aidInfo: "informacije o HRANI"},
        {id: 3, date : "28 Oct 2024 15:58", organisationName: "ORGANISATION3", aidInfo: "informacije o VODI"}
    ])

    const [aids, setAids] = useState([  
        {id: 1, date : "26 Oct 2024 10:35", organisationName: "THE RED CROSS", aidInfo: "informacije o sklonistima"},
        {id: 2, date : "27 Oct 2024 11:00", organisationName: "ORGANISATION2", aidInfo: "informacije o HRANI"},
        {id: 3, date : "28 Oct 2024 15:58", organisationName: "ORGANISATION3", aidInfo: "informacije o VODI"}
    ])
    
    useEffect(() => {
        
        const fetchReports = async () => {
            try {
                const response = await axios.get("http://localhost:8081/reports"); 
                setReports(response.data); 
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching reports:", error);
                setError("Failed to load reports"); 
                setLoading(false); 
            }
        };
        fetchReports(); 
    }, []); 


    

    const handleAnonymousReport = () => {
        navigate('/report'); 
    };

    const navigateToMap = () => {
        navigate('/map'); 
    };

    const handleInformation = () => {
        setShowInfo(!showInfo); 
    };

    const goBack = () => {
        navigate(-1); // Go back to the previous page
      };
    
    return ( 
            <div className="ReportOpen">
                <div className='header'>
                    <AnonHeader /> 
                </div>

            
                <div className="PageBodyHome">
                        

                        <div className="MiddleSectionHome">
                            <div className="BackReportOpen">
                                <button className="back-report-button" onClick={goBack}>
                                    <FaArrowLeft /> Back to newsfeed
                                </button>
                            </div>
                            <div className="Report">

                                <div className="ReportDateName">
                                    <text className="aid-date">12.12.1212.</text>
                                    <text className="username">Marko Markic</text>
                                </div>

                                <h2>aaaaaaaa REPORT -  deadly AREA</h2>
                                <text>description</text>
                                <div classname="ReportImages">
                                    <img classname="report-image" src="/images/Pozar1.webp" alt="pozar1" />
                                    <img classname="report-image" src="/images/pozar2.jpg" alt="pozar2" />
                                    <img classname="report-image" src="/images/pozar2.jpg" alt="pozar2" />
                                </div>


                            </div>
                        
                           
                        </div>
                        
                       

                </div>
                
                
            </div>




       
        
     );
}
 
export default ReportOpen;