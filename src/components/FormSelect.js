import React from "react";
import { Form } from "react-bootstrap/";


class FormSelect extends React.Component {
  
    
  updateFormSelectValue = (event) => {
    event.preventDefault();
    let selectValue = event.target.value;
    this.props.renderBasedOnSelectValue(selectValue);
  };


  sort = (event) => {
    event.preventDefault();
    let selectValue = event.target.value;
    this.props.handleSort(selectValue);
  }; 
   
  
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Based on horn numbers</Form.Label>
            <Form.Control
              as="select"
              custom
              id="disabledSelect"
              onChange={this.updateFormSelectValue}
            >
              <option value="default">Display All</option>
              <option value="1">𝐎𝐧𝐞-𝐇𝐨𝐫𝐧</option>
              <option value="2">𝐓𝐰𝐨-𝐇𝐨𝐫𝐧</option>
              <option value="3">𝐓𝐡𝐫𝐞𝐞-𝐇𝐨𝐫𝐧</option>
              <option value="100">【Ｈｉｇｈｅｓｔ】</option>
            </Form.Control>
           
            <Form.Control
              as="select"
              custom
              id="disabledSelect"
              onChange={this.sort}
            >
              <option value="default">Default</option>
              <option value="horns">Horn Numbers "𝙛𝙧𝙤𝙢 𝙝𝙞𝙜𝙝𝙚𝙨𝙩 𝙩𝙤 𝙡𝙤𝙬𝙚𝙨𝙩

"</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FormSelect;