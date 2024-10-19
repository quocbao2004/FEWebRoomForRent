import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/security-policy.css'

function SecurityPolicy(obj) {
  return (
    <div>
      <Header/>
      <div className="Sercurity-policy">
        <div className="main-content">
            <h1 className="title">Chính Sách Bảo Mật</h1>
            <hr />  
            <h2 className="sub-title">Chính sách bảo mật</h2>
            <p className="desc">Chính sách bảo mật này giải thích cách chúng tôi thu thập,
                 sử dụng, chia sẻ dữ liệu cá nhân của bạn khi bạn sử dụng các dịch vụ được cung cấp
                  trên các trang web và ứng dụng của chúng tôi hoặc tương tác với chúng tôi.
                   Dữ liệu cá nhân là bất kỳ thông tin nào về bạn mà bạn có thể được nhận dạng hoặc
                 có thể nhận dạng được. Điều này có thể bao gồm các thông tin như:</p>
            <ul className="list">
                <li className="item">
                    <p className="desc">
                        Thông tin về thiết bị của bạn (chẳng hạn như địa chỉ IP, là mã số để xác định thiết bị của bạn có thể cung cấp thông tin về quốc gia, khu vực hoặc thành phố nơi bạn ở)
                    </p>
                </li>
                <li className="item">
                    <p className="desc">
                    Thông tin liên quan đến cách bạn sử dụng và tương tác với các trang web, ứng dụng và dịch vụ của chúng tôi. Đôi khi các trang web và ứng dụng của chúng tôi có thể chứa các liên kết đến các trang web. Các trang web và dịch vụ này có chính sách bảo mật của riêng họ. Nếu bạn nhấp vào liên kết đến các trang web và ứng dụng khác, bạn nên đọc chính sách bảo mật được hiển thị trên trang web của họ.
                    </p>
                </li>
            </ul>
            <h2 className="TypeOfData">Các loại dữ liệu cá nhân chúng tôi thu thập về bạn:</h2>
            <p className="desc">
                Chúng tôi thu thập dữ liệu cá nhân của bạn khi bạn truy cập các trang web và ứng dụng của chúng tôi, đăng ký sản phẩm hoặc dịch vụ, đóng góp cho Thuê Phòng Trọ Giá Rẻ Sài Gòn hoặc khi bạn tương tác với chúng tôi. Chúng tôi sẽ chỉ thu thập dữ liệu cá nhân của bạn theo luật hiện hành. Chúng tôi thu thập dữ liệu cá nhân của bạn theo nhiều cách khác nhau:
            </p>
            <ul className="list">
                <li className="item">
                    <p className="desc">
                    Trực tiếp từ bạn, khi bạn đăng ký dịch vụ của chúng tôi và khi bạn duyệt các trang web của chúng tôi hoặc sử dụng các ứng dụng của chúng tôi
                    </p>
                </li>
                <li className="item">
                    <p className="desc">
                    Dữ liệu cá nhân chúng tôi tạo ra về bạn, ví dụ: dữ liệu cá nhân mà chúng tôi sử dụng để xác thực bạn hoặc dữ liệu cá nhân ở dạng địa chỉ IP của bạn hoặc tùy chọn của bạn
                    </p>
                </li>
            </ul>

            <p className="desc">Khi bạn đăng ký Thuê Trọ Sài Gòn Giá Rẻ, chúng tôi thu thập:</p>
            <ul className="list">
                <li className="item">Họ và tên của bạn</li>
                <li className="item">Địa chỉ email hoặc số điện thoại do bạn cung cấp</li>
                <li className="item">Nhu cầu mục đích của bạn đối với website</li>
            </ul>

            <p className="desc">
            Chúng tôi sẽ không thu thập các danh mục dữ liệu đặc biệt từ bạn - chẳng hạn như dữ liệu cá nhân liên quan đến chủng tộc, quan điểm chính trị, tôn giáo, sức khỏe hoặc khuynh hướng tình dục của bạn…
            Chúng tôi sẽ hạn chế tối đa việc thu thập thông tin cá nhân của bạn từ website.
            </p>

            <h2 className="sub-title">Cách chúng tôi thu thập dữ liệu cá nhân của bạn</h2>
            <p className="desc">Chúng tôi thu thập dữ liệu cá nhân khi bạn:</p>
            <ul className="list">
                <li className="item">Đăng kí tư vấn thuê trọ/nhà từ website</li>
                <li className="item">Tham gia các cuộc thi và khảo sát của chúng tôi</li>
                <li className="item">Sử dụng thiết bị di động để truy cập nội dung của chúng tôi</li>
                <li className="item">Truy cập và tương tác với bất kỳ trang web và ứng dụng nào của chúng tôi</li>
                <li className="item">Thông qua cookie và công nghệ tương tự khác</li>
                <li className="item">Khi bạn liên hệ với chúng tôi qua email, mạng xã hội, ứng dụng của chúng tôi hoặc các công nghệ tương tự</li>
            </ul>
            <h2 className="sub-title">Cách chúng tôi sử dụng dữ liệu cá nhân của bạn</h2>
            <p className="desc">Chúng tôi chỉ sử dụng dữ liệu cá nhân được thu thập thông qua các trang web và ứng dụng của mình khi chúng tôi có lý do chính đáng và cơ sở pháp lý để làm như vậy. Chúng tôi xác định các cơ sở pháp lý dựa trên các mục đích mà chúng tôi đã thu thập dữ liệu cá nhân của bạn.</p>
            <h2 className="sub-title">Cookie và các công nghệ tương tự</h2>      
            <p className="desc">
            Khi bạn truy cập các trang web của chúng tôi hoặc khi bạn sử dụng các ứng dụng của chúng tôi, chúng tôi có thể tự động thu thập dữ liệu cá nhân từ bạn bằng cách sử dụng cookie hoặc các công nghệ tương tự. Cookie là một tệp nhỏ có thể được đặt trên thiết bị của bạn cho phép chúng tôi nhận ra và ghi nhớ bạn.
Chúng tôi sử dụng cookie theo nhiều cách để cải thiện trải nghiệm của bạn trên trang web của chúng tôi, bao gồm:</p>  
            <ul className="list">
                <li className="item">Giữ cho bạn đăng nhập</li>
                <li className="item">Hiểu cách bạn sử dụng trang web của chúng tôi</li>
                <li className="item">Hiển thị cho bạn các nội dung có liên quan đến bạn</li>
            </ul>
            <h2 className="sub-title">Liên hệ với chúng tôi thông qua</h2>
            <ul className="list">
                <li className="item">Gmail: nguyenminhchung437393@gmail.com</li>
                <li className="item">Số điện thoại: 0909.437.393</li>
                <li className="item">Địa chỉ: 106 Đường số 4, Phường 7, Quận 8, TP.HCM</li>
            </ul>
            <h2 className="sub-title">Các thay đổi đối với chính sách bảo mật này</h2>
            <p className="desc">Nếu chúng tôi quyết định thay đổi chính sách bảo mật của mình, chúng tôi sẽ đăng các thay đổi ở đây. Nếu những thay đổi là quan trọng, chúng tôi cũng có thể chọn gửi email cho tất cả người dùng đã đăng ký của chúng tôi với các chi tiết mới Cập nhật lần cuối: ngày 14 tháng 10 năm 2024</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SecurityPolicy
