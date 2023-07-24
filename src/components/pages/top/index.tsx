import {
  Header,
  FirstView,
  Profile,
  MedicalOverview,
  DonationExplanation,
  DonationUsed,
  PatientMessage,
  DonationInformation,
  Footer,
  ImageSlider,
} from "@/components/base";
import { useState } from "react";
import { styled } from "styled-components";

export const Top = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };
  return (
    <div>
      <Header />
      <FirstView />
      <Profile />
      <div id="overview">
        <MedicalOverview />
      </div>
      <DonationExplanation />
      <DonationUsed />
      <div id="message">
        <PatientMessage />
      </div>
      <div id="donation">
        <DonationInformation />
      </div>
      {/* 画像 */}
      <ImageSlider />
      <Footer />
    </div>
  );
};
