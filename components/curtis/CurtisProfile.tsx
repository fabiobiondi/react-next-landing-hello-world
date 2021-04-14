import React  from 'react';
import Image from 'next/image'

interface CurtisProps {
  title: string;
}
export const CurtisProfile: React.FC<CurtisProps> = (props) => {
  return <div>
    <h1>Ciao Sono {props.title}</h1>
    <Image
      src="/images/giulia.png"
      width={200}
      height={200}
    />
  </div>
};
