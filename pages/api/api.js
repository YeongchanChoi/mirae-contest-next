import axios from "axios";

// Fetch the list of products
export const fetchProducts = async () => {
  try {
    // Example data, replace with actual API call if needed
    const exampleData = [
      {
        id: 1,
        name: "LG",
        netAsset: "13,527,885,398",
        startDate: "2024-05-31",
        stockPriceIncreaseProbability: "78.69%",
        lineChartData: [
          { month: "01", desktop: 93500 },
          { month: "02", desktop: 94900 },
          { month: "03", desktop: 95100 },
          { month: "04", desktop: 92900 },
          { month: "05", desktop: 104800 },
          { month: "06", desktop: 110900 },
        ],
      },
      {
        id: 2,
        name: "삼성화재",
        netAsset: "10,683,025,743",
        startDate: "2024-05-31",
        stockPriceIncreaseProbability: "78.44%",
        lineChartData: [
          { month: "01", desktop: 264000 },
          { month: "02", desktop: 298000 },
          { month: "03", desktop: 306000 },
          { month: "04", desktop: 310000 },
          { month: "05", desktop: 348500 },
          { month: "06", desktop: 389000 },
        ],
      },
      {
        id: 3,
        name: "SK",
        netAsset: "12,282,679,606",
        startDate: "2024-05-31",
        stockPriceIncreaseProbability: "77.24%",
        lineChartData: [
          { month: "01", desktop: 183500 },
          { month: "02", desktop: 191800 },
          { month: "03", desktop: 178600 },
          { month: "04", desktop: 166000 },
          { month: "05", desktop: 176200 },
          { month: "06", desktop: 158300 },
        ],
      },
      {
        id: 4,
        name: "우리금융지주",
        netAsset: "8,722,165,377",
        startDate: "2024-05-31",
        stockPriceIncreaseProbability: "76.87%",
        lineChartData: [
          { month: "01", desktop: 13880 },
          { month: "02", desktop: 14900 },
          { month: "03", desktop: 14320 },
          { month: "04", desktop: 14230 },
          { month: "05", desktop: 14170 },
          { month: "06", desktop: 14690 },
        ],
      },
      {
        id: 5,
        name: "대한항공",
        netAsset: "8,137,676,608",
        startDate: "2024-05-31",
        stockPriceIncreaseProbability: "76.20%",
        lineChartData: [
          { month: "01", desktop: 22500 },
          { month: "02", desktop: 23000 },
          { month: "03", desktop: 21700 },
          { month: "04", desktop: 20950 },
          { month: "05", desktop: 20850 },
          { month: "06", desktop: 23250 },
        ],
      },
    ];

    // Return the mapped data
    return exampleData.map((product) => ({
      id: product.id,
      name: product.name,
      netAsset: product.netAsset,
      startDate: product.startDate,
      lineChartData: product.lineChartData,
      stockPriceIncreaseProbability: product.stockPriceIncreaseProbability,
    }));
  } catch (error) {
    console.error("데이터를 가져오는 중 에러 발생:", error);
    throw error;
  }
};

export const fetchCareful = async () => {
  try {
    const exampleData = [
      {
        id: 1,
        name: "HD현대일렉트릭",
        netAsset: "11,520,000,000",
        startDate: "2024-05-31",
        yieldDifference: "/c1.svg",
        stockPriceIncreaseProbability: "23.74%",
      },
      {
        id: 2,
        name: "HD현대중공업",
        netAsset: "18,420,000,000",
        startDate: "2024-05-31",
        yieldDifference: "/c2.svg",
        stockPriceIncreaseProbability: "-6.02%",
      },
      {
        id: 3,
        name: "KT&G",
        netAsset: "9,529,000,000",
        startDate: "2024-05-31",
        yieldDifference: "/c3.svg",
        stockPriceIncreaseProbability: "-7.37%",
      },
      {
        id: 4,
        name: "LG에너지솔루션",
        netAsset: "72,501,000,000",
        startDate: "2024-05-31",
        yieldDifference: "/c4.svg",
        stockPriceIncreaseProbability: "-14.91%",
      },
      {
        id: 5,
        name: "LG전자",
        netAsset: "16,822,000,000",
        startDate: "2024-05-31",
        yieldDifference: "/c5.svg",
        stockPriceIncreaseProbability: "13.66%",
      },
    ];

    return exampleData.map((product) => ({
      id: product.id,
      name: product.name,
      netAsset: product.netAsset,
      startDate: product.startDate,
      yieldDifference: product.yieldDifference,
      stockPriceIncreaseProbability: product.stockPriceIncreaseProbability,
    }));
  } catch (error) {
    console.error("데이터를 가져오는 중 에러 발생:", error);
    throw error;
  }
};

export const fetchChartData = async () => {
  const chartData = [
    { name: "HD현대일렉트릭", date: "2024-01-01", price: 102700 },
    { name: "HD현대일렉트릭", date: "2024-02-01", price: 124400 },
    { name: "HD현대일렉트릭", date: "2024-03-01", price: 179400 },
    { name: "HD현대일렉트릭", date: "2024-04-01", price: 247000 },
    { name: "HD현대일렉트릭", date: "2024-05-01", price: 301000 },
    { name: "HD현대일렉트릭", date: "2024-06-01", price: 310000 },
    { name: "HD현대중공업", date: "2024-01-01", price: 114100 },
    { name: "HD현대중공업", date: "2024-02-01", price: 117900 },
    { name: "HD현대중공업", date: "2024-03-01", price: 118000 },
    { name: "HD현대중공업", date: "2024-04-01", price: 137700 },
    { name: "HD현대중공업", date: "2024-05-01", price: 128700 },
    { name: "HD현대중공업", date: "2024-06-01", price: 155700 },
    { name: "KT&G", date: "2024-01-01", price: 90600 },
    { name: "KT&G", date: "2024-02-01", price: 93000 },
    { name: "KT&G", date: "2024-03-01", price: 93500 },
    { name: "KT&G", date: "2024-04-01", price: 89400 },
    { name: "KT&G", date: "2024-05-01", price: 83500 },
    { name: "KT&G", date: "2024-06-01", price: 88200 },
    { name: "LG에너지솔루션", date: "2024-01-01", price: 381000 },
    { name: "LG에너지솔루션", date: "2024-02-01", price: 401500 },
    { name: "LG에너지솔루션", date: "2024-03-01", price: 395000 },
    { name: "LG에너지솔루션", date: "2024-04-01", price: 389000 },
    { name: "LG에너지솔루션", date: "2024-05-01", price: 331000 },
    { name: "LG에너지솔루션", date: "2024-06-01", price: 326500 },
    { name: "LG전자", date: "2024-01-01", price: 93500 },
    { name: "LG전자", date: "2024-02-01", price: 94900 },
    { name: "LG전자", date: "2024-03-01", price: 95100 },
    { name: "LG전자", date: "2024-04-01", price: 92900 },
    { name: "LG전자", date: "2024-05-01", price: 104800 },
    { name: "LG전자", date: "2024-06-01", price: 110900 },
  ];

  return chartData.map((item) => ({
    name: item.name,
    date: item.date,
    price: item.price,
  }));
};
