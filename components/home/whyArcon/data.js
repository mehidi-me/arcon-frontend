import HouseIcon from '@mui/icons-material/House';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StreetviewIcon from '@mui/icons-material/Streetview';

const iconProps = {
    fontSize: '70px',
    color: 'white',
    border: '1px solid white',
    padding: '14px',
    marginRight: '10px'
  }

const ArconData = [
    {   
        id: 1,
        title: 'We Are Pofessional',
        description: 'We develop a full cycle of conry to Loream project documentation.',
        icon: <HouseIcon sx={{...iconProps}}/>
    },
    {   
        id: 2,
        title: 'Honest and Dependable',
        description: 'Our experience and commitment to our customers assure will meet your objectives.',
        icon: <AccessTimeIcon sx={{...iconProps}}/>
    },
    {   
        id: 3,
        title: 'Energy Saving Mathods',
        description: 'Part of experts team to manage commercial and institutional projects.',
        icon: <StreetviewIcon sx={{...iconProps}}/>
    },
]

export default ArconData;