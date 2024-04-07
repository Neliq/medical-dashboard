'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import React from "react"
import { LuChevronsDown, LuChevronsUp  } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TbGenderMale } from "react-icons/tb"
import TopBar from "@/components/blocks/TopBar"
import BottomBar from "@/components/blocks/BottomBar"

const accordionItems = [
  { value: 'item-12', title: 'Routine Control in Saint Louis Hospital', date: '12/12/2022', answer: 'During the visit, blood pressure was checked and found to be normal.' },
  { value: 'item-11', title: 'Emergency Visit in City Hospital', date: '12/11/2022', answer: 'During the visit, the patient was advised to undergo physiotherapy for faster recovery.' },
  { value: 'item-10', title: 'Routine Control in General Hospital', date: '12/10/2022', answer: 'During the visit, the patient was advised to continue medication for the next few months.' },
  { value: 'item-9', title: 'Follow-up Visit in Saint Louis Hospital', date: '12/09/2022', answer: 'During the visit, the patient was given a clean bill of health and advised to continue with regular check-ups.' },
  { value: 'item-8', title: 'Emergency Visit in Central Hospital', date: '12/08/2022', answer: 'During the visit, a surgery was performed successfully.' },
  { value: 'item-7', title: 'Routine Control in City Hospital', date: '12/07/2022', answer: 'During the visit, a MRI scan was done and it showed some concerns.' },
  { value: 'item-6', title: 'Follow-up Visit in General Hospital', date: '12/06/2022', answer: 'During the visit, a CT scan was done and it revealed a minor issue.' },
  { value: 'item-5', title: 'Emergency Visit in Saint Louis Hospital', date: '12/05/2022', answer: 'During the visit, an X-ray was taken and it showed no abnormalities.' },
  { value: 'item-4', title: 'Routine Control in Central Hospital', date: '12/04/2022', answer: 'During the visit, a consultation with the specialist was done and further tests were recommended.' },
  { value: 'item-3', title: 'Follow-up Visit in City Hospital', date: '12/03/2022', answer: 'During the visit, a physical examination was conducted and no issues were found.' },
  { value: 'item-2', title: 'Emergency Visit in General Hospital', date: '12/02/2022', answer: 'During the visit, routine blood tests were done and all results were within the normal range.' },
  { value: 'item-1', title: 'Routine Control in Saint Louis Hospital', date: '12/01/2022', answer: 'During the visit, blood pressure was checked and found to be normal.' },
];

const AccordionSection = ({items, openItems, setOpenItems}: {items: any[], openItems: string[], setOpenItems: React.Dispatch<React.SetStateAction<string[]>>}) => (
  <ScrollArea className="pr-4 fill-x fill-y al-ver al-1">
    <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
      {items.map(item => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger>
            <div className="al-5 gap-2 pr-2">
              <span>{item.title}</span>
              <Badge variant="outline">{item.date}</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </ScrollArea>
);

export default function Appointments() {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const allItemValues = accordionItems.map(item => item.value);

  const toggleAllItems = () => {
    if (openItems.length > 0) {
      setOpenItems([]);
    } else {
      setOpenItems(allItemValues);
    }
  };

  return (
    <div className="al-ver al-1 fill-x fill-y">
    <TopBar page="/appointments/patient"/>
    <div className="al-5 fill-x fill-y gap-6 bg-slate-100 p-6">
        <motion.div initial={{ scale: 1.025 }} animate={{ scale: 1 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="al-ver fill-x fill-y p-6 gap-6 shadow-sm rounded bg-white">
          <div className="gap-auto al-1 font-normal text-2xl text-slate-800">
            Medical history
            <Button 
              variant='secondary' 
              onClick={toggleAllItems} 
              className={`al-5 gap-2 ${openItems.length > 0 ? 'text-teal-600 font-medium border-teal-600 bg-teal-50' : ''}`}
            >
              <span>{openItems.length > 0 ? 'Close all' : 'Open all'}</span>
              {openItems.length > 0 ? <LuChevronsUp size={16} /> : <LuChevronsDown size={16} />}
            </Button>
          </div>
          <AccordionSection items={accordionItems} openItems={openItems} setOpenItems={setOpenItems} />
        </motion.div>

        <div className="al-ver al-5 fill-x fill-y gap-6">
        <motion.div initial={{ scale: 1.025 }} animate={{ scale: 1 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="al-ver al-1 fill-x fill-y gap-6 p-6 shadow-sm rounded bg-white">
          <div className="al-1 gap-2 font-normal text-2xl text-slate-800">Patient info</div>
            <div className="al-5 gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="al-1 al-ver">
                Cameron Williamson
                <div className="al-5 gap-2">
                <TbGenderMale size={16} color="2563EB" />
                58
              </div>
            </div>
          </div>
          <div className="al-5 gap-2">
            +48 601 821 907 <br/>
            cameron.williamson@gmail.com <br/>
            4517 Washington Ave. Menchester, Kentucky 39495 <br/>
          </div>
        </motion.div>
        <motion.div initial={{ scale: 1.025 }} animate={{ scale: 1 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="al-ver al-1 fill-x fill-y gap-6 shadow-sm rounded bg-white">
          <div className="p-6 gap-2 al-ver al-1 font-normal text-2xl text-slate-800">Appointment info</div>
        </motion.div>
        </div>
    </div>
    <BottomBar/>
    </div>
  );
}
