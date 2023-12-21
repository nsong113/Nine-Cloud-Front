import React from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
}