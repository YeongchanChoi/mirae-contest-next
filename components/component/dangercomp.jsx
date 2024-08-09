import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CartesianGrid, XAxis, Area, AreaChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import { fetchCareful, fetchChartData } from "../../pages/api/api"; // fetchCareful와 fetchChartData를 가져옵니다.
import { useEffect, useState } from "react";

export function Dangercomp() {
  const [riskProducts, setRiskProducts] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // fetchCareful와 fetchChartData API 호출
    const loadProducts = async () => {
      try {
        const products = await fetchCareful();
        const charts = await fetchChartData();

        const updatedProducts = products.map((product) => {
          const productChartData = charts
            .filter((data) => data.name === product.name)
            .map((data) => ({
              x: new Date(data.date).toLocaleDateString("ko-KR", {
                month: "short",
              }),
              y: data.price,
            }));

          return {
            ...product,
            chartData: productChartData,
          };
        });

        setRiskProducts(updatedProducts);
      } catch (error) {
        console.error("Failed to fetch products or chart data:", error);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="bg-background text-foreground">
      <header className="bg-muted py-4 px-6">
        <div className="container mx-auto flex items-center">
          <h1 className="text-2xl font-bold text-[#ffffff]">
            변동률 높은 종목
          </h1>
          <div className="ml-auto relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="상품 검색"
              className="w-full rounded-lg bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {riskProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">
                    {product.netAsset}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      parseFloat(product.stockPriceIncreaseProbability) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.stockPriceIncreaseProbability}
                  </span>
                </div>
              </div>
              <div className="h-32 bg-muted">
                {" "}
                {/* 높이를 32로 줄입니다. */}
                <AreachartChart chartData={product.chartData} />
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function AreachartChart({ chartData }) {
  return (
    <div>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[120px]" // 최소 높이를 줄입니다.
      >
        <AreaChart
          accessibilityLayer
          width={250} // 그래프의 너비를 줄입니다.
          height={120} // 그래프의 높이를 줄입니다.
          data={chartData.map((data) => ({ month: data.x, desktop: data.y }))}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
