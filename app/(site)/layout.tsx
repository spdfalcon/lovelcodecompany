import FloatingOrder from "../_components/modules/FloatingOrder/FloatingOrder";
import React, { ReactNode } from "react";
import Topbar from "../_components/templates/topbar/Topbar";
import Footer from "../_components/templates/home/Footer/Footer";
import GlobalPortfolioBackground from "../_components/templates/portfolio/GlobalPortfolioBackground";

export default function layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <GlobalPortfolioBackground />

      <div className="relative z-10">
        <Topbar />
        <div>{children}</div>
        <FloatingOrder />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
