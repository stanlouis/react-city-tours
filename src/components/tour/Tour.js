import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { city, img, name, info, id } = this.props.tour;
    const { showInfo } = this.state;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span className="close-btn" onClick={() => this.props.deleteTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>

        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleShowInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
