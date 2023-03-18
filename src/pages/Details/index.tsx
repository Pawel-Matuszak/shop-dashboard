import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate, useParams } from "react-router-dom";
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
import Navbar from "../../components/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";

ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement);

type Props = {};

const Details = (props: Props) => {
  const { id } = useParams();
  const details = useCartDetails(id!);
  const [chartData, setChartData] = useState<any>(null);
  const navigator = useNavigate();

  useEffect(() => {
    if (details.isSuccess)
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
    <div className="mx-auto my-4 w-4/5 max-sm:w-screen">
      <Navbar
        leadingComponent={
          <IoArrowBackOutline
            className="cursor-pointer text-3xl"
            onClick={() => navigator("/")}
          />
        }
        title="Cart Details"
      />
      <section>
        <div className="flex flex-col px-3">
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
        <div className="m-auto w-4/5 max-w-4xl max-sm:w-screen">
          {chartData && <Line data={chartData} options={options} />}
        </div>
      </section>
    </div>
  );
};

export default Details;
