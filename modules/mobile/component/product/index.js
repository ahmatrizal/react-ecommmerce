import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Rating from '@common/component/rating'
import { currencyFromMatter } from '../../../../utils/currency'
import PromoCard from '@common/component/promoCard'

const useStyle = makeStyles((theme) => ({
    container : {
        marginBottom: theme.spacing(8)
    },
    media: {
        height: 0,
        paddingTop : '56.25%'
    },
    productInfo: {
        marginTop : theme.spacing(2)
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
  },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
}))

const ProductDetailCard = ({
    img,
    title,
    rating,
    price,
    sold,
    description,
    quantity,
    condition,
    weight,
    promo
}) => {
    const classes = useStyle();
    const [expanded, setExpanded] = useState(true)

    const handleExpanded = () => {
        setExpanded(!expanded)
    }
    return(
        <div className={classes.container}>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={title}
                />
                
                <CardContent>
                    <Typography varian="h5">
                        {title}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item sx={6} sm={6}>
                            <Typography varian='button' color="secondary">
                            {currencyFromMatter(price)}
                            </Typography>
                        </Grid>
                        <Grid item sx={6} sm={6}>
                            <Rating rating={rating} sold={sold} alignRight/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} className={classes.productInfo}>
                        <Grid container direction="column" justify="center" item sx={3} sm={3}>
                            <Typography align="center" varian="overline">
                                Berat
                            </Typography>
                            <Typography align="center" varian="button">
                                {weight}
                            </Typography>
                        </Grid>

                        <Grid container direction="column" justify="center" item sx={3} sm={3}>
                            <Typography align="center" varian="overline">
                                Kondisi
                            </Typography>
                            <Typography align="center" varian="button">
                                {condition}
                            </Typography>
                        </Grid>

                        <Grid container direction="column" justify="center" item sx={3} sm={3}>
                            <Typography align="center" varian="overline">
                                Stok
                            </Typography>
                            <Typography align="center" varian="button">
                                {quantity}
                            </Typography>
                        </Grid>

                        <Grid container direction="column" justify="center" item sx={3} sm={3}>
                            <Typography align="center" varian="overline">
                                Terjual
                            </Typography>
                            <Typography align="center" varian="button">
                                {sold}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container align="center" justify="center">
                    <IconButton 
                        onClick={handleExpanded}
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                    </Grid>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph variant="subtitle2">
                        Deskripsi
                    </Typography>
                        
                    <Typography paragraph variant='body2'>
                        {description}
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <PromoCard promo={promo}/>
        </div>
    )
}

ProductDetailCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    promo: PropTypes.array.isRequired
}

export default ProductDetailCard;