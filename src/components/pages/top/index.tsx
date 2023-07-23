import {
  Header,
  FirstView,
  Profile,
  MedicalOverview,
  DonationExplanation,
  DonationUsed,
  PatientMessage,
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
      {/* 画像 */}
      <Footer />
    </div>
  );
};
