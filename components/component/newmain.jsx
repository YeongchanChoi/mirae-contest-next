import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import { fetchProducts } from "../../pages/api/api"; // Ensure this is the correct path to your api.js file

export function Newmain() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="bg-background text-foreground">
      <header className="bg-muted py-4 px-6">
        <div className="container mx-auto flex items-center">
          <h1 className="text-2xl font-bold text-[#ffffff]">주목할만한 주식</h1>
          <div className="ml-auto relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="검색어를 입력하세요..."
              className="w-full rounded-lg bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>
        </div>
      </header>
      <div className="max-w-3xl w-full px-4 md:px-6 mx-auto mt-6">
        {" "}
        {/* Added mt-6 for spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
          {" "}
          {/* Added justify-center for centering */}
          {products.map((product) => (
            <Card key={product.id} className="bg-card rounded-lg shadow-md">
              <CardHeader>
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground">총자산(천원)</p>
                    <p className="font-semibold">{product.netAsset}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">주가 상승 확률</p>
                    <p className="font-semibold text-primary">
                      {product.stockPriceIncreaseProbability}
                    </p>
                  </div>
                </div>
                <div className="w-full aspect-w-16 aspect-h-9">
                  <LinechartChart
                    data={product.lineChartData}
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-right text-xs mt-6">
          <div>
            임시로 2023.06.01~2024.05.31까지의 데이터를 학습 시킨 모델로
            2024.06.01의 등락을 예측한 지표입니다.
          </div>
          <div>업데이트를 통해 실시간 서비스 구현 예정입니다.</div>
        </div>
      </div>
    </div>
  );
}

function LinechartChart({ data, ...props }) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={data}
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
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
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
