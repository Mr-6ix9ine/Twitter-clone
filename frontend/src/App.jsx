import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import Sidebar from "./components/common/SideBar";
import RightPanel from "./components/common/RightPanel";
import { Route, Routes } from "react-router-dom";
import NotificationPage from "./pages/notification/Notification";
import ProfilePage from "./pages/profile/ProfilePage";



function App() {
	return (
		<div className='flex max-w-6xl mx-auto'>
      <Sidebar/>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/notification' element={<NotificationPage />} />
				<Route path='/profile/:username' element={<ProfilePage />} />
			</Routes>
      <RightPanel/>
		</div>
	);
}

export default App;