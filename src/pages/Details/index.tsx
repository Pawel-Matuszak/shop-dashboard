import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import useCartDetails from "../../hooks/useCartDetails";
import {
  Chart as ChartJS,
  LinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";
import Loading from "../../components/Loading";

ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement);

type Props = {};

const Details = (props: Props) => {
  const { id } = useParams();
  const details = useCartDetails(id!);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    details.refetch();
  }, []);

  useEffect(() => {
    console.log(details.data);
    if (details.isSuccess && details.data?.data.products)
      setChartData({
        labels: details.data?.data.products.map((product) => product.title),
        datasets: [
          {
            label: "Price",
            data: details.data?.data.products.map((product) => product.price),
            fill: false,
            backgroundColor: "#208AAE",
            borderColor: "#208AAE",
            tension: 0.1,
          },

          {
            label: "Discounted Price",
            data: details.data?.data.products.map((product) => product.discountedPrice),
            fill: false,
            backgroundColor: "#EA2B1F",
            borderColor: "#EA2B1F",
            tension: 0.1,
          },
        ],
      });
  }, [details.status]);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },

    animation: {
      duration: 0,
    },
  };

  if (details.isError) return <div>Error: {details.error.message}</div>;
  if (details.isLoading) return <Loading />;

  return (
    <div className="p-4">
      <section>
        <h2 className="text-xl font-bold ">Cart Details</h2>
        <div className="flex flex-col px-3 ">
          <span>
            Cart ID: <span className=" font-bold ">{details.data.data.id || ""}</span>
          </span>
          <span>
            <span className="mx-2 font-bold ">
              ${details.data.data.discountedTotal || ""}
            </span>
            Discounted Price
          </span>
          <span>
            <span className="mx-2 font-bold ">${details.data.data.total || ""}</span>
            Price
          </span>
        </div>
      </section>
      <section>
        <div className="m-auto w-screen">
          {console.log(chartData)}
          {chartData && <Line data={chartData} options={options} />}
        </div>
      </section>
    </div>
  );
};

export default Details;
