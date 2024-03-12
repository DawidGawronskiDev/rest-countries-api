import Container from "./Container";

/* eslint-disable react/prop-types */
const Options = ({ children }) => {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <Container>
        <div className="flex justify-between">{children}</div>
      </Container>
    </div>
  );
};

export default Options;
