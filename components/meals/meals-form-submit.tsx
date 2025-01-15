"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending} onClick={() => {}}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealsFormSubmit;