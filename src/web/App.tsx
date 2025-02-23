import { Test } from './Test';

export function App() {
  return (
    <div className="app">
      <h1>Repro steps</h1>
      <ol>
        <li>
          Ensure you are running the server using <code>bun run dev</code>
        </li>
        <li>
          Create a new component file <code>src/web/Test.tsx</code>
          <pre>{`export function Test() {
  return <h2>This is a test component</h2>;
}`}</pre>
        </li>
        <li>
          Import the component in <code>src/web/App.tsx</code>
          <pre>{`import { Test } from './Test';`}</pre>
        </li>
        <li>
          Render <code>{`<Test />`}</code> somehwere in this file
        </li>
        <Test />
        <li>HMR build crashes</li>
      </ol>
    </div>
  );
}

export default App;
