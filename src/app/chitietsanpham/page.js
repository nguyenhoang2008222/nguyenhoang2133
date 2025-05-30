import Image from "next/image";
import styles from "./chitietsanpham.module.css";
import SimpleSlider from "../components/slider/slider";
// import Slider from "react-slick/lib/slider";
import Kmslider from "../components/slider/kmslider";


export default function ChiTietSanPham() {
    const htmlcontent = `<p>thong tin san pham</p>`;
        return (
            <div className={styles.ChiTietSanPham}>
            <div className={styles.slide}> 
                <div className={styles.image}>
                  
                        <SimpleSlider />
                   
                </div>
                <div className={styles.thongtin} >
                    <div className={styles.thongtinproduct} >
                    <Kmslider />
                    </div>
                    <div className={styles.sell} >  
                 
                    <p>1000000đ</p> 
                    <a>99999999999</a>
                        </div>
                    <div className={styles.sanpham}>
                    <div className={styles.muangay} >   mua ngay  <br/>
                        <span className={styles.giaohang}>giao hàng tận nơi hoặc tại cửa hàng</span></div> 
                    </div>
                </div>
             </div>
             <div className={styles.mota} >
                <div dangerouslySetInnerHTML={{__html: `<p>

                <h1>Giới Thiệu Mô Hình Gundam</h1>
<ul>
    <li><strong>Gundam</strong> là một dòng mô hình robot nổi tiếng đến từ Nhật Bản.</li>
    <li>Mô hình được dựa trên loạt phim hoạt hình (anime) Gundam nổi tiếng.</li>
    <li>Thường được gọi là <em>Gunpla</em> – viết tắt của “Gundam Plastic Model”.</li>
    <li>Được phân loại theo cấp độ:
        <ul>
            <li><strong>HG</strong> – High Grade (dễ lắp, phổ biến)</li>
            <li><strong>MG</strong> – Master Grade (chi tiết, phức tạp hơn)</li>
            <li><strong>PG</strong> – Perfect Grade (cao cấp, độ chi tiết cực cao)</li>
        </ul>
    </li>
    <li>Lắp ráp Gundam giúp rèn luyện sự kiên nhẫn, tỉ mỉ và sáng tạo.</li>
    <li>Được nhiều người chơi trên thế giới sưu tầm và thi đấu mô hình.</li>
</ul>

                   
                    </p>`}} ></div>
             </div>
            </div>
        );
    }