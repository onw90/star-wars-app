import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <body>
        <div>
          <h1>Hello there!</h1>
        </div>
      </body>
      <Footer />
    </>
  );
};
