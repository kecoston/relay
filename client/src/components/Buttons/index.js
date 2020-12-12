import React from "react";
import "./style.css";

export function StartBtn() {
    return <div>
        <button type="button" className="btn btn-success" style={{ letterSpacing: 2.5, marginTop: -10, borderRadius:50 }}>
            START
      </button>

    </div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function DashBtns() {
    return <div>
        <button type="button" className="btn btn-warning" style={{borderRadius: 50}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="white" className="bi bi-pause" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
        </button>
        <button type="button" className="btn btn-danger" style={{borderRadius: 50}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-stop-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fillRule="evenodd" d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z" />
            </svg>
        </button>
        <button type="button" className="btn btn-info" style={{borderRadius: 50}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
            </svg>
        </button>
    </div>;
}

export function UserBtns() {
    return <div>
        <button type="button" className="btn btn-primary">Contacts</button>
        <button type="button" className="btn btn-primary">Activities</button>
    </div>
}