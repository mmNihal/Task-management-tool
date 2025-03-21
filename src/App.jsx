import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import TaskBrod from "./task/task-bord";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBrod />
      </div>

      <Footer />
    </>
  );
}

export default App;
