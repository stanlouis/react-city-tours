import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../tour/Tour';
import { tourData } from '../tourData';

export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tour-list">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </section>
    );
  }
}
