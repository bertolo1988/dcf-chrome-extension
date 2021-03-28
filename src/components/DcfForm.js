import React, { useState } from "react";
import { Form, Container, Row, Button } from "react-bootstrap";

/* function CrossButton(props){
    return(<Button type="button" className="close" aria-label="Close" onClick={()=>props.removeItem(props.itemKey)}><span aria-hidden="true">&times;</span></Button>)
}
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {todoListItems:[], item:''};
    }
    componentDidMount(){
        chrome.storage.local.get(['todoListItems'], (result)=>{
            const todoListItems = result.todoListItems || [];
            this.setState({todoListItems});
        });
    }
    removeItem(key){
        this.setState((prevState)=>{
            let items = prevState.todoListItems;
            items.splice(key, 1);
            chrome.storage.local.set({todoListItems:items});
            return {todoListItems: items}

        });
    }
    addItem(){
        if(!this.state.item)
            return;
        this.setState((prevState)=>{
            let items = prevState.todoListItems;
            items.push(prevState.item);
            chrome.storage.local.set({todoListItems:items});
            return {todoListItems: items, item:''};
        });
    }
    render(){
        return(
            <div className="card todo-list-container">
                <div className="card-header"><h3 className="card-title">Todo List</h3></div>
                <div className="card-body">
                    <ListGroup className="todo-list">
                        {this.state.todoListItems.length===0 ?
                            <p>Todo list is empty.</p> :
                            this.state.todoListItems.map((l,i) => <ListGroup.Item key={i}>{`${i+1}) ${l}`}<CrossButton itemKey={i} removeItem={this.removeItem.bind(this)}/></ListGroup.Item>)}
                    </ListGroup>
                </div>

                <div className="card-footer">
                    <InputGroup className="mb-3">
                        <FormControl
                            value={this.state.item}
                            placeholder="Task Name"
                            aria-label="Task Name"
                            aria-describedby="basic-addon2"
                            onChange={e=>this.setState({item:e.target.value})}
                        />
                        <InputGroup.Append>
                            <Button disabled={!this.state.item} variant="primary" onClick={this.addItem.bind(this)}>Add</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>)
    }

}

export default TodoList;

export function PairLabelValue(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        type="text"
        onChange={props.onChange}
        value={props.value}
        placeholder={props.label}
      />
    </>
  );
}

 */

function FormRow(props) {
  return (
    <Row className="small-vertical-margin dcf-form-row">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        size="sm"
        step={props.step || "0.01"}
        lang="en"
        type={props.type}
        onChange={(event) => {
          props.handleChange(event.target.value);
        }}
        value={props.value}
      />
    </Row>
  );
}

function DcfForm(props) {
  const [ticker, setTicker] = useState("AAPL");
  const [sharePrice, setSharePrice] = useState(125);
  const [marketCap, setMarketCap] = useState(2108);
  const [cash, setCash] = useState(76.8);
  const [debt, setDebt] = useState(112);
  const [freeCashFlow, setFreeCashFlow] = useState(73.3);
  const [growthRate, setGrowthRate] = useState(0.05);
  const [discountRate, setDiscountRate] = useState(0.1);
  const [terminalMultiple, setTerminalMultiple] = useState(12);

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          props.calculate({
            ticker,
            sharePrice,
            marketCap,
            cash,
            debt,
            freeCashFlow,
            growthRate,
            discountRate,
            terminalMultiple,
          });
          event.preventDefault();
        }}
      >
        <Form.Group controlId="dcfForm">
          <FormRow
            label="Ticker"
            type="text"
            handleChange={(newValue) => {
              setTicker(newValue.toUpperCase());
            }}
            value={ticker}
          />
          <FormRow
            label="Share price ($)"
            type="number"
            handleChange={setSharePrice}
            value={sharePrice}
          />
          <FormRow
            label="Market cap ($B)"
            type="number"
            handleChange={setMarketCap}
            value={marketCap}
          />
          <FormRow
            label="Cash & Equivalents ($B)"
            type="number"
            handleChange={setCash}
            value={cash}
          />
          <FormRow
            label="Total debt ($B)"
            type="number"
            handleChange={setDebt}
            value={debt}
          />
          <FormRow
            label="Free cash flow ($B)"
            type="number"
            handleChange={setFreeCashFlow}
            value={freeCashFlow}
          />
          <FormRow
            label="Terminal multiple"
            type="number"
            step="1"
            handleChange={setTerminalMultiple}
            value={terminalMultiple}
          />
          <FormRow
            label="Discount rate (0.1 = 10%)"
            type="number"
            handleChange={setDiscountRate}
            value={discountRate}
          />
          <FormRow
            label="Growth rate (0.1 = 10%)"
            type="number"
            handleChange={setGrowthRate}
            value={growthRate}
          />
          <Row className="small-vertical-margin">
            <Button variant="primary" type="submit" className="full-width">
              Calculate fair value
            </Button>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default DcfForm;

/* function TodoForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [authorId, setAuthorId] = useState("");
  
    const context = useContext(TodoListContext);
  
    return (
      <>
        <form
          onSubmit={(event) => {
            context.addTodo(title, body, authorId);
            event.preventDefault();
          }}
        >
          <PairLabelValue
            label={"title"}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
          <PairLabelValue
            label={"body"}
            onChange={(event) => {
              setBody(event.target.value);
            }}
            value={body}
          />
          <PairLabelValue
            label={"authorId"}
            onChange={(event) => {
              setAuthorId(event.target.value);
            }}
            value={authorId}
          />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  } */
