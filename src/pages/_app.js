import "@/styles/globals.css";
import RootLayout from "./layout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
    const [showing, setShowing] = useState(false);

    useEffect(() => {
        setShowing(true);
      }, []);

      if (!showing) {
        return null;
      }

      if (typeof window === 'undefined') {
        return <></>;
      } else {  
    return (
        <RootLayout>
            {" "}
            <Component {...pageProps} />
        </RootLayout>
    );
}

}
