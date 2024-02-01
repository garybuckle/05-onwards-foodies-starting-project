/**
 * main-header.js
 * 05-onwards-foodies-starting-project
 *
 * @author garybuckle
 */

import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

import MainHeaderBackground from './main-header-background';
import Navlink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={LogoImg} alt="A picture of a food plate" priority />{' '}
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
