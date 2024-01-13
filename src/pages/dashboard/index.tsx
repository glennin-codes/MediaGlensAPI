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
  InboxIcon,
  WalletIcon,
  PowerIcon,
TableCellsIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

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
    subItems: ["View Analytics", "Bandwidth usage",],
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

  const handleOpen = (value: number) => {
    setOpen((prevOpen) => (prevOpen === value ? 0 : value));
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
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
            <ListItem className="p-0" selected={open === item.id}>
              <AccordionHeader onClick={() => handleOpen(item.id)} className="border-0 p-3">
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  {item.label}
                </Typography>
              </AccordionHeader>
            </ListItem>
            {item.subItems && (
              <AccordionBody className="py-1">
                <List className="p-0">
                  {item.subItems.map((subItem, index) => (
                    <ListItem key={index}>
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
        <hr className="my-2 border-blue-gray-50" />
        {nonAccordionItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemPrefix>{item.icon}</ListItemPrefix>
            {item.label}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default SidebarWithContentSeparator;