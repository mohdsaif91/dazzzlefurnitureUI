import React, { useContext } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

import { AdminContext } from "../context/state/AdminState";

export default function AddProduct() {
  const {
    category: { category }
  } = useContext(AdminContext);

  const actualCategory = category === undefined ? [] : category;

  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col md="2" />
          <Col className="mr-4 ml-4">
            <Form>
              <Row form>
                <Col md="6" className="form-group">
                  <label htmlFor="productName">Product Name</label>
                  <FormInput
                    id="productName"
                    type="test"
                    placeholder="Product Name"
                  />
                </Col>
                <Col md="6">
                  <label htmlFor="feInputState">Category</label>
                  <FormSelect id="feInputState">
                    <option>Choose...</option>
                    {actualCategory.map(m => (
                      <option>{m.categoryName}</option>
                    ))}
                  </FormSelect>
                </Col>
              </Row>
              <FormGroup>
                <div className="custom-file mb-3 mt-4">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile2"
                  />
                  <label className="custom-file-label" htmlFor="customFile2">
                    Product Image...
                  </label>
                </div>
              </FormGroup>
              <Button type="submit">Add Product</Button>
            </Form>
          </Col>
          <Col md="2" />
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}