import { Card, Col, Row } from "react-bootstrap";

// interface movie {
//   img: string,
//   title: string,
//   description: string
// }
interface MoviesProps {
  movies: any[],
  soluong:number
}
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'
const Movies: React.FunctionComponent<MoviesProps> = ({ movies, soluong }) => {
  return (
    <Row>
      {movies &&
        movies.length > 0 &&
        movies.slice(0, soluong).map((movie) =>
          <Col key={movie.id} lg={2} md={3} sm={6}>
            <Card className='bg-black'>
              <Card.Img variant="top" src={`${IMG_PATH}${movie.poster_path}`} className='pointer' />
              <Card.Body className="ps-0">
                <Card.Title className='pointer'>{movie.title}</Card.Title>
                <Card.Text className='pointer'>
                  {movie.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ) 
      }
      
    </Row>
  );
}

export default Movies;