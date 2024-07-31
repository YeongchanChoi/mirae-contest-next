// MainpageComponent.jsx
'use client';
import { useEffect, useState } from "react";
import { fetchProducts } from "@/pages/api/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from 'next/image';

export function MainpageComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생: ', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="p-4 relative">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">투자상품찾기</h1>
        <h3>투자상품찾기 페이지는 주가 상승확률이 가장 높은 KOSPI 상위의 종목들을 추천해주는 서비스입니다.</h3>
        <div className="flex space-x-2">
          <Input type="text" placeholder="상품명 입력" className="w-64" />
          <Button className="bg-[#f57c00] text-white">검색</Button>
          <Button variant="outline" className="border-[#f57c00] text-[#f57c00]">
            <SettingsIcon className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex space-x-2"></div>
        <Link href={"/careful"}><Button className="bg-[#f17c00] text-white">주목할만한 종목</Button></Link>
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <Button variant="outline">비교하기</Button>
            <Button className="bg-[#f57c00] text-white">관심담기</Button>
          </div>
          <span>~2024.05.31 기준</span>
        </div>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>선택</TableHead>
              <TableHead>상품명</TableHead>
              <TableHead>시가총액(천원)</TableHead>
              <TableHead>주가상승확률</TableHead>
              <TableHead>그래프추이</TableHead>
              <TableHead>관심</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <Badge variant="outline" className="mb-1">
                      KOSPI
                    </Badge>
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </div>
                </TableCell>
                <TableCell>{product.netAsset}</TableCell>
                <TableCell>{product.stockPriceIncreaseProbability}</TableCell>
                <TableCell>
                  <Image src={product.yieldDifference} alt="수익률 추이 그래프" width={130} height={50} />
                </TableCell>
                <TableCell>
                  <StarIcon className="w-6 h-6 text-gray-400" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="absolute bottom-4 right-4 text-sm text-gray-500">
        2023.06.01~2024.05.31까지의 데이터를 학습 시킨 모델로 2024.06.01의 등락을 예측한 지표입니다.
      </div>
    </div>
  );
}

function SettingsIcon(props) {
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
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
