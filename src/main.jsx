import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"tiger","emailId":"tiger@gmail.com","phoneNo":"12345523232","projects":[{"title":"tiger","description":"tiger","technologiesUsed":[],"_id":"67495dc83dd57c60994ec919"}],"resume":"","experiences":[{"companyName":"tiger","role":"tiger","description":"tiger","technologiesUsed":[],"duration":"tiger","_id":"67495dc83dd57c60994ec91a"}],"techStacks":[],"contactDetailsUrls":[],"codingProfilesUrls":[],"certificationsUrls":[],"achievements":[{"title":"tiger","description":"tiger","_id":"67495dc83dd57c60994ec91b"}],"about":"tiger","profilePhoto":"","_id":"67495dc83dd57c60994ec918","createdAt":"2024-11-29T06:23:04.846Z","updatedAt":"2024-11-29T06:23:04.846Z","__v":0}} />
  </StrictMode>,
)
