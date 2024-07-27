// components/VideoBanner.js
import React, { useRef, useState } from 'react';
import { Box, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const VideoBanner = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (event) => {
    const newRate = event.target.value;
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  return (
    <Box position="relative" width="100%" height="auto">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        width="100%"
        height="auto"
        muted
        loop
        playsInline
        style={{ objectFit: 'fill' }}
      />
      <Box position="absolute" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
        <IconButton onClick={handlePlayPause} sx={{ color: 'white', fontSize: 50 }}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Box>
      <Box position="absolute" bottom="10px" right="10px">
        <FormControl variant="outlined" size="small">
          <InputLabel>Speed</InputLabel>
          <Select
            value={playbackRate}
            onChange={handleSpeedChange}
            label="Speed"
          >
            <MenuItem value={0.5}>0.5x</MenuItem>
            <MenuItem value={1}>1x</MenuItem>
            <MenuItem value={1.5}>1.5x</MenuItem>
            <MenuItem value={2}>2x</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default VideoBanner;
