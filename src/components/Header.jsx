import Container from "./Container";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header className="px-4 py-8 fixed top-0 left-0 w-full bg-white shadow dark:bg-gray-800">
      <Container>
        <div className="flex justify-between">
          <h1 className="font-extrabold text-2xl">Where in the world?</h1>
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
