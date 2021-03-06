import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({
  data: { confirmed, active, deaths, recovered, state, lastupdatedtime },
}) => {
  //const [dailyData, setDailyData] = useState([]);

  // useEffect(() => {
  //     const fetchAPI = async () => {
  //         setDailyData(await fetchDailyData());
  //     }

  //     fetchAPI();
  // }, []);

  // const lineChart = (
  //     dailyData.length
  //     ? (
  //     <Line
  //         data={{
  //             labels: dailyData.map(({ date }) => date),
  //             datasets: [{
  //                 data: dailyData.map(({ confirmed }) => confirmed),
  //                 label: 'Infected',
  //                 borderColor: '#3333ff',
  //                 fill: true,
  //             }, {
  //                 data: dailyData.map(({ deaths }) => deaths),
  //                 label: 'Deaths',
  //                 borderColor: 'red',
  //                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
  //                 fill: true,
  //             }],
  //         }}
  //     />) : null
  // );

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Confirmed", "Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["blue", "orange", "green", "red"],
            data: [confirmed, active, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current status in ${state}` },
      }}
    />
  ) : null;

  return <div className={styles.container}>{barChart}</div>;
};

export default Chart;
