import React, { useState } from 'react'
import Tab from "../components/core/Dashboard/Tab";
import { DSA_TYPE } from '../utils/dsa';
import DataStructures from '../components/core/DSA/DataStructures';
import Algorithms from '../components/core/DSA/Algorithms';

const DSA = () => {
    const [dsaType, setDsaType] = useState(DSA_TYPE.DS)

    const tabData = [
        {
          id: 1,
          tabName: "Data Structures",
          type: DSA_TYPE.DS,
        },
        {
          id: 2,
          tabName: "Algorithms",
          type: DSA_TYPE.ALGO,
        },
      ]

  return (
    
    <div>
      <Tab tabData={tabData} field={dsaType} setField={setDsaType} />
      {
        dsaType=== DSA_TYPE.DS ? <DataStructures /> : <Algorithms />
      }
    </div>
  )
}

export default DSA
