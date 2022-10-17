import { Container } from "react-bootstrap";
import fbg from '../../assets/Images/footer-bg.jpg'
import {BsEnvelope} from 'react-icons/bs'
import {FaFacebookF,FaTelegramPlane} from 'react-icons/fa'
interface FooterProps {

}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer className="p-5">
      <Container>
        <strong className="text-white">Phim chất lượng cao online của XemPhim khác gì so với các trang phim khác?</strong>
        <ul style={{listStyle:'circle'}} className='benefit mt-4'>
          <li>Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất</li>
          <li>Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim online thông thường - đây là yếu tố quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân giải)</li>
          <li>Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả Youtube)</li>
          <li>Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao</li>
          <li>Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem online</li>
          <li>Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh & tiếng Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề phim</li>
        </ul>
        <div className="d-flex justify-content-end">
          <div className="d-flex justify-content-between" style={{width:'10rem'}}>
            <a href="#" className="contact rounded-circle d-flex justify-content-center align-items-center fs-4"><BsEnvelope></BsEnvelope></a>
            <a href="#" className="contact rounded-circle d-flex justify-content-center align-items-center fs-4"><FaFacebookF></FaFacebookF></a>
            <a href="#" className="contact rounded-circle d-flex justify-content-center align-items-center fs-4"><FaTelegramPlane></FaTelegramPlane></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;