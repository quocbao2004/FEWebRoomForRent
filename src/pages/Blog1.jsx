import React from "react";
import "../assets/css/blog1.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Blog1({ useRefAPI }) {
  return (
    <>
      {/* Header Component */}
      <Header useRefAPI={useRefAPI} />

      {/* Main Blog Content */}
      <main className="blog-container">
        <h1 className="blog-title">
          Mẹo Tiết Kiệm Chi Phí Khi Ở Nhà Trọ Cho Sinh Viên
        </h1>

        <p className="blog-intro">
          Sinh viên thường đối mặt với nhiều thử thách khi sống xa nhà, trong đó
          việc quản lý tài chính là một bài toán nan giải. Dưới đây là những mẹo
          giúp bạn tiết kiệm chi phí hiệu quả khi sống ở nhà trọ.
        </p>

        <section className="blog-section">
          <h2 className="section-title">1. Chọn Phòng Trọ Phù Hợp</h2>
          <p>
            Hãy dành thời gian để khảo sát và so sánh giá cả, tiện ích, và vị
            trí trước khi quyết định thuê nhà. Việc này không chỉ giúp bạn tiết
            kiệm chi phí mà còn tránh được những bất tiện không đáng có.
          </p>
        </section>

        <section className="blog-section">
          <h2 className="section-title">2. Tự Nấu Ăn</h2>
          <p>
            Tự nấu ăn là cách đơn giản và hiệu quả để giảm chi phí sinh hoạt.
            Ngoài ra, nó còn giúp bạn kiểm soát chất lượng bữa ăn, đảm bảo sức
            khỏe tốt hơn.
          </p>
        </section>

        <section className="blog-section">
          <h2 className="section-title">3. Sử Dụng Đồ Dùng Tiết Kiệm</h2>
          <p>
            Chọn mua các thiết bị điện tiết kiệm năng lượng và nhớ tắt điện khi
            không sử dụng. Điều này giúp giảm đáng kể hóa đơn hàng tháng.
          </p>
        </section>

        <section className="blog-section">
          <h2 className="section-title">4. Lập Kế Hoạch Chi Tiêu</h2>
          <p>
            Lên kế hoạch chi tiêu hàng tháng để kiểm soát tài chính hiệu quả.
            Điều này giúp bạn tránh được các khoản chi không cần thiết.
          </p>
        </section>

        <section className="blog-section">
          <h2 className="section-title">5. Tìm Kiếm Các Nguồn Hỗ Trợ</h2>
          <p>
            Đừng quên tìm hiểu các chương trình hỗ trợ tài chính hoặc học bổng
            từ trường đại học hoặc các tổ chức địa phương.
          </p>
        </section>

        <p className="blog-summary">
          Với những mẹo này, bạn sẽ dễ dàng hơn trong việc cân đối ngân sách và
          tập trung vào việc học tập.
        </p>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default Blog1;
