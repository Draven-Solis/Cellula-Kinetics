export default function App() {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}meiosis.html`}
      style={{ width: "100%", height: "100vh", border: "none", display: "block" }}
      title="Meiosis Visualization"
    />
  );
}
