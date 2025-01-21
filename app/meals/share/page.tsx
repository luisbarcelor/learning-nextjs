"use client";

import styles from "./page.module.css";
import ImagePicker from "@/components/images/image-picker";
import { shareMealAction } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { useActionState } from "react";

export default function ShareMealPage() {
  const [shareMealState, shareMealDispatch] = useActionState(shareMealAction, {
    message: "",
  });

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMealDispatch}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Upload an image" name="image" />
          {shareMealState.message && <p>{shareMealState.message}</p>}
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
