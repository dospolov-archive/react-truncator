import React from 'react'
import '@/styles/index.scss'
import Icon from 'kit/Icon'
import Truncator from 'kit/Truncator'

const App = () => {
  return (
    <div {...{ className: 'p-10 h-screen bg-amber-800 text-xl space-y-5' }}>
      <Truncator>
        <span className="can-truncate bg-amber-600">lorem ipsum</span>
      </Truncator>

      <Truncator>
        <span className="can-truncate bg-lime-600">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget
        </span>
      </Truncator>

      <Truncator>
        <Icon {...{ name: 'HiClock', className: 'h-14 w-14' }} />
        <span className="can-truncate bg-amber-600">
          lorem ipsum dolor sit amet, consectetur adipiscing
        </span>
        <Icon {...{ name: 'HiClock', className: 'h-14 w-14' }} />
      </Truncator>

      <Truncator>
        <Icon {...{ name: 'HiClock', className: 'h-14 w-14' }} />
        <span className="can-truncate bg-amber-600">lorem ipsum dolor</span>
        <Icon {...{ name: 'HiAcademicCap', className: 'h-14 w-14' }} />
        <Icon {...{ name: 'HiAdjustments', className: 'h-14 w-14' }} />
        <Icon {...{ name: 'HiArchive', className: 'h-14 w-14' }} />
        <Icon {...{ name: 'HiAnnotation', className: 'h-14 w-14' }} />
        <Icon {...{ name: 'HiArrowCircleDown', className: 'h-14 w-14' }} />
      </Truncator>

      <Truncator>
        <Icon {...{ name: 'HiClock', className: 'h-14 w-14' }} />
        <span className="can-truncate bg-amber-600">lorem ipsum dolor</span>
        <span className="can-truncate bg-green-600">lorem ipsum dolor</span>
        <Icon {...{ name: 'HiArrowCircleDown', className: 'h-14 w-14' }} />
      </Truncator>
    </div>
  )
}

export default App
