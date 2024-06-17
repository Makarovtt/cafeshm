import { Button } from "@nextui-org/react";
import Link from "next/link";

type CatGoods = {
  id: string;
  category_id: string;
  title: string;
  url: string;
  order_categories: string;
}[];

export function VitrinaMenu({ catGoods }: { catGoods: CatGoods }) {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold my-3 mx-2 pt-10">Меню на вынос</h2>
      {catGoods.map((item) => {
        return (
          <Button
            as={Link}
            href={`#cat-${item.id}`}
            scroll={true}
            variant="light"
            key={item.id}
            className="my-1 w-full justify-start text-lg text-gray-600 font-semibold"
          >
            {item.title}
          </Button>
        );
      })}
    </div>
  );
}
