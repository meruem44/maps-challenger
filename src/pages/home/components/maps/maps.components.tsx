import React, { useEffect } from "react";
import { AnimatedRegion, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { CarSvg, MarkerSvg } from "../../../../assets/svgs";

import { MapsView } from "./maps.styles";

const ORIGIN = {
  latitude: -20.982103,
  longitude: -47.658799,
};

const DESTINATION = {
  latitude: -20.985903,
  longitude: -47.6610265,
};

const Maps: React.FC = () => {
  const cordinates = new AnimatedRegion({
    latitude: ORIGIN.latitude,
    longitude: ORIGIN.longitude,
  });

  useEffect(() => {
    animateMarker();
  }, []);

  const animateMarker = () => {
    const newCordinates = {
      latitude: DESTINATION.latitude,
      longitude: DESTINATION.longitude,
      duration: 18000,
    };

    cordinates.timing(newCordinates).start();
  };

  return (
    <MapsView
      initialRegion={{
        latitude: ORIGIN.latitude,
        longitude: ORIGIN.longitude,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: -20.985903,
          longitude: -47.6610265,
        }}
      >
        <MarkerSvg />
      </Marker>

      <Marker.Animated coordinate={cordinates}>
        <CarSvg />
      </Marker.Animated>

      <MapViewDirections
        origin={ORIGIN}
        destination={DESTINATION}
        apikey="AIzaSyD2qubDpWs84Gpjk0zorEh7SRlCD1NO1Ro"
        strokeWidth={4}
        strokeColor="#111111"
        strokeColors={["#9722FB", "#3A5DFB"]}
      />
    </MapsView>
  );
};

export { Maps };
