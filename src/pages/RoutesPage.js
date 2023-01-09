import React from "react";
import ImgCard from "../components/ImgCard";

export default function RoutesPage() {
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 pt-5 mx-14">
      <ImgCard
        title="East Roswell Park"
        description="Great running routes, Open fields for soccer , football and baseball"
        picture="/eastroswell.jpg"
        link="https://www.roswellgov.com/Home/Components/FacilityDirectory/FacilityDirectory/34/1944?selamenityid=34"
      />
      <ImgCard
        title="Chastain Park"
        description="Great running routes,football and baseball"
        picture="chastain.jpg"
        link="https://www.chastainparkconservancy.org/visit-us"
      />
    </div>
  );
}
