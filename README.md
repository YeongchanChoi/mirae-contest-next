## 실행 명령어

1. `@front\mirae-contest-next` 경로로 이동합니다.
2. `npm install`로 의존성을 설치합니다. (용량 문제로 `node_modules` 폴더는 포함되지 않았습니다.)
3. `npm run dev` 명령어를 실행합니다.
4. `localhost:3000` 으로 접속합니다.

## 개요

본 코드는 JavaScript와 React, Next.js를 사용하여 임시 홈페이지를 구현한 것입니다.

http://52.78.48.244:3000/ 를 통하여 접속 가능합니다(AWS EC2를 사용해 업로드)

크롤링 코드로 수집한 데이터를 실시간으로 Apache Kafka를 통해 파이썬 모델 코드로 전송합니다. 데이터 업로드가 있을 때마다(하루 주기) 파이썬 모델이 학습을 수행하고, 그 결과를 MongoDB에 저장합니다. 이 데이터는 홈페이지에 반영될 예정입니다.
