import { NextUIProvider } from "@nextui-org/react";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <NextUIProvider>
      <AppRouter />;
    </NextUIProvider>
  );
};
