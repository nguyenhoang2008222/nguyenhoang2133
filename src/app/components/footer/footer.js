
import styles from "./footer.module.css";

export default function Footer() {
    return (    
        <div className={styles.footer} >
        <section className={styles.item3}>
       <div className={styles.title1} >thông tin
         <lu>
           <li>Mô hình Gunpla chính hãng</li>
           <li>Đa dạng sản phẩm, cập nhật mới</li>
           <li>Hướng dẫn lắp ráp chi tiết</li>
           <li>Cộng đồng Gundam sôi động</li>
           </lu>
            </div>
       <div className={styles.title2} >công ty
       <lu>
           <li>Hợp tác với Bandai</li>
           <li>Phân phối các bộ sưu tập Gundam chính hãng</li>
           <li>Cập nhật sản phẩm mới từ các series Gundam

</li>
           <li>Hỗ trợ các sản phẩm độc quyền và phiên bản giới hạn</li>
           </lu> </div>
       <div className={styles.title3} >địa chỉ 
       <lu>
           <li>Địa chỉ: 123 Lê Lợi, Quận 1, TP.HCM</li>
           <li>Mở cửa từ 9:00 - 18:00</li>
           <li>Giao hàng nhanh chóng trong khu vực TP.HCM</li>
           <li>Liên hệ qua hotline: 090xxxxxxx</li>
           </lu> </div>
           <div className={styles.title3} >Hợp tác
       <lu>
           <li>Bandai Official</li>
           <li>Gundam Base Online</li>
           <li>Gundam Base Online</li>
           <li>Tokyo Otaku Mode</li>
           </lu> </div>
   
   
      </section>
      <div className={styles.copbyright}>
<br />
<div className="contact-info">
        <a href="https://www.facebook.com" target="_blank">📱🔵 Facebook</a>
        <a href="mailto:example@email.com">✉️ hoaho7834@gmail.com</a>
        <a href="tel:+84123456789">📞 +84 123 456 789</a>
    </div>
    <br />
      </div>
      <marquee >Trang web được tạo bởi nguyễn huy hoàng thuộc bản quyền NNH ! </marquee>
      </div> 
    );
}