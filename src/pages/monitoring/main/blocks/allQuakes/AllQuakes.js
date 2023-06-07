import React from "react";
import ReactApexCharts from "react-apexcharts";
import {
  Container,
  Title,
  ViewPosition,
} from "../../../../../components/reusable";
import { generateArray } from "../../../../../helper";
import styles from "./allQuakes.module.css";
import { useTranslation } from "../../../../../hooks";

const ChartOptions = {
  chart: {
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
      animateGradually: {
        enabled: true,
        delay: 200,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 1000,
      },
    },
    type: "donut",
    height: 350,
    width: 300,
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: "400px",
          width: "100%",
        },
        legend: {
          position: "bottom",
          horizontalAlign: "left",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                value: { fontSize: "36px", offsetY: 13 },
              },
            },
          },
        },
      },
    },
  ],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      dataLabels: {
        show: false,
      },
      donut: {
        size: "80%",
        background: "transparent",
        labels: {
          show: true,
          value: {
            fontSize: "65px",
            fontWeight: 700,
            color: "#0A1577",
            offsetY: 25,
          },
          name: {
            show: false,
          },
          total: {
            show: true,
            showAlways: true,
          },
        },
      },
    },
  },
  series: [30, 6, 2],
  labels: [
    "(94%) – предсказаны",
    "(19%) – предсказаны ретроспективно",
    "(6%) – не прогнозировано",
  ],
  fill: {
    type: ["gradient", "pattern", "solid"],
    opacity: 1,
    pattern: {
      strokeWidth: 7,
      enabled: true,
      style: "verticalLines",
    },
    gradient: {
      shadeIntensity: 0.5,
      opacityFrom: 1,
      opacityTo: 1,
      shade: "dark",
      type: "horizontal",
      inverseColors: true,
      gradientToColors: ["#0026AA", "#0F6FE4", "#0026AA"],
      stops: [0, 100, 100],
    },
  },
  legend: {
    position: "right",
    offsetY: 5,
    fontSize: "24px",
    labels: {
      useSeriesColors: true,
    },
  },
  colors: ["#0F6FE4", "#0026AA", "#41CF77"],
};

const data = generateArray(25, {
  magnitude: "M=6.2",
  title: "42.40 N 13.32",
  subtitle: "E H=10 км",
  country: "Италия (L'Aquila)",
  date: "2009.04.06",
});

export const AllQuakes = () => {
  const {
    monitoring_and_prediction: {
      forecast_online_mode: { title1,title2, subtitle, data, text },
    },
  } = useTranslation().language;

  return (
    <Container className="py-16 flex flex-col gap-6">
      <Title>{title1}</Title>
      {/* <p className="text-[32px] text-[#938E97] text-center leading-[150%] med-1200:text-[28px] med-900:text-[18px]">
        {subtitle}
      </p>
      <div className="flex flex-col gap-[24px] med-900:gap-4 med-600:hidden">
        {data.map((el, i) => (
          <Item {...el} delay={i / 3} key={i} />
        ))}
      </div> */}
      {/* <p className="text-[24px] text-[#938E97] text-center mx-auto w-[80%] med-1200:w-full">
        {text}
      </p> */}
      <MyChart />
      <Title>
      {title2}
      </Title>
      <MyChart2 />
    </Container>
  );
};
const MyChart2 = () => {
  const {
    monitoring_and_prediction: {
      forecast_online_mode: { ChartOptions2 },
    },
  } = useTranslation().language;
  return (
    <ViewPosition className="w-[75%] mx-auto min-h-[300px] med-900:min-h-[250px] med-900:w-full">
      {(bool) => (
        <>
          {bool && (
            <ReactApexCharts
              options={ChartOptions2}
              series={ChartOptions2.series}
              type={ChartOptions2.chart.type}
              width="100%"
              height={300}
            />
          )}
        </>
      )}
    </ViewPosition>
  );
};

const MyChart = () => {
  const {
    monitoring_and_prediction: {
      forecast_online_mode: { ChartOptions },
    },
  } = useTranslation().language;
  return (
    <ViewPosition className="w-[75%] mx-auto min-h-[300px] med-900:min-h-[250px] med-900:w-full">
      {(bool) => (
        <>
          {bool && (
            <ReactApexCharts
              options={ChartOptions}
              series={ChartOptions.series}
              type={ChartOptions.chart.type}
              width="100%"
              height={300}
            />
          )}
        </>
      )}
    </ViewPosition>
  );
};

const Item = ({ magnitude, title, country, date, delay }) => {
  return (
    <ViewPosition>
      {(bool) => (
        <div
          style={{
            opacity: bool ? 1 : 0,
            transform: bool ? "translateY(0)" : "translateY(50px)",
            transitionDelay: delay + "ms",
          }}
          className={styles.item}
        >
          <div className={styles.magnitude}>{magnitude}</div>
          <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.country}>{country}</div>
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
    </ViewPosition>
  );
};
