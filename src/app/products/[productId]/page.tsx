export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  return <h1>product details {productId}</h1>;
}
