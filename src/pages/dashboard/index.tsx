import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  WalletIcon,
  PowerIcon,
TableCellsIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import StorageInfoCard from "@site/src/components/Annalytics";
import BilllingsAndSubscription from "@site/src/components/BillingAndSubscription";
import Profile from "@site/src/components/Profile";
import Settings from "@site/src/components/settings";
import Logout from "@site/src/components/logout";
import BandwidthUsage from "@site/src/components/BandWidthUsage";
import ImagesGallery from "@site/src/components/MediaLibrary/Images";
import VideosGallery from "@site/src/components/MediaLibrary/Videos";
import FilesGallery from "@site/src/components/MediaLibrary/Files";
import Layout from "@theme/Layout";

type SidebarItem = {
  id: number;
  icon: React.ReactElement;
  label: string;
  subItems?: string[];
  useAccordion?: boolean;
};

const accordionItems: SidebarItem[] = [
  {
    id: 1,
    icon: <PresentationChartBarIcon className="h-5 w-5" />,
    label: "Dashboard",
    subItems: ["Usage Analytics", "Bandwidth usage",],
    useAccordion: true,
  },
  {
    id: 2,
    icon: <TableCellsIcon className="h-5 w-5" />,
    label: "Media Library",
    subItems: ["Images","Videos","Files"],
    useAccordion: true,
  },
];

const nonAccordionItems: SidebarItem[] = [
  {
    id: 3,
    icon: <WalletIcon className="h-5 w-5" />,
    label: "Billing and Subscription",
  },
  {
    id: 4,
    icon: <UserCircleIcon className="h-5 w-5" />,
    label: "Profile",
  },
  {
    id: 5,
    icon: <Cog6ToothIcon className="h-5 w-5" />,
    label: "Settings",
  },
  {
    id: 6,
    icon: <PowerIcon className="h-5 w-5" />,
    label: "Log Out",
  },
];

function SidebarWithContentSeparator() {
  const [open, setOpen] = useState<number>(0);
  const [selectedContent, setSelectedContent] = useState<React.ReactNode >(<StorageInfoCard />);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleOpen = (value: number) => {
    setOpen((prevOpen) => (prevOpen === value ? 0 : value));
    // // When opening an accordion, set the default content based on the first subitem
    // if (accordionItems.find((item) => item.id === value)?.subItems) {
    //   setSelectedContent(<StorageInfoCard />);
    // }
   
}
const renderAccordionContent = (subItem: string) => {

  // Render the corresponding component based on the selected subitem
  switch (subItem) {
    case "Usage Analytics":
      setSelectedContent( <StorageInfoCard />);
      break;
    case "Bandwidth usage":
      setSelectedContent( <BandwidthUsage />);
      break;
    case "Images":
      setSelectedContent(<ImagesGallery/>);
      break;
    case "Videos":
      setSelectedContent( <VideosGallery />);
      break;
    case "Files":
      setSelectedContent( <FilesGallery />);
      break;
      default:
        break;
  }
  if (isMobileMenuOpen) {
    setMobileMenuOpen(false);
  }
};
const handleItemClick = (label: string) => {
 
  switch (label) {
    case "Billing and Subscription":
      setSelectedContent(<BilllingsAndSubscription />);
      break;
    case "Profile":
      setSelectedContent(<Profile />);
      break;
    case "Settings":
      setSelectedContent(<Settings />);
      break;
    case "Log Out":
      setSelectedContent(<Logout />);
      break;
    default:
      break;
  }
};


  return (
    <Layout>
    <div className="flex subtitle">
    <button
        className="md:hidden right-0 fixed top-10  z-10 p-5 bg-blue-500"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {/* Add your toggle button icon */}
        Toggle
      </button>
    <Card 
 className={`${
  isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
} md:translate-x-0  card-color transition-transform  duration-300 ease-in-out md:duration-0 md:ease-in-out h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed lg:static `}
  >
        <div className="mb-2 p-4">
        <Typography variant="h5" >
          Welcome User Glen
        </Typography>
      </div>
      <List>
        {accordionItems.map((item) => (
          <Accordion
            key={item.id}
            open={open === item.id}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === item.id ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0 " selected={open === item.id}>
              <AccordionHeader onClick={() => handleOpen(item.id)} className="border-0 bg-transparent p-3">
                <ListItemPrefix className="subtitle ">{item.icon}</ListItemPrefix>
                <Typography  className="mr-auto font-normal subtitle ">
                  {item.label}
                </Typography>
              </AccordionHeader>
            </ListItem>
            {item.subItems && (
              <AccordionBody className="py-1">
                <List className="p-0">
                  {item.subItems.map((subItem, index) => (
                    <ListItem className="subtitle" onClick={()=>renderAccordionContent(subItem)}  key={index}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      {subItem}
                    </ListItem>
                  ))}
                </List>
              </AccordionBody>
            )}
          </Accordion>
        ))}
        <hr className="my-2 border-blue-gray-50 " />
        {nonAccordionItems.map((item) => (
          <ListItem className="subtitle"  onClick={()=>handleItemClick(item.label)} key={item.id}>
            <ListItemPrefix
           
            >{item.icon}</ListItemPrefix>
            {item.label}
          </ListItem>
        ))}
      </List>
    </Card>
    <div className="flex-1 p-4 card-color ">
       
        {selectedContent}
      </div>
    </div>
    </Layout>

  );
}

export default SidebarWithContentSeparator;