import Layout from '../modules/common/component/layout';
import ProductCard from '../modules/common/component/products';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const HomePage = ({products}) => {
  
  const { list } = products;
  
  return (
    <Layout>
      <Container maxWidth='sm'>
        <Grid container spacing={2}>
          {list.map(list => {
            return (
              <Grid key={list.id} item xs={6} sm={6}>
                <ProductCard
                  productID={list.id}
                  img={list.img}
                  title={list.name}
                  promoLabel={list.promo}
                  price={list.price}
                  rating={list.rating}
                  sold={list.sold}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}

export default HomePage;