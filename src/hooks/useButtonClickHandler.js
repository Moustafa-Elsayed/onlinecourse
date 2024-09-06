import { useCallback } from "react";
import { useRouter } from "next/router";

const useButtonClickHandler = (route) => {
  const router = useRouter();
  // routing hook
  const handleButtonClick = useCallback(() => {
    router.push(route);
  }, [route, router]);

  return handleButtonClick;
};

export default useButtonClickHandler;
