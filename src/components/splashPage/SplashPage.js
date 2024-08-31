import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SplashPage = () => {
  const router = useRouter();
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ["Welcome", "Bienvenido", "Bienvenue"];

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); 
    }, 150000); 

    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    const languageTimer = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 600); 

    return () => clearInterval(languageTimer); 
  }, [languages.length]);

  return (
    <div className="container">
      <div className="message">
        {languages[languageIndex]} to Our E-learning
      </div>
      <div className="loading">skillbridge</div>
    </div>
  );
};

export default SplashPage;
