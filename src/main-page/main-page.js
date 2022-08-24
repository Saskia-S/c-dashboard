import './main-page.css'
import {useEffect, useState} from "react";
import {getHistCases} from "../data/history-cases-data";
import TinyLineChart from "./line-chart";
import {getHistoryDeaths} from "../data/history-deaths-data";
import {getHospData} from "../data/history-hospitalization-data";
import {getRecovceredData} from "../data/history-recovered-data";
import {getCurrData} from "../data/current-data";
import AgeGroupBarChart from "./bar-chart";
import {getAgeGroupData} from "../data/current-age-data";

export default function MainPage() {
    const [currData, setCurrData] = useState(null);
    const [histCases, setHistCases] = useState(null);
    const [histDeaths, setHistDeaths] = useState(null);
    const [histHospData, setHistHospData] = useState(null);
    const [histRecoveredData, setHistRecoveredData] = useState(null);
    const [ageGroupData, setAgeGroupData] = useState(null);
    let ageGroupDataArray = [];

    useEffect(() => {
        (async () => {
            setCurrData(await getCurrData());
            setHistCases(await getHistCases(7));
            setHistDeaths(await getHistoryDeaths(7));
            setHistHospData(await getHospData(14));
            setHistRecoveredData(await getRecovceredData(7));
            setAgeGroupData(await getAgeGroupData());
        })()
    }, [])

    useEffect(() => {
        if(ageGroupData) {
            ageGroupDataArray.push(ageGroupData["A00-A04"]);
            ageGroupDataArray.push(ageGroupData["A05-A14"]);
            ageGroupDataArray.push(ageGroupData["A15-A34"]);
            ageGroupDataArray.push(ageGroupData["A35-A59"]);
            ageGroupDataArray.push(ageGroupData["A60-A79"]);
            ageGroupDataArray.push(ageGroupData["A80+"]);
        }
    }, [ageGroupData])


    return(
        <div className="main-page">
            <div className="container">
                <div className="row heading">
                    <h4> Today </h4>
                </div>
                <div className="row data-row">
                    <div className="col">
                        <h6 className="label">Cases Today</h6>
                        {currData &&
                            <h6 className="number">{currData.data.delta.cases}</h6>
                        }
                    </div>
                    <div className="col">
                        <h6 className="label">Hospitalization /week</h6>
                        {currData &&
                        <h6 className="number">{currData.data.hospitalization.cases7Days}</h6>
                        }
                    </div>
                    <div className="col">
                        <h6 className="label">Deaths Today</h6>
                        {currData &&
                        <h6 className="number">{currData.data.delta.deaths}</h6>
                        }
                    </div>
                </div>

                <div className="row heading">
                    <h4> Overview </h4>
                </div>

                <div className="row data-row">
                    <div className="col">
                        <h6 className="label">Cases</h6>
                        <TinyLineChart chartData={histCases} chartDataKey={'cases'}/>
                    </div>
                    <div className="col">
                        <h6 className="label">Deaths</h6>
                        <TinyLineChart chartData={histDeaths} chartDataKey={'deaths'}/>
                    </div>
                    <div className="col">
                        <h6 className="label">Hospital. Rate</h6>
                        <TinyLineChart chartData={histHospData} chartDataKey={'cases7Days'}/>
                    </div>
                    <div className="col">
                        <h6 className="label">Recovered</h6>
                        <TinyLineChart chartData={histRecoveredData} chartDataKey={'recovered'}/>
                    </div>
                </div>

                <div className="row heading">
                    <h4> Age Groups </h4>
                </div>

                <div className="row data-row">
                    <div className="col">
                        <h6 className="label">Groups: <br/> 0-4 years <br/> 5-14 years <br/> 15-34 years <br/> 35-59 years <br/> 60-79 years <br/> 80+ years</h6>
                    </div>
                    <div className="col">
                        <h6 className="label">Bar Chart Age Groups</h6>
                        <AgeGroupBarChart chartData={ageGroupDataArray} chartDataKeyM={'casesMale'} chartDataKeyF={'casesFemale'}/>
                    </div>
                </div>

                <div className="row heading">
                    <h4> 7-day Incidence </h4>
                </div>

                <div className="row data-row">
                    <div className="col">
                        <h6 className="label pb-5">districts</h6>
                        <img className="map" src="https://api.corona-zahlen.org/map/districts" ></img>
                    </div>
                    <div className="col">
                        <h6 className="label pb-5">states</h6>
                        <img className="map" src="https://api.corona-zahlen.org/map/states" ></img>
                    </div>
                    <div className="col">
                        <h6 className="label pb-5">Hospitalization</h6>
                        <img className="map" src="https://api.corona-zahlen.org/map/states/hospitalization" ></img>
                    </div>
                        <div className="col pt-5" align="left">
                            <h6 className="label pb-5">Legend</h6>
                            <i className="bi bi-circle-fill" style={{color: "#E2E2E2"}}></i><span style={{color: "white"}}> keine Fälle übermittelt</span> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#25BA94"}}><span style={{color: "white"}}> 0-1</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#76D985"}}><span style={{color: "white"}}> 1-15</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#FFFFA8"}}><span style={{color: "white"}}> 15-25</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#FECA81"}}><span style={{color: "white"}}> 25-35</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#F1894A"}}><span style={{color: "white"}}> 35-50</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#F21620"}}><span style={{color: "white"}}> 50-100</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#A9141A"}}><span style={{color: "white"}}> 100-200</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#B275DD"}}><span style={{color: "white"}}> 200-350</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#5D179B"}}><span style={{color: "white"}}> 350-500</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#17179B"}}><span style={{color: "white"}}> 500-1000</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#68463B"}}><span style={{color: "white"}}> 1000-1500</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#6D6D6D"}}><span style={{color: "white"}}> 1500-2500</span></i> <br/>
                            <i className="bi bi-circle-fill" style={{color: "#020003"}}><span style={{color: "white"}}> 2500+</span></i>
                        </div>
                </div>
            </div>
        </div>
    );
}