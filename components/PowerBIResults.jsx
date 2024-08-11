import React from 'react';
import Image from 'next/image';

const PowerBIResults = () => {
  return (
    <section id="results" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Power BI Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image src="/1.jpg" alt="Power BI Result 1" width={500} height={300} />
          <Image src="/2.jpg" alt="Power BI Result 2" width={500} height={300} />
          <Image src="/3.jpg" alt="Power BI Result 2" width={500} height={300} />
          <Image src="/4.jpg" alt="Power BI Result 2" width={500} height={300} />
          <Image src="/5.jpg" alt="Power BI Result 2" width={500} height={300} />
          <Image src="/6.jpg" alt="Power BI Result 2" width={500} height={300} />
          <Image src="/7.jpg" alt="Power BI Result 2" width={500} height={300} />
          {/* Add more images as needed */}
        </div>
      </div>
    </section>
  );
};

export default PowerBIResults;
