import React from "react";
import MainService from "../components/mainService/mainService";
import VerticalHeader from "../components/verticalHeader/verticalHeader";
import Design from "../components/designs/design";
// import DesignService from "../components/mainService/designService";
import Brand from "../components/brands/brand";
import WorkWithUs from "../components/workWithUs/workWithUs";
import SubFooter from "../components/subFooter/subFooter";
import PathService from "../components/pathService/pathService";

function Service() {
  
  return (
    <div>
      <VerticalHeader />
      <PathService/>
      <MainService />
      {/* <Design /> */}
      {/* <DesignService /> */}
      <Brand />
      <WorkWithUs />
      <SubFooter />
    </div>
  );
}

export default Service;
