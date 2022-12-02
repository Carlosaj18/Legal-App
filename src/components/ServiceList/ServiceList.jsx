import React from 'react';
import Service from "../OurService/Service";

function serviceList(props) {
  return (
    <div className="container-services">
      {props.service.map((item) => {
        return (
          <Service
            title={item.title}
            description={item.description}
            key={item.id}
          />
        );
      })}
    </div>
  )
}

export default serviceList