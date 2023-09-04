import { Outlet,Link } from "react-router-dom";

export default function MainLayout() {
    return (
      <>
        <main>
  
          <header>
            <h1>Pérgamo_ORG</h1>
          </header>
  
          <article>
            <Outlet />
          </article>
  
        </main>
      </>
    )
  }