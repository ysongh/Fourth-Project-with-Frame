/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'

type State = {
  items: string[]
}

const app = new Frog<{State: State}>({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  initialState: {
    items: []
  },
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            ? `Nice choice.${fruit ? ` ${fruit.toUpperCase()}!!` : ''}`
            : 'Welcome!'}
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button value="apples">Apples</Button>,
      <Button value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/items', (c) => {
  const { inputText, deriveState } = c

  const state = deriveState(previousState => {
    previousState.items.push(inputText || "")
  })

  return c.res({
    image: (
      <div style={{ color: 'black', display: 'flex', flexDirection: 'column', fontSize: 20 }}>
        <h1>List of Items</h1>
        {state.items.map(n => (
          <p key={n}>{n}</p>
        ))}
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter item name..." />,
      <Button>Add</Button>,
    ]
  })
})

export const GET = handle(app)
export const POST = handle(app)
