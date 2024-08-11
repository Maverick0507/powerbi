import Navbar from "@/components/Navbar";
import PowerBIResults from "@/components/PowerBIResults";
import SelectionCriteria from "@/components/SelectionCriteria";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Navbar />
    <main className="min-h-screen">
     
        <SelectionCriteria/>
        <PowerBIResults />
      </main>
   </>
  );
}
