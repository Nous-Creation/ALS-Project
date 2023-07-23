import {
  Header,
  FirstView,
  Profile,
  MedicalOverview,
  DonationUsed,
} from "@/components/base";

export const Top = () => {
  return (
    <div>
      <Header />
      <FirstView />
      <Profile />
      <MedicalOverview />
      <DonationUsed />
    </div>
  );
};
