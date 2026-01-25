import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../utils/auth"

const LogoutPage: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    logoutUser()

    navigate("/LoginPage", { replace: true })
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Logging you out...
    </div>
  )
}

export default LogoutPage
