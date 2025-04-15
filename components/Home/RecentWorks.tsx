const RecentWorks = () => {
  const projects = [
    {
      title: "Real-Time IDE",
      description:
        "A collaborative coding platform built with Next.js and WebSockets.",
    },
    {
      title: "Satisfactory Megafactory Planner",
      description:
        "A planner tool for optimizing Satisfactory production lines.",
    },
  ];

  return (
    <section style={{ marginTop: "4rem" }}>
      <h2>Recent Works</h2>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {projects.map((proj) => (
          <div
            key={proj.title}
            style={{
              backgroundColor: "var(--secondary-color)",
              padding: "1.5rem",
              borderRadius: "12px",
              width: "300px",
            }}
          >
            <h3 style={{ color: "var(--accent-color)" }}>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
