@echo off
:: Set up project directories
set AUTH_MFE=auth-mfe
set DASHBOARD_MFE=dashboard-mfe
set VIEWER_MFE=viewer-mfe
set SHARED_COMPONENTS=shared-components
set CONTAINER=container

:: Start each project in a new terminal window
echo Starting Auth Microfrontend...
start cmd /k "cd %AUTH_MFE% && npm start"

echo Starting Dashboard Microfrontend...
start cmd /k "cd %DASHBOARD_MFE% && npm start"

echo Starting Viewer Microfrontend...
start cmd /k "cd %VIEWER_MFE% && npm start"

echo Starting Shared Components Microfrontend...
start cmd /k "cd %SHARED_COMPONENTS% && npm start"

echo Starting Container Microfrontend...
start cmd /k "cd %CONTAINER% && npm start"

echo All projects are starting. Press any key to exit.
pause
exit
