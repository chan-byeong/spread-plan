import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import isDev from "electron-is-dev";

let mainWindow;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 개발 모드면 localhost 서버를, 아니면 빌드된 파일을 로드
  mainWindow.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../../build/index.html")}`
  );

  // 개발 모드일 때만 개발자 도구 열기
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC 통신 예제
ipcMain.handle("ping", async (event, args) => {
  return "pong";
});

// 더 복잡한 IPC 예제
ipcMain.handle("get-data", async (event, args) => {
  // 여기서 데이터베이스 쿼리나 파일 읽기 등 수행
  return {
    success: true,
    data: {
      message: "메인 프로세스에서 가져온 데이터입니다",
      time: new Date().toISOString(),
    },
  };
});
