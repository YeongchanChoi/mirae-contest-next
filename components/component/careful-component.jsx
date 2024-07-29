// MainpageComponent.jsx
'use client';
import { useEffect, useState } from "react";
import { fetchCareful, fetchProducts } from "@/pages/api/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge2";
import Link from "next/link";
import Image from 'next/image';

export function CarefulpageComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchCareful();
        setProducts(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생: ', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">주목할만한 종목</h1>
        <div className="flex space-x-2"> <h3>주목할만한 종목 페이지는 한 달 내에 이상 주가가 있는 종목들을 표시해주는 서비스입니다.</h3></div>
        <Link href={"/"}><Button className="bg-[#f17c00] text-white">투자상품찾기</Button></Link>
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <Button variant="outline">비교하기</Button>
            <Button className="bg-[#f57c00] text-white">관심담기</Button>
          </div>
          <span>2024.05.31기준</span>
        </div>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>선택</TableHead>
              <TableHead>상품명</TableHead>
              <TableHead>시가총액(천원)</TableHead>
              <TableHead>최근 변동폭(한달)</TableHead>
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
                      변동폭↑
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