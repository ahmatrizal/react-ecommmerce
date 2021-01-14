import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import PromoLabel from '@common/component/promolabel'
import ProductRating from '@common/component/rating'
import {currencyFromMatter} from '../../../../utils/currency'

const useStyles = makeStyles({
    card: {
    maxWidth: 360,
  },
  img: {
    height: 140,
  },
  relative: {
    position: 'relative'
  },
  promoLabel: {
    position: 'absolute',
    bottom: 6,
    left: 4,
  },
  price: {
    lineHeight: 'normal',
  }
})

const ProductCard = ({img,title,promoLabel,price,rating,sold,productID}) => {
    const classes = useStyles();
    return(
        <Link href="product/[id]" as={`product/${productID}`}>
        <Card>
            <div className={classes.Card}>
                <div className={classes.relative}>
                    <CardMedia
                    className={classes.img}
                    image={img}
                    title={title}
                    />
                    <div className={classes.promoLabel}>
                        <PromoLabel promoLabel={promoLabel}/>
                    </div>
                </div>
                <ProductRating rating={rating} sold={sold}/>
                <CardContent>
                    <Grid container direction="column">
                        <Typography  variant="subtitle2" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.price} varian="overline">
                            {currencyFromMatter(price)}
                        </Typography>
                    </Grid>
                </CardContent>
            </div>
        </Card>
        </Link>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    promolabel: PropTypes.array,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    sold: PropTypes.number,
    productID: PropTypes.number.isRequired
}

export default ProductCard;