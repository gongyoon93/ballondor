import type { AppProps } from "next/app";
import styled from "styled-components";

import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
// import Auth from 'src/components/hoc/Auth';
import { GlobalStyle, style } from "../lib/styled";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            staleTime: 600 * 1000, //stale 한 상태를 60분으로 설정, 0인경우 refetchOnMount, refetchOnWindowFocus 등 조건에서 refetch 실행
          },
        },
      })
  );
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={style}>
            <GlobalStyle />
            {/* <Background /> */}
            <Content>
              {/* <Auth> */}
              <Component {...pageProps} />
              {/* </Auth> */}
            </Content>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
