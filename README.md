# Angular + Electron Starter

This project contains everything you need to:
- Run Angular on your browser
- Run Angular on Electron
- Package the entire Angular + Electron app
- Create an installer for your Angular + Electron app

## 1. Installation

Make sure you have [git](https://git-scm.com/downloads) and [npm](https://nodejs.org/en/download) installed.

Then run in your favorite Terminal:

```bash
git clone https://github.com/lucyus/angular-electron-starter.git && cd angular-electron-starter && npm install
```

You're ready to go! 🎉

## 2. Run Angular on your browser

Start the Angular development server:
```bash
npm run start:angular
```

Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/).
The application will automatically reload whenever you [modify any Angular source files](./src/angular/).

## 3. Run Angular on Electron

Start both Angular and Electron with one command:
```bash
npm run watch
```

Once ready, the Electron window will appear with your Angular app inside.
The application will automatically reload whenever you [modify any Angular source files](./src/angular/).

> ⚠️ If you [edit Electron source files](./src/electron/), you will need to manually restart the application to see the changes.

## 4. Package the entire Angular + Electron app

To package the entire Angular + Electron app, run:
```bash
npm run package
```

- For Windows builds, the application will be packaged into the [build/electron-forge/MyProject-win32-x64/](./build/electron-forge/MyProject-win32-x64/) folder. You can then run it by opening [build/electron-forge/MyProject-win32-x64/MyProject.exe](./build/electron-forge/MyProject-win32-x64/MyProject.exe).
- For other platforms, the application will be packaged into the [build/electron-forge/MyProject-[platform]/](./build/electron-forge/) folder.

## 5. Create an installer for your Angular + Electron app

To create an installer for your Angular + Electron app, run:
```bash
npm run make
```

- For Windows builds, the application installer will be created in the [build/electron-forge/make/squirrel.windows/x64/](./build/electron-forge/make/squirrel.windows/x64/) folder. You can then execute the installer by opening the `.exe` file inside it.
- For other platforms, the application installer will be created in the [build/electron-forge/make/[maker]/](./build/electron-forge/make/) folder.

## 6. Customization

- In [package.json](./package.json), set your project name, description, version and author(s):
```diff
- "name": "my-project",
+ "name": "your-project-name-here",
```
```diff
- "description": "A starter application using Electron with Angular",
+ "description": "Your project description here",
```
```diff
- "version": "0.0.0",
+ "version": "1.0.0",
```
```diff
  "author": [
    {
-   "name": "MyCompany",
-   "email": "my-company@email.com"
    }
  ],
  "author": [
    {
+     "name": "Your (company) name",
+     "email": "your@email.com"
    }
  ],
```

- In [src/angular/index.html](./src/angular/index.html), set your project title:
```diff
- <title>MyProject</title>
+ <title>Your project name here</title>
```

- In [angular.json](./angular.json), set your project build target:
```diff
  "projects": {
-   "my-project": {
  "projects": {
+   "your-project-name-here": {
```
```diff
  "production": {
-   "buildTarget": "my-project:build:production"
  },
  "development": {
-   "buildTarget": "my-project:build:development"
  }
  "production": {
+   "buildTarget": "your-project-name-here:build:production"
  },
  "development": {
+   "buildTarget": "your-project-name-here:build:development"
  }
```

- In [forge.config.js](./forge.config.js), set your project name and copyright:
```diff
- name: 'MyProject',
+ name: 'Your project name here',
```
```diff
- appCopyright: 'Copyright © 2026 MyCompany',
+ appCopyright: 'Copyright © 2026 Your (company) name',
```

## 7. Discover

Here are some files you might want to take a look at to start customizing the project for your needs:

- Main Angular files:
  - [Entrypoint](./src//angular/main.ts)
  - [Root Component](./src/angular/modules/main/components/main-root/main-root.component.ts)
  - [Home Component](./src/angular/modules/main/components/main-home/main-home.component.ts)
  - [Setup Component](./src/angular/modules/setup/components/setup-home/setup-home.component.ts)
  - [Router](./src/angular/modules/main/routes/all.routes.ts)
  - [Configuration](./src/angular/modules/main/configurations/main.config.ts)
- Main Electron files:
  - [Entrypoint](./src/electron/main.ts)
  - [Application Controller](./src/electron/modules/main/controllers/application/application.controller.ts)
  - [Setup/Installation Controller](./src/electron/modules/setup/controllers/setup/setup.controller.ts)
  - [Preload](./src/electron/preload.ts)
  - [Configuration](./src/electron/modules/common/configuration/common.configuration.ts)
  - [Electron Forge Configuration](./forge.config.js)

## 8. Guides

- [Angular Starter Guide](https://angular.dev/#learn-more)
- [Electron Tutorial](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app)

## 9. Versions

- Angular 20.3.0
- Electron 38.2.2
- Electron Forge 7.10.2
- TypeScript 5.9.2

## 10. License

This project is made under the [Apache 2.0](./LICENSE) license.
