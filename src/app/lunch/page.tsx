import { Actions } from "@/components/actions/actions";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Lunch } from "@/components/lunch/lunch";
import { Vitrina } from "@/components/vitrina/vitrina";
import axios from "axios";

export default async function LunchPage() {
  return (
    <>
      <Header />
      <Lunch />
      <Footer className="" />
    </>
  );
}
