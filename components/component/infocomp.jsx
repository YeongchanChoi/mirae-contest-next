export function Infocomp() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">팀 소개</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            저희는 주식 서비스를 이용하는 고객들의 조금 더 넓은 시야를 위해 등락
            예측 서비스를 제작하였습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="/choi.png"
                alt="Developer"
                width={96}
                height={96}
                className="object-cover"
                style={{ aspectRatio: "96/96", objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-bold mt-4">최영찬</h3>
            <p className="text-muted-foreground">웹 개발, 데이터 수집</p>
            <p className="mt-2 text-sm text-muted-foreground">
              웹 개발 전반, 모델에 사용된 데이터 크롤링, 정제
            </p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="/jung.png"
                alt="Designer"
                width={96}
                height={96}
                className="object-cover"
                style={{ aspectRatio: "96/96", objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-bold mt-4">정재호</h3>
            <p className="text-muted-foreground">모델 개발</p>
            <p className="mt-2 text-sm text-muted-foreground">
              전체 기획, LSTM 모델을 활용하여 모델 개발
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
