import { HStack } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from 'react';

const Viz: React.FC = () => {
  const [value, setValue] = useState('Default');

  return (
    <div className=''>
      <RadioGroup onChange={setValue} value={value}>
        <HStack gap='6'>
          <Radio value='Default'>Default</Radio>
          <Radio value='T2DM Status'>T2DM Status</Radio>
          <Radio value='Decade'>Decade</Radio>
          <Radio value='Site'>Site</Radio>
          <Radio value='Splits'>Splits</Radio>
          <Radio value='Clinical'>Clinical</Radio>
          <Radio value='ECG'>ECG</Radio>
          <Radio value='FLIO'>FLIO</Radio>
          <Radio value='OCT'>OCT</Radio>
          <Radio value='OCTA'>OCTA</Radio>
          <Radio value='CFP'>CFP</Radio>
        </HStack>
      </RadioGroup>

      <pre>{value}</pre>
    </div>
  );
};

export default Viz;
