import React from "react";
import { useSelector, useDispatch } from "react-redux";
import videoLogIn from "./videoLogIn";
import { logout } from "../redux/slices/videoSlice";
import { Button, Card, CardContent } from "@mui/material";
import "./trainingVideos.css";

const TrainingVideos = () => {
    const videoState = useSelector((state) => state.videos || {});
    const { isAuthenticated = false, videos = [] } = videoState;

    // const { isAuthenticated, videos } = useSelector((state) => state.videos);
    const dispatch = useDispatch();

    if (!isAuthenticated) return <videoLogIn />;

    return (
        <div className="video-section">
            <h2>Training Video Library</h2>

            <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(logout())}
                style={{ marginBottom: 20 }}
            >
                Logout
            </Button>

            <div className="video-grid">
                {videos.map((video) => (
                    <Card key={video.id} className="video-card">
                        <iframe
                            src={video.url}
                            title={video.title}
                            allowFullScreen
                        />
                        <CardContent>
                            <h4>{video.title}</h4>
                            <p>{video.level}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TrainingVideos;
