@echo off
echo ==========================================
echo  ABYSSAL WEBSITE - GITHUB UPLOAD
echo ==========================================
echo.

REM Verifier si Git est installe
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Git n'est pas installe !
    echo.
    echo Telecharge Git ici : https://git-scm.com/download/win
    echo Puis relance ce script.
    pause
    exit /b 1
)

echo [OK] Git est installe.
echo.

REM Demander l'URL du repo
set /p REPO_URL="Entre l'URL de ton repo GitHub (ex: https://github.com/username/abyssal-website.git) : "

echo.
echo Initialisation du repository local...
git init

echo Configuration Git...
git config user.name "Abyssal"
git config user.email "abyssal@example.com"

echo Ajout des fichiers...
git add .

echo Commit des fichiers...
git commit -m "Initial commit - Abyssal website"

echo Ajout du remote...
git remote add origin %REPO_URL%

echo Push vers GitHub...
git branch -M main
git push -u origin main

echo.
echo ==========================================
echo [SUCCESS] Site uploade sur GitHub !
echo ==========================================
echo.
echo Maintenant, active GitHub Pages :
echo 1. Va sur ton repo GitHub
echo 2. Clique sur 'Settings'
echo 3. Clique sur 'Pages' dans le menu gauche
echo 4. Source : Deploy from a branch
echo 5. Branch : main / (root)
echo 6. Clique 'Save'
echo.
echo Ton site sera disponible dans 1-2 minutes !
echo.
pause




