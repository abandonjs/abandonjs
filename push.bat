@echo off
set /p commit=commit:
title auto commit

rem 调用git命令，如果没有找到git命令，说明环境变量未配置
rem 将git改成git安装目录下的git.exe也可以实现

git add .
git commit -m "%commit%"
git push

pause