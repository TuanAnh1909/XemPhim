import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Filter from "../../components/Filter";
import Movies from "../../components/Movies";
import { fetchMovies } from "../../services/services";

interface MainPageProps {

}
const filter = [
  {
    label: 'Thể loại:',
    options: [
      { title: '- Tất cả -', value: '' },
      { title: 'Âm nhạc', value: 'music' },
      { title: 'Bí ẩn', value: 'mystery' },
    ]
  },
  {
    label: 'Thể loại:',
    options: [
      { title: '- Tất cả -', value: '' },
      { title: 'Âm nhạc', value: 'music' },
      { title: 'Bí ẩn', value: 'mystery' },
    ]
  }, {
    label: 'Thể loại:',
    options: [
      { title: '- Tất cả -', value: '' },
      { title: 'Âm nhạc', value: 'music' },
      { title: 'Bí ẩn', value: 'mystery' },
    ]
  }, {
    label: 'Thể loại:',
    options: [
      { title: '- Tất cả -', value: '' },
      { title: 'Âm nhạc', value: 'music' },
      { title: 'Bí ẩn', value: 'mystery' },
    ]
  }, {
    label: 'Thể loại:',
    options: [
      { title: '- Tất cả -', value: '' },
      { title: 'Âm nhạc', value: 'music' },
      { title: 'Bí ẩn', value: 'mystery' },
    ]
  }, {
    label: 'Thể loại:',
    options: [
      { title: '- Tất cả -', value: '' },
      { title: 'Âm nhạc', value: 'music' },
      { title: 'Bí ẩn', value: 'mystery' },
    ]
  },
]
const MainPage: React.FunctionComponent<MainPageProps> = () => {
  const [newMovies, setnewMovies] = useState<any>();
  useEffect(() => {
    fetchMovies().then((response) => setnewMovies(response.data.results))
  }, [])  
  return (
    <section className="bg-black text-white">
      <Container className="pt-5">
        <Filter filterProp={filter} />
        <div className="mt-3">
          <h4 className="bottomBorder" style={{ color: '#b1a21e' }}>PHIM ĐỀ CỬ</h4>
          <Movies movies={newMovies} soluong={6} />
        </div>
        <div className="mt-3">
          <h4 className="bottomBorder" style={{ color: '#b1a21e' }}>PHIM LẺ MỚI CẬP NHẬT</h4>
          <Movies movies={newMovies} soluong={12}/>
        </div>
        <div className="mt-3">
          <h4 className="bottomBorder" style={{ color: '#b1a21e' }}>PHIM BỘ MỚI CẬP NHẬT</h4>
          <Movies movies={newMovies} soluong={12}/>
        </div>
      </Container>
    </section>
  );
}

export default MainPage;