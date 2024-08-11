import React from 'react';
import Image from 'next/image';

const SelectionCriteria = () => {
  return (
    <section id="criteria" className="py-8 ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Selection Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image src="/a.png" alt="Criteria 1" width={500} height={300} />
          <Image src="/b.png" alt="Criteria 1" width={500} height={300} />
          <Image src="/c.png" alt="Criteria 1" width={500} height={300} />
          <Image src="/d.png" alt="Criteria 1" width={500} height={300} />
          <Image src="/e.png" alt="Criteria 1" width={500} height={300} />
          <Image src="/f.png" alt="Criteria 1" width={500} height={300} />
         
          {/* Add more images as needed */}
        </div>
      </div>
    </section>
  );
};

export default SelectionCriteria;
