import styles from './product.module.scss'

interface IProps{
    name: string,
    desc: string
}

const Product = (props:IProps) => {
    return(
        <div className={styles.product_card}>
            <h2 className="product_name">{props.name}</h2>
        </div>
    )
}

export default Product