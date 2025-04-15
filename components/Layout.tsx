import Navbar from "./Navbar";
import Container from "./Container";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "2rem" }}>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
