import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";

interface Ikarta {
  center: Array<number>;
  geometry: Array<number>;
}

export function AppMap({
  steckCurrentCity,
  height = "500px",
}: {
  steckCurrentCity: Ikarta;
  height: string;
}) {
  let centerMap = steckCurrentCity.center;
  let geometryMap = steckCurrentCity.geometry;

  return (
    <>
      <YMaps>
        <Map
          defaultState={{
            center: centerMap,
            type: "yandex#map",
            zoom: 16,
          }}
          state={{
            center: centerMap,
            type: "yandex#map",
            zoom: 16,
          }}
          height={height}
          width={"100%"}
        >
          <Placemark
            properties={{
              iconContent: "",
              balloonContentHeader: "iuhuihi",
              balloonContent: "SDFD",
              iconCaption: "«Шашлычный мир»",
            }}
            options={{
              iconColor: "#dd0000",
            }}
            geometry={geometryMap}
          />
          <FullscreenControl />
          {/* <ZoomControl options={{ float: "right" }} /> */}
        </Map>
      </YMaps>

      <style jsx>{``}</style>
    </>
  );
}
