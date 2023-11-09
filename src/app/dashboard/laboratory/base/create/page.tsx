"use client";
import BaseCreateForm from "~/app/_components/forms/BaseCreateForm";

export default function BasePage() {
  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm">
      <BaseCreateForm />
    </div>
  );
}
