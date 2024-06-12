import Wrapper from "./Wrapper";

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-center">
      <Wrapper>
        <h1 className="text-2xl font-extrabold">Where in the world?</h1>
      </Wrapper>
    </header>
  );
}
