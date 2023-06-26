import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from "@material-ui/core/styles"
import NoImage from '../../assets/img/src/no_image.png'
import {push} from 'connected-react-router'
import {useDispatch} from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            margin: 8,
            width: 'calc(50% - 16px)'
        },
        [theme.breakpoints.up('md')]: {
            margin: 16,
            width: 'calc(33.3333% - 32px)'
        }
    },
    content: {
        display: 'flex',
        padding: '16 8',
        textAlign: 'left',
        '&:last-child': {
            paddingBottom: 16
        }
    },
    icon: {
        marginRight: 0,
        marginLeft: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '100%'
    },
    price: {
        color: theme.palette.secondary.dark,
        fontSize: 16

    },
    productName: {
        boxOrient: 'vertical',
        display: '-webkit-box',
        fontSize: 14,
        lineHeight: '18px',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            height: 36,
            lineClamp: 2
        },
        [theme.breakpoints.up('md')]: {
            height: 18,
            lineClamp: 1
        }
    }
}))

const ProductCard = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const images = (props.images.length > 0) ? props.images : [{path: NoImage}]
    const price = props.price.toLocaleString()

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={images[0].path}
                onClick={() => dispatch(push(`/product/${props.id}`))}
            />
            <CardContent
                className={classes.content}
                onClick={() => dispatch(push(`/product/${props.id}`))}
            >
                <div>
                    <Typography color="textSecondary" component="p">
                        {props.name}
                    </Typography>
                    <Typography className={classes.price} component="p">
                        ￥{price}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard
