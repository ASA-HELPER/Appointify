import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinners";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyConsultant from "./pages/ApplyConsultant";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/Admin/Users";
import Consultants from "./pages/Admin/Consultants";
import Profile from "./pages/Consultant/Profile";
import BookingPage from "./pages/BookingApp";
import Appointments from "./pages/Appointments";
import ConsultantAppointments from "./pages/Consultant/ConsultantAppointment";

function App() {
  const {loading} = useSelector(state=>state.alerts);
  return (
    <>
      <BrowserRouter>
      {loading? (<Spinner/>):(
          <Routes>
            <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />          
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route path="/apply-consultant" element={<ProtectedRoute><ApplyConsultant/></ProtectedRoute>} />
            <Route path="/notification" element={<ProtectedRoute><NotificationPage/></ProtectedRoute>} />
            <Route path="/appointments" element={<ProtectedRoute><Appointments/></ProtectedRoute>} />
            <Route path="/consultant-appointments" element={<ProtectedRoute><ConsultantAppointments/></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute><Users/></ProtectedRoute>} />
            <Route path="/admin/consultants" element={<ProtectedRoute><Consultants/></ProtectedRoute>} />
            <Route path="/consultant/profile/:id" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
            <Route path="/consultant/book-appointment/:consultantId" element={<ProtectedRoute><BookingPage/></ProtectedRoute>} />
          </Routes>
      )}
        </BrowserRouter>
    </>
  );
}

export default App;
