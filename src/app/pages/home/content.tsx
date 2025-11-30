import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const FeatureCard = [
  {
    icon: AdminPanelSettingsOutlinedIcon,
    title: "Private Workspaces",
    description:
      "Each company gets their own secure, isolated workspace. Your data stays completely private and separate from other organizations.",
  },
  {
    icon: Diversity3OutlinedIcon,
    title: "Smart Role Management",
    description:
      "Assign team members as Admins, Editors, or Viewers. Control exactly who can create, modify, or view your workflows.",
  },
  {
    icon: BoltOutlinedIcon,
    title: "Simple & Powerful",
    description:
      "Get started in minutes. Add team members, organize workflows, and start collaborating without the learning curve.",
  },
  {
    icon: HttpsOutlinedIcon,
    title: "Enterprise Security",
    description:
      "Your data is protected with enterprise-grade encryption, secure authentication, and regular security updates.",
  },
  {
    icon: PeopleAltOutlinedIcon,
    title: "Built for Teams",
    description:
      "Designed specifically for team collaboration. Everyone stays on the same page with clear roles and responsibilities.",
  },
  {
    icon: GridViewOutlinedIcon,
    title: "Clear Overview",
    description:
      "Dashboard gives you instant visibility into your team, workflows, and activity at a glance.",
  },
];

const StartingSteps = [
  {
    icon: true,
    description:
      "Create your company account in under 2 minutes. Provide your company name, email, and secure password.",
    title: "Sign Up",
  },
  {
    icon: true,
    description:
      "Set up your private workspace to control tasks, manage projects, and keep everything organized in one place.",
    title: "Create Workspace",
  },
  {
    icon: true,
    description:
      "Invite team members and assign appropriate roles. Define who can create, edit, or view your workflows.",
    title: "Add Your Team",
  },
  {
    icon: false,
    description:
      "Build and manage your workflows efficiently. Your team is now ready to collaborate and succeed together!",
    title: "Start Collaborating",
  },
];

const TaskNestSolution = [
  {
    icon: ApartmentOutlinedIcon,
    title: "Centralized Workspace",
    description:
      "Everything in one place. All workflows, tasks, and data unified.",
  },
  {
    icon: AssignmentTurnedInOutlinedIcon,
    title: "Clear Role Management",
    description:
      "Define roles precisely. Everyone knows their responsibilities.",
  },
  {
    icon: VerifiedUserOutlinedIcon,
    title: "Enterprise Security",
    description: "Bank-level encryption and granular access controls.",
  },
];

export { FeatureCard, StartingSteps, TaskNestSolution };
