import Layout from '@common/component/layout'
import Container from '@material-ui/core/Container'
import ProductDetailCard from '@mobile/component/product'

const ProductDetail = ({ product }) => {
    const {
    img,
    name,
    rating,
    price,
    sold,
    description,
    quantity,
    condition,
    weight,
    promo
    } = product;

    return(
        <Layout>
            <Container maxWidth="sm">
                <ProductDetailCard 
                    img={img}
                    title={name}
                    rating={rating}
                    price={price}
                    sold={sold}
                    description={description}
                    quantity={quantity}
                    condition={condition}
                    weight={weight}
                    promo={promo}         
                />
            </Container>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/products`)
    const products = await res.json()

    const paths =  products.list.map(prod => `/product/${prod.id}`)

    return{ paths, fallback : false}

}

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}

export default ProductDetail;