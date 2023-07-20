
import MenuIcon from "@mui/icons-material/Menu";
import {FaUserGraduate} from 'react-icons/fa'
import {PiNotepadBold,PiNotePencilDuotone} from 'react-icons/pi'
import {BiBookReader} from 'react-icons/bi'
import {FaSchool,FaUserShield} from 'react-icons/fa'
import {ImLab} from 'react-icons/im'
import {GiProfit} from 'react-icons/gi'
import {HiUserGroup,HiUsers} from 'react-icons/hi'
import {LuStickyNote} from 'react-icons/lu'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import {RiAdminFill} from 'react-icons/ri'
import {BiChevronLeft} from 'react-icons/bi'

import {SiBookstack} from 'react-icons/si'


export const SidebarData = [
  {
    icon: MenuIcon,
    heading: "Dashboard",
  },
  {
    icon: FaUserGraduate,
    heading: "Students",
  },
  {
    icon: BiBookReader,
    heading: "Teachers",
  },
  {
    icon: PiNotepadBold,
    heading: "Attendence",
    iconn:BiChevronLeft,
  },
  {
    icon: FaSchool,
    heading: 'Academic',
    iconn:BiChevronLeft,
  },
  {
    icon: ImLab,
    heading: 'Exam',
    iconn:BiChevronLeft,
  },

  {
    icon: PiNotePencilDuotone,
    heading: 'Marks & Results',
    iconn:BiChevronLeft,
  },
  {
    icon: GiProfit,
    heading: 'Promotion'
  },
  {
    icon: HiUserGroup,
    heading: 'HRM',
    iconn:BiChevronLeft,
  },
  {
    icon: HiUsers,
    heading: 'Users'
  },

  {
    icon: LuStickyNote,
    heading: 'Reports',
    iconn:BiChevronLeft,
  },

  {
    icon: GiEarthAfricaEurope,
    heading: 'Site',
    iconn:BiChevronLeft,
  },

  {
    icon: RiAdminFill,
    heading: 'Administrator',
    iconn:BiChevronLeft,
  },
];

export const CardData=[
  {
    number:12,
    post:'Student',
    logo:FaUserGraduate,
    bGColor:'orange'
  },

  {
    number:6,
    post:'Teacher',
    logo:BiBookReader ,
    bGColor:'pink'
  },

  {
    number:9,
    post:'Employee',
    logo:FaUserShield ,
    bGColor:'purple'
  },
  {
    number:22,
    post:'Subject',
    logo:SiBookstack,
    bGColor:'skyblue'  
  }
]