import { useState, useEffect } from "react";
import StaticMap from "./StaticMap";
import ElevationChart from "./ElevationChart";
import { parseTCX } from "../utils/parseTCX";
import Card from "./Cards";
import Weather from "./Weather";
import Images from "./Images";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/AdamsGlacier.tcx");
      const tcxContent = await response.text();
      const parsedData = parseTCX(tcxContent);
      setData(parsedData);
    };

    loadData();
  }, []);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <Header />
      <Card />
      <div className="graph-container">
        <StaticMap data={data} hoveredPoint={hoveredPoint} />
      </div>
      <div className="graph-container">
        <ElevationChart data={data} onHover={setHoveredPoint} />
      </div>
      <Weather latitude={data[0].latitude} longitude={data[0].longitude} />
      <Images />
      <Footer />
    </div>
  );
};

export default Dashboard;

