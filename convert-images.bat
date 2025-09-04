@echo off
echo Конвертация изображений в WebP формат...
echo.

REM Проверяем, установлен ли ImageMagick
magick --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ОШИБКА: ImageMagick не установлен!
    echo Скачайте и установите ImageMagick с https://imagemagick.org/
    echo После установки перезапустите командную строку
    pause
    exit /b 1
)

echo ImageMagick найден. Начинаем конвертацию...
echo.

REM Создаем папку для оптимизированных изображений
if not exist "public\optimized" mkdir "public\optimized"

REM Конвертируем большие PNG файлы
echo Конвертируем PNG файлы...
magick "public\Анкерныйлист1.png" -quality 85 -define webp:lossless=false "public\Анкерныйлист1.webp"
magick "public\Анкерныйлист2.png" -quality 85 -define webp:lossless=false "public\Анкерныйлист2.webp"
magick "public\Фотооблака.png" -quality 85 -define webp:lossless=false "public\Фотооблака.webp"
magick "public\Трубопереезд улучшенное изображение.png" -quality 85 -define webp:lossless=false "public\Трубопереезд улучшенное изображение.webp"
magick "public\Трубопереезд из раструбных труб.png" -quality 85 -define webp:lossless=false "public\Трубопереезд из раструбных труб.webp"
magick "public\Профиль манжет.png" -quality 85 -define webp:lossless=false "public\Профиль манжет.webp"

REM Конвертируем JPG файлы
echo Конвертируем JPG файлы...
magick "public\вибропрес1.jpg" -quality 85 -define webp:lossless=false "public\вибропрес1.webp"
magick "public\вибропрес2.jpg" -quality 85 -define webp:lossless=false "public\вибропрес2.webp"
magick "public\вибропрес3.jpg" -quality 85 -define webp:lossless=false "public\вибропрес3.webp"
magick "public\Радиальноепрессование1.JPG" -quality 85 -define webp:lossless=false "public\Радиальноепрессование1.webp"
magick "public\Радиальноепрессование2.JPG" -quality 85 -define webp:lossless=false "public\Радиальноепрессование2.webp"
magick "public\Радиальноепрессование3.JPG" -quality 85 -define webp:lossless=false "public\Радиальноепрессование3.webp"
magick "public\Центрифуга 1.JPG" -quality 85 -define webp:lossless=false "public\Центрифуга 1.webp"
magick "public\Центрифуга 2 .JPG" -quality 85 -define webp:lossless=false "public\Центрифуга 2.webp"
magick "public\Центрифуга 3 .JPG" -quality 85 -define webp:lossless=false "public\Центрифуга 3.webp"
magick "public\бетонная поверхность d8eb492aa1c6c8bcd103eef98f5510b8.jpg" -quality 85 -define webp:lossless=false "public\бетонная поверхность.webp"

REM Конвертируем чертежи труб
echo Конвертируем чертежи труб...
magick "public\pipe-type-t-drawing.png" -quality 85 -define webp:lossless=false "public\pipe-type-t-drawing.webp"
magick "public\pipe-type-tb-drawing.png" -quality 85 -define webp:lossless=false "public\pipe-type-tb-drawing.webp"
magick "public\pipe-type-tbp-i-tsp-drawing.png" -quality 85 -define webp:lossless=false "public\pipe-type-tbp-i-tsp-drawing.webp"
magick "public\pipe-type-tf-drawing.png" -quality 85 -define webp:lossless=false "public\pipe-type-tf-drawing.webp"
magick "public\pipe-type-tfp-drawing.png" -quality 85 -define webp:lossless=false "public\pipe-type-tfp-drawing.webp"
magick "public\pipe-type-ts-drawing.png" -quality 85 -define webp:lossless=false "public\pipe-type-ts-drawing.webp"

echo.
echo Конвертация завершена!
echo WebP файлы созданы в папке public
echo.
echo Размеры файлов до и после конвертации:
echo.

REM Показываем размеры оригинальных файлов
echo Оригинальные файлы:
dir "public\*.png" | findstr "png"
dir "public\*.jpg" | findstr "jpg"
dir "public\*.JPG" | findstr "JPG"

echo.
echo WebP файлы:
dir "public\*.webp" | findstr "webp"

echo.
echo Готово! Теперь можно использовать WebP версии изображений.
pause


