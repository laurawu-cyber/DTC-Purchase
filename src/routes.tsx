import { createBrowserRouter } from "react-router";
import LandingPage from "./LandingPage";
import SignInPage from "./components/landing/SignInPage";
import GoogleAuthPage from "./components/landing/GoogleAuthPage";
import PlanSelection from "./app/components/PlanSelection";
import PlaudTeamPage from "./components/landing/PlaudTeamPage";
import NamingPage from "./app/components/NamingPage";
import SelectSeatsPage from "./app/components/SelectSeatsPage";
import StripeCheckoutPage from "./app/components/StripeCheckoutPage";
import PaymentSuccessPage from "./app/components/PaymentSuccessPage";
import InvitePage from "./app/components/InvitePage";
import WelcomePage from "./app/components/WelcomePage";
import TeamWorkspacePage from "./app/components/TeamWorkspacePage";
import PersonalWorkspacePage from "./app/components/PersonalWorkspacePage";
import ChooseWorkspacePage from "./app/components/ChooseWorkspacePage";
import SignInGeneralPage from "./app/components/SignInGeneralPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/sign-in",
    Component: SignInPage,
  },
  {
    path: "/google-auth",
    Component: GoogleAuthPage,
  },
  {
    path: "/plaud-team",
    Component: PlaudTeamPage,
  },
  {
    path: "/plan-selection",
    Component: PlanSelection,
  },
  {
    path: "/create-workspace",
    Component: NamingPage,
  },
  {
    path: "/create-workspace/select-seats",
    Component: SelectSeatsPage,
  },
  {
    path: "/checkout",
    Component: StripeCheckoutPage,
  },
  {
    path: "/payment-success",
    Component: PaymentSuccessPage,
  },
  {
    path: "/invite",
    Component: InvitePage,
  },
  {
    path: "/welcome",
    Component: WelcomePage,
  },
  {
    path: "/home-team",
    Component: TeamWorkspacePage,
  },
  {
    path: "/personal-workspace",
    Component: PersonalWorkspacePage,
  },
  {
    path: "/choose-workspace",
    Component: ChooseWorkspacePage,
  },
  {
    path: "/sign-in-general",
    Component: SignInGeneralPage,
  },
]);
