import React from 'react';
import Product from './Product';
import './App.css';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = { Product :
                 {ProductId: '001',
                  ProductName: 'Apple',
                  ProductCategory: 'Fruit',
                  ProductPrice: '10'} };

 this.ProductId = this.ProductId.bind(this);
 this.ProductName = this.ProductName.bind(this);
 this.ProductCategory = this.ProductCategory.bind(this);
 this.ProductPrice = this.ProductPrice.bind(this);

 }


 ProductId(e) {
   this.setState({Product:{ProductId: e.target.value}});
 }
 ProductName(e) {
   this.setState({Product:{ProductName: e.target.value}});
 }
 ProductCategory(e) {
   this.setState({Product:{ProductCategory: e.target.value}});
 }
 ProductPrice(e) {
   this.setState({Product:{ProductPrice: e.target.value}});
 }


 render() {
   return (

<div>

<h1> This is props </h1>

<Product Productvalue={this.state.Product}
         propId={this.ProductId}
         propName={this.ProductName}
         propcate={this.ProductCategory}
         propPrice={this.ProductPrice}  />


</div>

   );
 }
}

export default App;
