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
    <Container>
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
      {/* 決済・振込 */}
      <DonationInformation />
      {/* 画像 */}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  scroll-padding-top: 0;
`;
