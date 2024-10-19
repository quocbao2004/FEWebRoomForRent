import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MoreService() {
  return (
    <div>
      <Header/>
        <div className="more-service">
            <div className="main-content">
                <div className="body">
                    <h1 className="title">Dịch Vụ Của Chúng Tôi</h1>
                    <p className="desc">
                    Chúng tôi cung cấp các dịch vụ đa dạng giúp bạn nâng cấp, 
                    cải thiện không gian sống và kinh doanh một cách tiện lợi và nhanh chóng.
                     Với đội ngũ thợ lành nghề, kinh nghiệm lâu năm, chúng tôi cam kết mang đến cho 
                     bạn sự hài lòng về chất lượng và thẩm mỹ. 
                    Các dịch vụ của chúng tôi bao gồm:
                    </p>
                    
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default MoreService;