/**
 * main-header.js
 * 05-onwards-foodies-starting-project
 *
 * @author garybuckle
 */

import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@assets/logo.png';
export default MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <Image src={LogoImg.src}></Image>
      </Link>
    </header>
  );
};
