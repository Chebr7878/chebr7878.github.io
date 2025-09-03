Write-Host "Добавляем все файлы в git..." -ForegroundColor Green
git add .

Write-Host "Создаем коммит..." -ForegroundColor Green
git commit -m "Изменение цвета подсветки маркировки с желтого на оранжевый"

Write-Host "Отправляем изменения на GitHub..." -ForegroundColor Green
git push origin main

Write-Host "Готово!" -ForegroundColor Green
Read-Host "Нажмите Enter для продолжения"
