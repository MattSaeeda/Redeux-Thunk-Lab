import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./action";

class RedditChildren extends React.Component {
      componentDidMount() {
          this.props.dispatch(fetchProducts());
      }
  
      render() {
          const  {products} = this.props;
  
         
  
          return (
              <ul>
                  {products.map(child => (
                      <li>{child.title}</li>
                  ))}
              </ul>
          );
      }
  }
  
  const mapStateToProps = state => ({
      products: state.products.items,
      
  });
  
  export default connect(mapStateToProps)(RedditChildren);