/** 
    Copyright (C) 2024 Mathys Meunier

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You can receive a copy of the GNU General Public License
    along with this program at "http://mathysmeunier/license".
*/

import ObjectivesInternship from "./ObjectivesInternship";
import ObjectivesPostUniversity from "./ObjectivesPostUniversity";
import ObjectivesSchoolTimeLine from "./ObjectivesSchoolTimeLine";
import ObjectivesPersonal from "./ObjectivesPersonal";
import useVersion from "@/hooks/useVersion";

export default function ObjectivesIndex() {
  const { version } = useVersion()

  return (
    <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 px-5 sm:px-16 md:px-20 lg:px-32 w-full mb-5">
      <h1 className={version === "full" ? "" : "sm:hidden md:block"}>Mes objectifs</h1>
      <div className={version === "full" ? "mt-5 2xl:flex 2xl:space-x-4" : "mt-5 sm:mt-0 md:mt-5 2xl:flex 2xl:space-x-4"}>
        <div>
          <ObjectivesInternship />
          <ObjectivesPostUniversity />
          <ObjectivesPersonal />
        </div>
        <ObjectivesSchoolTimeLine />
      </div>
    </main >
  )
}
