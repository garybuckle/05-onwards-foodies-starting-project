import classes from './meals-grid.module.css';
import MealItem from './meal-item';
export default function MealsGrid({ meals }) {

  return (
    <>
      <ul className={classes.meals}>
        <ul>
          {meals.map((meal) => (
            <li key={meals.id}>
              <MealItem {...meal}/>

            </li>
          ))}

        </ul>
      </ul>
    </>
  );
}
