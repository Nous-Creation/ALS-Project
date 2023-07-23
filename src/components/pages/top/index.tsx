import {
  Header,
  FirstView,
  Profile,
  MedicalOverview,
  DonationExplanation,
  DonationUsed,
  PatientMessage,
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
    </div>
  );
};
