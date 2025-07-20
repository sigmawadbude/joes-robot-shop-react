import type { IProduct } from "./product.model";

type ProductDetailsProps = {
    product: IProduct;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
    const getImageUrl = (product: IProduct) => {
        if (!product) return '';
        return `/assets/images/robot-parts/${product.imageName}`;
    };
    return (
        <>
            <div className="product-details">
                <img src={getImageUrl(product)} alt={product?.name} />
                <div className="product-info">
                    <div className="name">{product?.name}</div>
                    <div className="description">{product?.description}</div>
                    <div className="category">Part Type: {product?.category}</div>
                </div>
            </div>
        </>
    )
}