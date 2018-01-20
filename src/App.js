import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Jumbo from "./components/Jumbo/Jumbo";
import Cards from "./components/Cards/Cards";
// import the img_source from a Json file
import img_source from "./cards_img.json";
//import audio soounds//
import success from "./sounds/light.mp3";
import bad_choice from "./sounds/dont-think-so.mp3";

class App extends Component {
  // Initial States
  state = {
    images_sources: img_source,
    counter: 0,
    Hight_score: 0
  };

  // This funtion handle the click event from the pitures.
  // returns a random array
  // /////////////////////////////////////////

  clickEventHandler = index => {
    // Pull counter
    let new_counter = this.state.counter;
    let higth_score = this.state.Hight_score;
    const temp_array = [...this.state.images_sources];
    let reset = false;

    //alerts to Good Response
    const playGoodAudio = () => {
      let audio = new Audio(success);
      audio.play();
    };
    //alert to bad response
    const playBadAudio = () => {
      let audio = new Audio(bad_choice);
      audio.play();
    };

    const new_card_array = temp_array.map(card => {
      if (card.id === index)
        if (!card.click_state) {
          card.click_state = true;
          new_counter = ++new_counter;
          playGoodAudio();
        } else {
          //If the Card is already pickup
          higth_score = new_counter;
          new_counter = 0;
          console.log("reset the card");
          playBadAudio();
          reset = true;
        }
      return card;
    });
    //This section would determine if the status of the card need to be reset
    if (!reset) {
      this.setState({
        images_sources: new_card_array.sort(() => 0.5 - Math.random()),
        counter: new_counter,
        Hight_score: higth_score
      });
    } else {
      //Procedure to reset the status of the card to all False
      let final_score = 0;
      let reset_array = temp_array.map(card => {
        card.click_state = false;
        return card;
      });
      if (higth_score > this.state.Hight_score) {
        final_score = higth_score;
      } else {
        final_score = this.state.Hight_score;
      }
      this.setState({
        images_sources: reset_array.sort(() => 0.5 - Math.random()),
        counter: 0,
        Hight_score: final_score
      });
    }
  };
  ////////////////////RENDER///////////////////
  render() {
    console.log(this.state);
    // console.log(initialState);
    return (
      <div className="App">
        {/* Here go the Header Portion */}
        <div>
          <Header
            counter={this.state.counter}
            hight_score={this.state.Hight_score}
          />
        </div>
        {/* End the Header Portion */} {/* JUMBO TRON SECTION */}
        <div>
          <Jumbo />
        </div>
        {/* Card sections */}
        <div>
          <div className="container">
            <div className="row">
              {this.state.images_sources.map((card, index) => (
                <Cards
                  key={card.id}
                  image={card.source}
                  click={() => this.clickEventHandler(card.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
