import React from 'react'

const App = () => {
    return (
        <>
         <h1 >I am suman df dd</h1>
        <button onClick={()=>{
            electron.notificationApi.sendNotification('My Custom Notification');
        }}>Notify</button>
        </>
    )
}

export default App
