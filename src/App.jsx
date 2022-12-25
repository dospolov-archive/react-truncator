import React from 'react'
import '@/styles/index.scss'
import Icon from 'kit/Icon'
import Truncator from 'kit/Truncator'

const App = () => {
  return (
    <div {...{ className: 'p-10 bg-gray-600 h-screen space-y-5' }}>
      <h4 {...{ className: 'text-3xl text-white' }}>Content truncator</h4>
      <p {...{ className: 'text-xl text-white' }}>
        <span className="border-4 border-red-800">Red border</span> displayed when content
        is truncated + popover with original content on hover.
      </p>
      <p {...{ className: 'text-xl text-white' }}>
        <span className="border-4 border-green-800">Green border</span> displayed when all
        content is visible + no popover available.
      </p>
      <div
        {...{
          className:
            'p-5 pb-20 space-y-5 resize-x bg-gray-700 overflow-auto text-gray-100 max-w-3xl relative after:content-["Resize_me_→"] after:bottom-2 after:right-5 after:absolute after:text-white'
        }}
      >
        <Truncator>lorem ipsum</Truncator>

        <Truncator>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget
        </Truncator>

        <Truncator>
          <Icon {...{ name: 'HiClock', className: 'h-7 w-7' }} />
          lorem ipsum dolor sit amet, consectetur adipiscing
          <Icon {...{ name: 'HiClock', className: 'h-7 w-7' }} />
        </Truncator>

        <Truncator>
          <Icon {...{ name: 'HiClock', className: 'h-7 w-7' }} />
          lorem ipsum dolor
          <Icon {...{ name: 'HiAcademicCap', className: 'h-7 w-7' }} />
          <Icon {...{ name: 'HiAdjustments', className: 'h-7 w-7' }} />
          <Icon {...{ name: 'HiArchive', className: 'h-7 w-7' }} />
          <Icon {...{ name: 'HiAnnotation', className: 'h-7 w-7' }} />
          <Icon {...{ name: 'HiArrowCircleDown', className: 'h-7 w-7' }} />
        </Truncator>

        <Truncator>
          <Icon {...{ name: 'HiClock', className: 'h-7 w-7' }} />
          <span>lorem ipsum dolor</span>
          <span>lorem ipsum dolor</span>
          <Icon {...{ name: 'HiArrowCircleDown', className: 'h-7 w-7' }} />
        </Truncator>
      </div>
    </div>
  )
}

export default App
