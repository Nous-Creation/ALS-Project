import {
  Header,
  FirstView,
  Profile,
  MedicalOverview,
  DonationExplanation,
  DonationUsed,
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
    </div>
  );
};
