import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

if (typeof window !== "undefined") {
  document.documentElement.classList.remove("dark")
  document.documentElement.classList.add("light")
}

createRoot(document.getElementById("root")!).render(<App />)
