import React, { Component } from "react";
import "./App.css";
import Product from "./Product";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Route, Link } from "react-router-dom";
import About from "./About";

const api_url = "https://my.api.mockaroo.com/test.json?key=36ffa4b0";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
          id: 1,
          title: "IPhone",
          price: 799,
          rating: null
        },
        {
          id: 2,
          title: "Galaxy S8",
          price: 699,
          rating: null
        },
        {
          id: 3,
          title: "Galaxy S9",
          price: 799,
          rating: null
        }
      ],
      basket: [],
      isLoading: false,
      filterText: ""
    };
    // frage Produktdaten vom API ab:
    // fetch(api_url)
    //   .then(response => response.json())
    //   .then(productData => {
    //     console.log(productData);
    //     this.setState({ productList: productData, isLoading: false });
    //   });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <h1>Shop</h1>
          </Toolbar>
        </AppBar>

        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link>

        <Route path="/about" component={About} />

        <Route
          path="/"
          exact
          render={() => {
            return (
              <div>
                <TextField
                  label="Filter..."
                  margin="normal"
                  value={this.state.filterText}
                  onChange={this.handleFilterChange}
                />
                {this.state.productList
                  .filter(product =>
                    product.title
                      .toLowerCase()
                      .includes(this.state.filterText.toLowerCase())
                  )
                  .map(product => (
                    <Product
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      rating={product.rating}
                      onRatingChange={this.handleRatingChange}
                      onAddToBasket={this.handleAddToBasket}
                      key={product.id.toString()}
                    />
                  ))}
                <div>Gesamtsumme: {this.getTotal()}€</div>
              </div>
            );
          }}
        />
      </div>
    );
  }

  handleFilterChange = changeEvent => {
    // neuen inhalt des filter-inputs in den state übernehmen
    this.setState({ filterText: changeEvent.target.value });
  };

  handleRatingChange = (productId, newRating) => {
    this.setState({
      productList: this.state.productList.map(product => {
        if (product.id === productId) {
          // product mit geändertem rating zurückgeben
          product.rating = newRating;
        }
        return product;
      })
    });
  };

  handleAddToBasket = productId => {
    this.setState({ basket: [...this.state.basket, productId] });
  };

  getTotal = () => {
    let total = 0;
    for (let productId of this.state.basket) {
      let productArray = this.state.productList.filter(
        productCandidate => productCandidate.id === productId
      );
      let product = productArray[0];
      total += product.price;
    }
    return total;
  };
}

export default App;
