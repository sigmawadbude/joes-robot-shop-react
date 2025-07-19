import type { IProduct } from "./product.model";

type ProductDetailsProps = {
  product: IProduct;
  onNotify: () => void;
};

export default function ProductDetails({ product, onNotify }: ProductDetailsProps) {
    const getImageUrl = (product: IProduct) => {
        if (!product) return '';
        return `/assets/images/robot-parts/${product.imageName}`;
    };
    return (
        <>
            <div className="product">
                <div className="product-details">
                    <img src={getImageUrl(product)} alt={product?.name} />
                    <div className="product-info">
                        <div className="name">{product?.name}</div>
                        <div className="description">{product?.description}</div>
                        <div className="category">Part Type: {product?.category}</div>
                    </div>
                </div>
                <div className="price">
                    <div className="{product.discount > 0 ? 'strikethrough' : ''}">${(product.price).toFixed(2)}</div>
                    {product.discount > 0 && <div className="discount">${(product.price * (1 - product.discount)).toFixed(2)}</div>}
                    <button className="cta" onClick={() => onNotify()}>Buy</button>
                </div>
            </div>
        </>
    )
}