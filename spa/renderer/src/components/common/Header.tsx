import React, { useEffect } from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import {
  Minimize as MinimizeIcon,
  Crop54 as MaximizeIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const Header: React.FC = () => {
  const handleMinimize = () => {
    window.electronAPI.window.minimize();
  };

  const handleMaximize = () => {
    window.electronAPI.window.maximize();
  };

  const handleClose = () => {
    window.electronAPI.window.close();
  };

  // Force red background with useEffect as a last resort
  useEffect(() => {
    const forceRedBackground = () => {
      // Find all MUI AppBar elements and force them to be red
      const appBars = document.querySelectorAll('.MuiAppBar-root');
      appBars.forEach((el: any) => {
        el.style.backgroundColor = '#DC143C';
        el.style.backgroundImage = 'none';
      });
      
      const toolbars = document.querySelectorAll('.MuiToolbar-root');
      toolbars.forEach((el: any) => {
        el.style.backgroundColor = '#DC143C';
        el.style.backgroundImage = 'none';
      });
    };

    // Run immediately and after a delay to catch any late renders
    forceRedBackground();
    setTimeout(forceRedBackground, 100);
    setTimeout(forceRedBackground, 500);
  }, []);

  return (
    <div 
      className="MuiAppBar-root"
      style={{ 
        backgroundColor: '#DC143C',
        color: '#ffffff',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        WebkitAppRegion: 'drag',
        userSelect: 'none',
        height: '48px',
        boxSizing: 'border-box',
      }}
    >
      <Box 
        style={{ 
          position: 'absolute', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <img 
          src="/river-plate-logo.svg" 
          alt="River Plate" 
          style={{ 
            width: '24px', 
            height: '24px' 
          }} 
        />
        <Typography 
          variant="h6" 
          component="div" 
          style={{ 
            color: '#ffffff',
            fontSize: '1.25rem',
            fontWeight: 500,
          }}
        >
          Azure Tenant Grapher
        </Typography>
      </Box>
      
      <Box 
        style={{ 
          WebkitAppRegion: 'no-drag', 
          display: 'flex', 
          gap: '8px', 
          marginLeft: 'auto' 
        }}
      >
        <IconButton size="small" onClick={handleMinimize} sx={{ color: '#ffffff' }}>
          <MinimizeIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={handleMaximize} sx={{ color: '#ffffff' }}>
          <MaximizeIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={handleClose} sx={{ color: '#ffffff' }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </div>
  );
};

export default Header;