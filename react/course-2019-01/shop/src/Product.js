import React from "react";
import Rating from "./Rating";
import Button from "@material-ui/core/Button";

class Product extends React.PureComponent {
  /*
    props:
      id: Number
      title: String
      price: Number
      rating: Number
      inBasket: Boolean
    events:
      onAddToBasket: Function(productId)
      onRatingChange: Function(productId, newRating)
   */
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h4>Preis: {this.props.price}€</h4>
        Bewertung:
        <Rating
          stars={this.props.rating}
          onStarsChange={this.handleStarsChange}
          interactive={true}
        />
        <br />
        <Button onClick={this.handleClick} variant="contained" color="primary">
          In den Warenkorb
        </Button>
      </div>
    );
  }

  handleStarsChange = newRating => {
    this.props.onRatingChange(this.props.id, newRating);
  };

  handleClick = () => {
    this.props.onAddToBasket(this.props.id);
  };
}

export default Product;
