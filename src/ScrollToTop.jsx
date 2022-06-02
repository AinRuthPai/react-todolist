import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //   pathname을 인식할 수 있게 하려면 ScrollToTop 컴포넌트를 꼭 Router 안에 넣어 줘야 한다.

  return null;
}
