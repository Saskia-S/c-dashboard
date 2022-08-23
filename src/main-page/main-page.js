import './main-page.css'
import {useEffect, useState} from "react";
import {getHistCases} from "../data/history-cases-data";
import TinyLineChart from "./line-chart";
import {getHistoryDeaths} from "../data/history-deaths-data";
import {getHospData} from "../data/history-hospitalization-data";
import {getRecovceredData} from "../data/history-recovered-data";
import {getCurrData} from "../data/current-data";
export default function MainPage() {
    const [currData, setCurrData] = useState(null);
    const [histCases, setHistCases] = useState(null);
    const [histDeaths, setHistDeaths] = useState(null);
    const [histHospData, setHistHospData] = useState(null);
    const [histRecoveredData, setHistRecoveredData] = useState(null);

    useEffect(() => {
        (async () => {
            setCurrData(await getCurrData());
            setHistCases(await getHistCases(7));
            setHistDeaths(await getHistoryDeaths(7));
            setHistHospData(await getHospData(14));
            setHistRecoveredData(await getRecovceredData(7));
        })()
    }, [])

    return(
        <div className="main-page">
            <div className="container">
                <div className="row heading">
                    <h4>-- Today --</h4>
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
                        <h6 className="number">{currData.data.delta.cases}</h6>
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
                    <h4>-- Overview --</h4>
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
                        <h6 className="label">hist. Hospital. Rate</h6>
                        <TinyLineChart chartData={histHospData} chartDataKey={'cases7Days'}/>
                    </div>
                    <div className="col">
                        <h6 className="label">Total recovered</h6>
                        <TinyLineChart chartData={histRecoveredData} chartDataKey={'recovered'}/>
                    </div>
                </div>

                <div className="row heading">
                    <h4>-- Age Groups --</h4>
                </div>

                <div className="row data-row">
                    <div className="col">
                        Bar Chart Vacc.
                    </div>
                    <div className="col">
                        Bar Chart Age Groups
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        Map districts
                    </div>
                    <div className="col">
                        Map states
                    </div>
                    <div className="col">
                        Map states hospital.
                    </div>
                </div>
            </div>
        </div>
    );
}