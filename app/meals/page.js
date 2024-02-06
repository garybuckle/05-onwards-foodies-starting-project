import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious, healthy meals{' '}
          <span className={classes.highlight}>created by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself, this is easy, fun
          and much healthier
        </p>
        <p className={classes.cta}>
          <Link href="./meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
