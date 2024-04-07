'use client'
import TopBar from "@/components/blocks/TopBar"
import BottomBar from "@/components/blocks/BottomBar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import { LuMinus } from 'react-icons/lu'; // Import the minus icon

interface MedicamentProps {
  name: string;
  details1: string;
  details2: string;
  percentage: string;
  buttonIcon?: JSX.Element; // make this optional
  onButtonClick?: () => void; // make this optional
  amount?: number;
  setAmount?: (amount: number) => void;
}

function Medicament({ name, details1, details2, percentage, buttonIcon, onButtonClick, amount, setAmount }: MedicamentProps) {
  return (
    <div className="al-1 fill-x gap-auto pt-4 pb-4 border-b border-slate-300">
      <div className="fill-x al-ver al-1">
        <div><strong>{name}</strong></div>
        <div>{details1}</div>
        <div>{details2}</div>
      </div>
      <div className="al-ver al-3 gap-2">
        <div className="text-teal-600 font-medium">{percentage}</div>
        {amount !== undefined && setAmount !== undefined && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="primary" size="icon" onClick={() => setAmount(amount - 1)}>
              <LuMinus size={16} />
            </Button>
            <span style={{ margin: '0 10px' }}>{amount}</span>
            <Button variant="primary" size="icon" onClick={() => setAmount(amount + 1)}>
              <LuPlus size={16} />
            </Button>
          </div>
        )}
        {buttonIcon && onButtonClick && (
          <Button variant="primary" size="icon" onClick={onButtonClick}>
            {buttonIcon}
          </Button>
        )}
      </div>
    </div>
  );
}



export default function Home() {
  
  const initialMedicaments = [
    { name: "Symprolix", details1: "For relief of common cold symptoms", details2: "Non-drowsy formula", percentage: "67%" },
    { name: "Cefastan", details1: "Antibiotic for bacterial infections", details2: "May cause dizziness", percentage: "71%" },
    { name: "Flexojoint", details1: "Anti-inflammatory for joint pain", details2: "Take with food to reduce stomach upset", percentage: "63%" },
    { name: "Histaclear", details1: "Antihistamine for allergies", details2: "Avoid operating heavy machinery", percentage: "68%" },
    { name: "Headaway", details1: "Analgesic for headaches", details2: "Do not exceed recommended dosage", percentage: "72%" },
    { name: "Acidgone", details1: "Antacid for heartburn relief", details2: "Consult doctor if symptoms persist", percentage: "65%" },
    { name: "Pressurex", details1: "Blood pressure medication", details2: "Monitor blood pressure regularly", percentage: "74%" },
    { name: "Joyvita", details1: "Antidepressant for mood disorders", details2: "May cause weight gain", percentage: "69%" },
    { name: "Calmalife", details1: "Anti-anxiety medication", details2: "Avoid alcohol consumption", percentage: "66%" },
    { name: "Lipodex", details1: "Statin for cholesterol management", details2: "Routine liver function tests recommended", percentage: "70%" },
    { name: "Breathair", details1: "Bronchodilator for asthma", details2: "Use inhaler as directed", percentage: "75%" },
    { name: "Skinshield", details1: "Topical cream for skin irritation", details2: "Keep out of reach of children", percentage: "64%" }
  ];

  interface MedicamentType {
    name: string;
    details1: string;
    details2: string;
    percentage: string;
    amount?: number;
  }

  const [leftMedicaments, setLeftMedicaments] = useState<MedicamentType[]>(initialMedicaments);
  const [rightMedicaments, setRightMedicaments] = useState<MedicamentType[]>([]);

  const handleAdd = (medicament: MedicamentType) => {
    setLeftMedicaments(leftMedicaments.filter(m => m.name !== medicament.name));
    setRightMedicaments([...rightMedicaments, { ...medicament, amount: 1 }]);
  };
  
  const handleRemove = (medicament: MedicamentType) => {
    if (medicament.amount === 1) {
      setRightMedicaments(rightMedicaments.filter(m => m.name !== medicament.name));
      setLeftMedicaments([...leftMedicaments, medicament]);
    } else if (medicament.amount && medicament.amount > 1) {
      setRightMedicaments(rightMedicaments.map(m => m.name === medicament.name && m.amount ? { ...m, amount: m.amount - 1 } : m));
    }
  };
  
  return (
    <div className="al-ver al-1 fill-x fill-y">
      <TopBar page="/appointments/prescribtion"/>
      <div className="al-5 fill-x fill-y gap-6 bg-slate-100 p-6">
        <motion.div initial={{ scale: 1.025 }} animate={{ scale: 1 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="al-ver al-1 fill-x fill-y p-6 gap-6 shadow-sm rounded bg-white">
          <div className="font-normal text-2xl text-slate-800 al-5 gap-auto fill-x">
            Medicaments
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search field..." />
            <Button type="submit" variant="primary">Search</Button>
          </div>
          </div>
          <ScrollArea className="fill-x fill-y w-[100%] al-ver al-5 pr-4">
          {leftMedicaments.map(medicament => (
          <Medicament
            key={medicament.name}
            {...medicament}
            buttonIcon={<LuPlus size={16} />}
            onButtonClick={() => handleAdd(medicament)}
          />
        ))}
          </ScrollArea>
        </motion.div>

        <motion.div initial={{ scale: 1.025 }} animate={{ scale: 1 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="al-ver al-1 fill-x fill-y p-6 gap-6 shadow-sm rounded bg-white">
          <div className="font-normal text-2xl text-slate-800">Prescribtion</div>
          <ScrollArea className="fill-x fill-y w-[100%] al-ver al-5 pr-4">
          {rightMedicaments.map(medicament => (
            <Medicament
              key={medicament.name}
              {...medicament}
              setAmount={(amount: number) => {
                if (amount === 0) {
                  handleRemove(medicament);
                } else {
                  setRightMedicaments(rightMedicaments.map(m => m.name === medicament.name ? { ...m, amount } : m));
                }
              }}
            />
          ))}
          </ScrollArea>
        </motion.div>
      </div>
      <BottomBar/>
    </div>
  );
}

