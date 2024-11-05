import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white text-center shadow-lg">
        <h1 className="text-3xl font-bold">My Todo Application</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Todo />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
