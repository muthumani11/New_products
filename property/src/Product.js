import React,{ Component} from 'react';




export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products:props.Productvalue
  };
  this.clickevent = this.clickevent.bind(this);

}
clickevent(){
  alert(JSON.stringify(this.props.Productvalue));
}


    render(){
const {Productvalue} = this.props;
console.log(Productvalue);
        return (
          <form >
    <label>
      Product id:
      <input type="text" name="Productvalue" value={Productvalue.ProductId} onChange={this.props.propId} />
    </label><br/>
    <label>
      Product Name:
      <input type="text" name="name" value={Productvalue.ProductName} onChange={this.props.propName} />
    </label><br/>
    <label>
      Product category:
      <input type="text" name="name" value={Productvalue.ProductCategory} onChange={this.props.propcate} />
    </label><br/>
    <label>
      price :
      <input type="text" name="name" value={Productvalue.ProductPrice} onChange={this.props.propPrice} />
    </label><br/>
    <input  type="submit" value="click"  onClick={this.clickevent}/>
  </form>
        );
    }
}


export default Product;
