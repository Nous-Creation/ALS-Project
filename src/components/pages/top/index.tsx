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
      <ImageSlider />
      <Footer />
    </div>
  );
};
