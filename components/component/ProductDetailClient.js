// components/ProductDetailClient.js
'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ProductDetailClient({ product, newsArticles, forecast }) {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col items-center p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#ff7f00]">{product.name}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <Card className="p-4">
            <CardHeader className="text-center">
              <CardTitle className="text-sm text-muted-foreground">총자산</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold">{product.netAsset}원</div>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader className="text-center">
              <CardTitle className="text-sm text-muted-foreground">기준일</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold">{product.startDate}</div>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader className="text-center">
              <CardTitle className="text-sm text-muted-foreground">예상 증감 확률</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold">{product.stockPriceIncreaseProbability.toFixed(2)}%</div>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader className="text-center">
              <CardTitle className="text-sm text-muted-foreground">거래량</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold">{product.volumn}</div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full max-w-4xl mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">그래프 추이</h2>
          <div style={{ border: "2px solid #ff7f00", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "10px" }}>
            <img src={product.yieldDifference} alt="Yield Difference Graph" />
          </div>
        </div>
        <div className="w-full max-w-4xl mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">관련 뉴스</h2>
          <div style={{ border: "1px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "10px" }}>
            {newsArticles.map((article, index) => (
              <div key={index} className="my-2">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {article.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
