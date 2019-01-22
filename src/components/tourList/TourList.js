import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../tour/Tour';
import { tourData } from '../tourData';

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  handleRemoveTour = id => {
    const { tours } = this.state;
    const updatedTours = tours.filter(tour => tour.id !== id);

    this.setState({ tours: updatedTours });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tour-list">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} deleteTour={this.handleRemoveTour} />
        ))}
      </section>
    );
  }
}
