import { Col, Row } from "react-bootstrap";

interface FilterProps {
  filterProp : {}[]
}

const Filter: React.FunctionComponent<FilterProps> = ({
  filterProp
}) => {
  return (
    <Row className="bg_main p-3 rounded">
      {filterProp && 
      filterProp.length > 0 && 
      filterProp.map((item:any, index:any) =>
        <Col key={index} lg={2} md={4} sm={6}>
          <div className="w-100">
            <label className='fw-bold mb-1'>{item.label}</label><br />
            <select className='w-100 p-2 pointer rounded filter_item'>
              {item.options.map((option:any, index:any) =>
                <option key={index} value={option.value}>{option.title}</option>
              )}
            </select>
          </div>
        </Col>
      )}
    </Row>
  );
}

export default Filter;