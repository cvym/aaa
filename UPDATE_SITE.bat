@echo off
echo ==========================================
echo  MISE A JOUR DU SITE SUR GITHUB PAGES
echo ==========================================
echo.

REM Aller dans le dossier
cd /d "%~dp0"

echo [1/3] Verification des changements...
git status

echo.
echo [2/3] Ajout des fichiers modifies...
git add .

echo.
echo [3/3] Commit et push vers GitHub...
git commit -m "Update site - %date% %time%"
git push origin main

echo.
echo ==========================================
echo [SUCCESS] Fichiers envoyes sur GitHub !
echo ==========================================
echo.
echo GitHub Pages va se mettre a jour automatiquement
echo dans 1-2 minutes. Si ca ne marche pas :
echo - Attendez 5 minutes maximum
echo - Videz le cache de votre navigateur (Ctrl+Shift+Del)
echo - Essayez en navigation privee
echo.
echo Votre site : https://cvym.github.io/aaa/
echo.
pause

