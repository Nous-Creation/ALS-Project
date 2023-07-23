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

export const Top = () => {
  return (
    <div>
      <Header />
      <FirstView />
      <Profile />
      <MedicalOverview />
      <DonationExplanation />
      <DonationUsed />
      <PatientMessage />
      {/* 決済・振込 */}
      <DonationInformation />
      {/* 画像 */}
      <Footer />
    </div>
  );
};
