import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

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

const AccordionSection = ({items}: {items: any[]}) => (
    <ScrollArea className="h-0 flex pr-[16px] flex-col items-start flex-grow flex-shrink-0 flex-basis-0 self-stretch">
      <Accordion type="multiple">
        {items.map(item => (
          <AccordionItem value={item.value} key={item.value}>
            <AccordionTrigger>
              <div className="flex items-center space-x-2">
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
  return (
    <div className="flex pt-6 pb-6 justify-center items-center gap-6 flex-[1_0_0] self-stretch px-6 bg-slate-100">
      <div className="w-[50%] h-[100%] flex p-6 flex-col items-start gap-6 shadow-sm rounded bg-white">
        <div className="flex items-center gap-2 self-stretch font-normal text-2xl text-slate-800">Medical history</div>
        <AccordionSection items={accordionItems} />
      </div>

      <div className="w-[50%] h-[100%] flex p-6 flex-col items-start gap-6 shadow-sm rounded bg-white">
        <div className="flex items-center gap-2 self-stretch font-normal text-2xl text-slate-800">Medical history</div>
      </div>
    </div>
  );
}
