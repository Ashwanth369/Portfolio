const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
    {children}
  </div>
);

export default Container;
