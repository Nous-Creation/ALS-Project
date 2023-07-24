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
} from "@/components/base";
import { styled } from "styled-components";

export const Top = () => {
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
      <Footer />
    </div>
  );
};
