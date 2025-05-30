import Image from "next/image";
import styles from "./header.module.css";
import Link from 'next/link'

export default function Header() {
    return (
        <div className={styles.header} >
    <div className={styles.menu}>
         
      <ul className={styles.nav}>   
      
      <marquee>đây là trang web của tôi chuyên bán mô hình gundame</marquee>
        <li><Link href="/">Trang Chủ</Link></li>
        <li>
        <a href="/chitietsanpham">Chi tiết sản phẩm</a>
        <ul className={styles.subMenu}>
            <li><Link href="/sanpham1">Gundam RX-78-2</Link></li>
            <li><Link href="/sanpham2">Gundam Unicorn</Link></li>
            <li><Link href="/sanpham3">Gundam Wing Zero</Link></li>
        </ul>
    </li>
        <li><Link href="/hanggundam">Các Hãng Gun Đam</Link> </li>
        <li> <Link href="/lienhe">Liên Hệ</Link></li>
        <li><Link href="/caidat">CàI Đặt</Link> </li>
      </ul>
      <div className={styles.logo} >
        <Image src="/nguoidung.jpg" alt="logo" width={50} height={50} />
      </div>
    
    </div>
    {/* <div className={styles.logo} >nextjs.org</div> */}
     </div>
    );
}