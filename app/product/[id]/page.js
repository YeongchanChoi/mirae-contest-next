// app/product/[id]/page.js
import ProductDetailClient from '@/components/component/ProductDetailClient';
import { fetchProductDetails, fetchNewsArticles } from '../../../pages/api/api';

export default async function ProductDetailPage({ params }) {
  const { id } = params;
  let product = null;
  let newsArticles = [];
  let forecast = 5.5;

  try {
    product = await fetchProductDetails(id);
    newsArticles = await fetchNewsArticles(id);
  } catch (error) {
    console.error('데이터를 가져오는 중 에러 발생: ', error);
  }

  return (
    <ProductDetailClient 
      product={product} 
      newsArticles={newsArticles} 
      forecast={forecast} 
    />
  );
}