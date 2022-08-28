import ApartmentIcon from '@mui/icons-material/Apartment';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import DoorSlidingOutlinedIcon from '@mui/icons-material/DoorSlidingOutlined';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import { TERTIARY_COLOR } from '../../../utils/constants';

const iconProps = {
  fontSize: '4rem',
  color: TERTIARY_COLOR,
};

const servicesData = [
  {
    name: 'Inter Design',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <ApartmentIcon sx={{ ...iconProps }} />,
  },
  {
    name: 'Art Design',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <HouseSidingIcon sx={{ ...iconProps }} />,
  },
  {
    name: 'Interior Work',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <DoorSlidingOutlinedIcon sx={{ ...iconProps }} />,
  },
  {
    name: 'Retail Design',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <BusinessOutlinedIcon sx={{ ...iconProps }} />,
  },
  {
    name: '2D/3D Layouts',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <WindowOutlinedIcon sx={{ ...iconProps }} />,
  },
  {
    name: 'Architecture',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <ArchitectureOutlinedIcon sx={{ ...iconProps }} />,
  },
  {
    name: 'Decoration art',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <HouseboatIcon sx={{ ...iconProps }} />,
  },
];

export default servicesData;
