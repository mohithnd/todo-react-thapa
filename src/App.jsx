import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col">
      <header className="bg-opacity-80 backdrop-blur-md text-white p-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold">My Todo Application</h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <Todo />
      </main>
      <footer className="bg-opacity-80 backdrop-blur-md text-white text-center p-4 shadow-inner">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
