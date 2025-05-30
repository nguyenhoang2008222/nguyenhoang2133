import styles from './product.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Product() {
    return (
      <div className={styles.product}>
        <div className={styles.mainproduct}>
          <div className={styles.image}>
            <Image
              src="/gundam2.png"
              alt="Vercel Logo"
              width={148}
              height={160}
            />
          </div>
          <div className={styles.nameproduct}>gundam</div>
          <div className={styles.priceproduct}>
            <strong>1.000.000đ</strong>
            <strong>
              <span class="price-and-discount">
                <label className={styles.sell}>2.000.000đ</label>
                <small>-50%</small>
              </span>
            </strong>
          </div>
          <div className={styles.count}>
            <Image src="/flash-sale.png" alt="fire" width={17} height={19} />
            <span class="rq_count fscount ">
              <b> Còn 264/500 Product</b>
            </span>
          </div>
        </div>

        <div className={styles.buyproduct}>
       <button>Mua ngay</button>
        </div>
      </div>
    );
}