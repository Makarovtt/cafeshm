import { Radio, RadioGroup } from "@nextui-org/react";
import { AppMap } from "../contacts/AppMap";
import { DATA_CONTACTS } from "../data/data-contacts";
import { useState } from "react";

const country = DATA_CONTACTS;

export function OrderDeliverySelf({
  setDataDeliverySelf,
}: {
  setDataDeliverySelf: (arg0: string) => void;
}) {
  // const [selected, setSelected] = useState("tatysheva");
  const [geoMap, setGeoMap] = useState(country[0]?.karta);

  function changeGeoMap(e: string) {
    setDataDeliverySelf(e);

    switch (e) {
      case "tatysheva":
        setGeoMap(country[0]?.karta);
        break;

      case "riverstreet":
        setGeoMap(country[1]?.karta);
        break;

      default:
        setGeoMap(country[0]?.karta);
        break;
    }
  }
  return (
    <div
      className="flex flex-col justify-between items-start gap-7
                    sm:flex-row"
    >
      <div
        className="w-full h-auto
                      sm:w-2/5 sm:h-[300px]"
      >
        <div className="ml-2 mt-7 max-w-56">Астрахань</div>
        <hr className="mb-5" />
        <RadioGroup
          label="Откуда удобно забрать заказ"
          color="secondary"
          defaultValue="tatysheva"
          onValueChange={(e) => changeGeoMap(e)}
        >
          <Radio value="tatysheva">{country[0]?.street}</Radio>
          {/* <Radio value="riverstreet">{country[1]?.street}</Radio> */}
        </RadioGroup>
      </div>
      <div className="w-full sm:w-3/5">
        <AppMap steckCurrentCity={geoMap} height={"300px"} />
      </div>
    </div>
  );
}
