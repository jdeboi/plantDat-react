import React, { useState } from 'react';
import PlantCard from './PlantCard'
import PlantData from './PlantData'

import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

import {Button} from 'reactstrap';
import './Plant.css';

const Plants = () => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };


  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.this.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 30,
    getSwiper: updateSwiper
  }

  const plantComponents = PlantData.map(plantDatum => <div key={plantDatum.id}><PlantCard plant={plantDatum} /></div>)


  return(
    <div>
      <Button className="btn-sm" onClick={goPrev}>&lt;</Button>
      <Button className="btn-sm" onClick={goNext}>&gt;</Button>
      <Swiper {...params} >
        { plantComponents }
      </Swiper>

    </div>

  )
};




export default Plants
