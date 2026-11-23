"use client";
import {useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");         // Email variable
    const [password, setPassword] = useState("");   // Password variable
    const supabase = createClient();
    const router = useRouter();

    async function handleSignUp() {
      const {error} = await supabase.auth.signUp({email, password});
      if (error) {
        alert(error.message);
      } else {
        alert("Account created!");
      }
    }

    async function handleSignIn() {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        alert(error.message);
      } else {
        router.push("/");
      }
    }

  return (
    <main className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Sign In to TaskFlow</h1>

      <input 
        type = "email" 
        placeholder = "Email" 
        value = {email}                       
        onChange = {(e) => setEmail(e.target.value)} 
        className="w-full border p-2 rounded"
        />

       <input
       type = "password"
       placeholder = "Password"
       value = {password}
       onChange = {(e) => setPassword(e.target.value)}
       className = "w-full border p-2 rounded"
       /> 

       <button //Sign in
       onClick = {handleSignIn}
       className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer">
        Sign in
       </button>

       <button 
       onClick = {handleSignUp}
       className="w-full border p-2 rounded cursor-pointer">
        Sign up
       </button>

    
    
    </main>
  );
}