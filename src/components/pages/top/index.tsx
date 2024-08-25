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
import { Contribution } from "@/components/base/Contribution";
import { ContributionProps } from "@/pages";

export const Top = ({ contribution, updateDate } : ContributionProps) => {
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
      {contribution && updateDate ?
      <Contribution contribution={contribution} updateDate={updateDate} />
      : null}
      <div id="donation">
        <DonationInformation />
      </div>
      {/* 画像 */}
      <ImageSlider />
      <Footer />
    </div>
  );
};
