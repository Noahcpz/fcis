import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" 
          style={{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0}}>
          <line x1="150%" y1="0" x2="50%" y2="100%" stroke="#DBC078" strokeWidth="1" opacity="0.25"/>
          <line x1="120%" y1="0" x2="20%" y2="100%" stroke="#DBC078" strokeWidth="1" opacity="0.25"/>
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#DBC078" strokeWidth="1" opacity="0.30"/>
          <line x1="80%" y1="0" x2="-20%" y2="100%" stroke="#DBC078" strokeWidth="1" opacity="0.30"/>
          <line x1="60%" y1="0" x2="-40%" y2="100%" stroke="#DBC078" strokeWidth="1" opacity="0.25"/>
          <line x1="40%" y1="0" x2="-60%" y2="100%" stroke="#DBC078" strokeWidth="1" opacity="0.25"/>
          <line x1="140%" y1="0" x2="40%" y2="100%" stroke="#DBC078" strokeWidth="1" opacity="0.25"/>
        </svg>
        <Header />        
        {children}
        <Footer />
      </body>
    </html>
  )
}