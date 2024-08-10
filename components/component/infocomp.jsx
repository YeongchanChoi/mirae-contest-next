export function Infocomp() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">팀 소개</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            저희 팀은 주식 시장의 변화 속에서 고객들이 한 발 앞서 나아갈 수
            있도록, 데이터와 인사이트를 결합한 등락 예측 서비스를 개발했습니다.
            이 서비스는 단순한 숫자 이상의 의미를 전달하며, 투자자들에게 보다
            넓은 시야와 정확한 판단력을 제공합니다. 저희는 고객들이 보다
            안정적이고 현명한 결정을 내릴 수 있도록, 혁신적이고 신뢰할 수 있는
            도구를 제시하고자 합니다.
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
              웹 개발 전반, 모델에 사용된 데이터 크롤링, 전처리
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
              전체 기획, 데이터 전처리, LSTM 모델을 활용하여 모델 개발
            </p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src=""
                alt=""
                width={96}
                height={96}
                className="object-cover"
                style={{ aspectRatio: "96/96", objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl font-bold mt-4">우도혁</h3>
            <p className="text-muted-foreground">모델 개발</p>
            <p className="mt-2 text-sm text-muted-foreground">
              LSTM 모델을 활용하여 모델 개발 전반
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
