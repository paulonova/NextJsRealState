import { Poppins, Aboreto } from 'next/font/google';
import '../styles/globals.css';
import React from 'react';
import { getMenu } from 'utils/getMenu';
import MainMenu from 'components/Menu';

/**
 * Essue because Server Render Side cause in fontawesome
 */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aboreto',
});

async function rootLayout({ children }) {
  const data = await getMenu();
  console.log('DATA MENU: ', { data });
  return (
    <html lang="en" className={`${poppins.className} ${aboreto.className}`}>
      <body className="font-body">
        <MainMenu
          callToActionDestination={data.callToActionDestination}
          callToActionLabel={data.callToActionLabel}
          items={data.mainMenuItems}
        />
        {children}
      </body>
    </html>
  );
}

export default rootLayout;
