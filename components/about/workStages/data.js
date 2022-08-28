import ApartmentIcon from "@mui/icons-material/ApartmentRounded";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoardRounded";
import SensorWindowIcon from "@mui/icons-material/SensorWindowRounded";
import PendingActionsIcon from "@mui/icons-material/PendingActionsRounded";

const iconProps = {
  fontSize: "70px",
  color: "rgba(24,24,24,.59)",
};

const data = [
  {
    id: 1,
    title: "The Feasibility",
    description:
      "This initial phase of the project includes preliminary studies",
    icon: <ApartmentIcon sx={{ ...iconProps }} />,
  },
  {
    id: 2,
    title: "The Development",
    description:
      "we get into the detail of the scheme. We’ll refine the internal",
    icon: <DeveloperBoardIcon sx={{ ...iconProps }} />,
  },
  {
    id: 3,
    title: "Full Mobilization",
    description: "Once the contractor is appointed, will workshops to review",
    icon: <SensorWindowIcon sx={{ ...iconProps }} />,
  },
  {
    id: 4,
    title: "Post PC Work",
    description:
      "The project concludes will visit site to inspect all the works",
    icon: <PendingActionsIcon sx={{ ...iconProps }} />,
  },
];
export default data;
