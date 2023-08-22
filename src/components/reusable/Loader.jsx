import React from 'react'
import { Progress } from '@chakra-ui/react'
const Loader = () => {
  return (
    <div className='css-Loader-div'>
        <Progress size='xs' colorScheme='orange' isIndeterminate />
    </div>
  )
}

export default Loader