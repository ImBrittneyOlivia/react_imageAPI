import React from "react";
import { render } from "react-dom";

let apiUrl = `https://jsonplaceholder.typicode.com/photos`;

class App extends React.Component {
  state = {
    pictures: [],
    title: "",
    errors: null
  };

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({
          pictures: json.filter((picture, index) => index < 20)
        });
      })
      .catch(err =>
        this.setState({
          errors: err
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.pictures.map(pic => (
          <img key={pic.id} src={pic.thumbnailUrl} alt={pic.title} />
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
