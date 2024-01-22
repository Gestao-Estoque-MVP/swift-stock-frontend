import AosContainer from '@/components/AOS/Aos';
import './globals.css';
import type { Metadata } from 'next';
import { ApolloWrapper } from '@/components/ApolloProvider/ApolloProvider';
import MenuLayout from '@/components/MenuLayout/MenuLayout';
import ToastContainerComponent from '@/components/ToastContainer/ToastContainer';
import 'aos/dist/aos.css';

export const metadata: Metadata = {
  title: 'Swift Stock',
  description: 'Gerencie seus estoques de maneira fácil e funcional',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/avatar/logoIcon.svg"/>
      </head>
      <body className="font-default-font">
        <AosContainer/>
        <ApolloWrapper>
          <MenuLayout>
            {children}
          </MenuLayout>
          <ToastContainerComponent/>
        </ApolloWrapper>
      </body>
    </html>
  );
}
