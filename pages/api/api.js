import axios from 'axios';

export const fetchProducts = async () => {
  try {
    // 실제 API 호출 대신 예시 데이터를 반환합니다.
    const exampleData = [
      {
        id: 1,
        name: 'LG',
        netAsset: "13,527,885,398",
        startDate: '2024-05-31',
        yieldDifference: '/1s.svg', // Updated to reference public SVG file
        stockPriceIncreaseProbability: "98.69%",
      },
      {
        id: 2,
        name: '삼성화재',
        netAsset: "10,683,025,743",
        startDate: '2024-05-31',
        yieldDifference: '/2s.svg', // Updated to reference public SVG file
        stockPriceIncreaseProbability: "98.44%",
      },
      {
        id: 3,
        name: 'SK',
        netAsset: "12,282,679,606",
        startDate: '2024-05-31',
        yieldDifference: '/3s.svg', // Updated to reference public SVG file
        stockPriceIncreaseProbability: "97.24%",
      },
      {
        id: 4,
        name: '우리금융지주',
        netAsset: "8,722,165,377",
        startDate: '2024-05-31',
        yieldDifference: '/4s.svg', // Updated to reference public SVG file
        stockPriceIncreaseProbability: "96.87%",
      },
      {
        id: 5,
        name: '대한항공',
        netAsset: "8,137,676,608",
        startDate: '2024-05-31',
        yieldDifference: '/5s.svg', // Updated to reference public SVG file
        stockPriceIncreaseProbability: "96.20%",
      }
    ];

    return exampleData.map(product => ({
      id: product.id,
      name: product.name, //이름
      netAsset: product.netAsset, //총자산
      startDate: product.startDate, //기준일
      yieldDifference: product.yieldDifference, // SVG 데이터 수익률추이
      stockPriceIncreaseProbability: product.stockPriceIncreaseProbability // 주가 상승 확률
    }));
  } catch (error) {
    console.error('데이터를 가져오는 중 에러 발생:', error);
    throw error;
  }
};

export const fetchProductDetails = async (id) => {
  try {    
    let exampleData = {
      id: id,
      name: 'LG',
      netAsset: 2000000,
      volumn: 10000,
      startDate: '2024-05-31',
      yieldDifference: '/1.svg', // SVG 데이터 예시
      stockPriceIncreaseProbability: 98.69,
    };
    
    // 실제 API 호출 대신 예시 데이터를 반환합니다.
    if(id == 1){
      exampleData = {
        id: id,
        name: 'LG',
        netAsset: "13,527,885,398",
        volumn: "545,415",
        startDate: '2024-05-31',
        yieldDifference: '/1.svg', // SVG 데이터 예시
        stockPriceIncreaseProbability: 98.69,
      };
    }
    if(id == 2){
      exampleData = {
        id: id,
        name: '삼성화재',
        netAsset: "10,683,025,743",
        volumn: "165,397",
        startDate: '2024-05-31',
        yieldDifference: '/2.svg', // SVG 데이터 예시
        stockPriceIncreaseProbability: 98.44,
      };
    }
    if(id == 3){
      exampleData = {
        id: id,
        name: 'SK',
        netAsset: "12,282,679,606",
        volumn: "405,317",
        startDate: '2024-05-31',
        yieldDifference: '/3.svg', // SVG 데이터 예시
        stockPriceIncreaseProbability: 97.24,
      };
    }
    if(id == 4){
      exampleData = {
        id: id,
        name: '우리금융지주',
        netAsset: "8,722,165,377",
        volumn: "4,050,502",
        startDate: '2024-05-31',
        yieldDifference: '/4.svg', // SVG 데이터 예시
        stockPriceIncreaseProbability: 96.87,
      };
    }
    if(id == 5){
      exampleData = {
        id: id,
        name: '대한항공',
        netAsset: "8,137,676,608",
        volumn: "989,874",
        startDate: '2024-05-31',
        yieldDifference: '/5.svg', // SVG 데이터 예시
        stockPriceIncreaseProbability: 96.20,
      };
    }

    return {
      id: exampleData.id,
      name: exampleData.name, //이름
      netAsset: exampleData.netAsset, //총자산
      volumn: exampleData.volumn,
      startDate: exampleData.startDate, //기준일
      yieldDifference: exampleData.yieldDifference, // SVG 데이터 수익률추이
      stockPriceIncreaseProbability: exampleData.stockPriceIncreaseProbability // 주가 상승 확률
    };
  } catch (error) {
    console.error('데이터를 가져오는 중 에러 발생:', error);
    throw error;
  }
};

export const fetchNewsArticles = async (id) => {
  try {
    // 실제 API 호출 대신 예시 데이터를 반환합니다.
    let newsData = [
      { title: '기사 제목 1', link: 'https://example.com/article1' },
      { title: '기사 제목 2', link: 'https://example.com/article2' }
    ];

    if(id == 1) {
      newsData = [
        { title: 'LG, 잠실 라이벌 대결 승리·2위 탈환…KT, KIA 6연승 저지(종합)",김희준 박윤서 기자 = LG 트윈스가 잠실 라이벌 맞대결을 승리로 장식하면서 2위 자리를 되찾았다. LG는 31일 잠실구장에서 벌어진 2024 신한 쏠뱅크 KBO리그 두산 베어스와의 경기에서 6-3으로 승리했다. 전날 SSG 랜더스에 지면서 6연승이 중단됐던 LG는 이날 승리로 다시 분위기를 끌어올렸다.', link: 'https://example.com/lg-article1' },
        { title: 'LG 무드업냉장고 유럽시장 확대,LG전자(대표 조주완)가 ‘무드업냉장고’의 유럽시장 공략에 박차를 가한다. LG전자는 “파리의 랜드마크 샹젤리제 거리에서 무드업냉장고의 프랑스 출시를 알리는 체험행사를 개최했다”고 27일 밝혔다. 체험행사는 파리 현지시간 26일 ‘세계에서 가장 아름다운 샹젤리제에서 피크닉’을 주제로 열렸다', link: 'https://www.naeil.com/news/read/511559' }
      ];
    }
    if(id == 2) {
      newsData = [
        { title: '삼성화재, 보험 업계 선도', link: 'https://example.com/samsung-article1' },
        { title: '삼성화재 주가 분석', link: 'https://example.com/samsung-article2' }
      ];
    }
    if(id == 3) {
      newsData = [
        { title: 'SK, 신재생 에너지 투자 확대', link: 'https://example.com/sk-article1' },
        { title: 'SK 주가 전망', link: 'https://example.com/sk-article2' }
      ];
    }
    if(id == 4) {
      newsData = [
        { title: '우리금융지주, 금융 서비스 강화', link: 'https://example.com/woori-article1' },
        { title: '우리금융지주 주가 변동', link: 'https://example.com/woori-article2' }
      ];
    }
    if(id == 5) {
      newsData = [
        { title: '대한항공, 새로운 항공기 도입', link: 'https://example.com/korean-air-article1' },
        { title: '대한항공 주가 예상', link: 'https://example.com/korean-air-article2' }
      ];
    }

    return newsData;
  } catch (error) {
    console.error('데이터를 가져오는 중 에러 발생:', error);
    throw error;
  }
};
