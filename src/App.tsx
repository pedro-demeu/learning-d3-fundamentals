import FirstD3Chart from "./Lessons/FirstD3Chart";
import LinePlot from "./Lessons/LinePlot";
import "./reset.css";
export default function App() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <main
      style={{
        backgroundColor: "#111",
        color: "#fdfdfd",
        fontFamily: "sans-serif",
        width: "100%",
        height: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          color: "#fdfdfd",
          paddingTop: "20vh",
        }}
      >
        Learning D3 Fundamentals
      </h1>

      <Container>
        <FirstD3Chart />
      </Container>

      <Container>
        <LinePlot data={data} />
      </Container>
    </main>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      {children}
    </div>
  );
};
