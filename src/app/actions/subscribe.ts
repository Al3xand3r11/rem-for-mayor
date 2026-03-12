"use server";

import { supabase } from "@/lib/supabase";

export async function subscribe(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!name || !email) {
    return { success: false, message: "Name and email are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (!supabase) {
    console.log("[Demo mode] New subscriber:", { name, email });
    return {
      success: true,
      message: "Thank you for signing up! We'll keep you updated.",
    };
  }

  const { error } = await supabase
    .from("subscribers")
    .upsert({ name, email }, { onConflict: "email" });

  if (error) {
    console.error("Supabase insert error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }

  return {
    success: true,
    message: "Thank you for signing up! We'll keep you updated.",
  };
}
