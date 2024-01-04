'use client'

import { parseAsInteger, useQueryState } from 'nuqs'

export default function BasicCounterDemoPage() {
  const [counter, setCounter] = useQueryState(
    'counter',
    parseAsInteger.withDefault(0)
  )

  return (
    <>
      <h1>Basic counter</h1>
      <p>
        <em>State is stored in the URL query string</em>
      </p>
      <nav style={{ display: 'flex', gap: '4px' }}>
        <button
          style={{ padding: '2px 12px' }}
          onClick={() => setCounter(x => x - 1)}
        >
          -
        </button>
        <button
          style={{ padding: '2px 12px' }}
          onClick={() => setCounter(x => x + 1)}
        >
          +
        </button>
        <button style={{ padding: '2px 6px' }} onClick={() => setCounter(null)}>
          Reset
        </button>
      </nav>
      <p>Counter: {counter}</p>
      <p>
        <a href="https://github.com/47ng/nuqs/tree/next/packages/docs/src/app/(pages)/playground/basic-counter/page.tsx">
          Source on GitHub
        </a>
      </p>
    </>
  )
}
