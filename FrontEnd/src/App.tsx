import { Route, Routes } from "react-router-dom";

// Layout
import { Layout} from "./View/components/layout/layout"

// Page
import { MenuPage } from "./View/MenuPage";
import { NotFound } from "./View/NotFound";
import { HomePage } from "./View/HomePage";
import { AboutPage } from "./View/AboutPage";
import { ProfilePage } from "./View/ProfilePage";
import { PersonalPage } from "./View/PersonalPage";
import { UserLogin } from "./View/components/user_login_reg/user_login";


function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="home" element={<HomePage />}/>
            <Route path="menu" element={<MenuPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="profile" element={<UserLogin/>}/>
            <Route path="profile/:id" element={<ProfilePage/>}/>
            <Route path="personal" element={<PersonalPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
)
}

export default App
