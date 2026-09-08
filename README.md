# BakuSafeMap - Чистая карта Азербайджана

Премиум приложение уровня Apple, белый, мягкий, дорогой дизайн. Только Азербайджан.

## Дизайн-система
- Фон #FFFFFF, текст #111111, кнопки #101010, карточки #F5F5F3
- Скругления 20/28/16, тени 0 8 24 rgba(0,0,0,0.06)
- Анимации 500ms bezier(0.25,0.1,0.25,1), haptic feedback
- Шрифт Inter/Manrope 600, 16-18px, letterSpacing -0.2

## Карта
- Только Азербайджан: northEast 41.95,50.8 southWest 38.2,44.5
- minZoom 7.5, maxZoom 19, старт Баку 40.4093,49.8671
- Bounce назад если тянешь за пределы
- Стиль Light Clean без лишних лейблов, 3D здания по кнопке
- Темы: Light Clean (default), Minimal Grey, Satellite

## Онбординг
Splash (белый + лого B, fade 600ms) -> Privacy Sheet (92% высоты, 28px radius, spring damping 20) -> Profile Sheet (аватар 96px, имя, о себе) -> Welcome Sheet -> Карта (fade 800ms)
Все сохраняется в MMKV: hasAcceptedPrivacy, hasCompletedProfile, hasSeenWelcome

## Обновление поверх APK
- package com.bakusafemap.app, versionCode инкремент +1
- allowBackup true, MMKV не удаляется
- При старте fetch https://api.github.com/repos/USERNAME/baku-safe-map/releases/latest
- Если версия новее -> баннер slideDown 500ms "Вышла новая версия..."

## Сборка
```bash
npm install
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```
APK будет в android/app/build/outputs/apk/release/

## GitHub Actions
Пуш в main -> автоматически:
- ставит Node, Java 17, Android SDK
- npm ci, expo prebuild, gradlew assembleRelease
- создает ZIP всего проекта
- заливает APK + ZIP как артефакты
- создает Release v1.0.0

## Лого
Иконка темный скругленный квадрат #1A1A1A, буква B кремовая #E8DCC3, два колоска пшеницы внизу. Есть в /assets/logo/ в размерах 1024,512,192,48, adaptive.

© 2026 BakuSafeMap, Official Author: Спасатель Баку