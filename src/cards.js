import React from 'react';
import { Button } from 'react-bootstrap'
import { Card } from '@material-ui/core';
import Col from 'react-bootstrap/Col';
import { data } from '../../../data'


const Product = () => (


  <Col xs={12} md={6} lg={4} key={data.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.content}
        </Card.Text>
        <Button variant="primary" onClick={this.state.clickCounter}>Like</Button>
        <Button>Add to favs</Button>
      </Card.Body>
    </Card>
  </Col>
)

export default Product;