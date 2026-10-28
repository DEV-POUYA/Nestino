import Header from "@/components/templates/header";

function layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default layout;
