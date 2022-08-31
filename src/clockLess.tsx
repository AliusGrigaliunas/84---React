import React, { useEffect, useState } from 'react'

function ClockLess() {

    const [name, setName] = useState(0)

    useEffect(() => {
        setName(0)
    },[name])
    
    function calculate() {
        const penis = 5;
        setName(penis)
    }

  return (
    <div>
        clockLess
        {name}
    </div>
  )
}

export default ClockLess