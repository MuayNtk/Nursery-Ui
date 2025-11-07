import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // เปิดให้เข้าถึงจาก network ได้
    port: 5173,   // จะใช้พอร์ตนี้ (หรือเปลี่ยนตามที่ต้องการ)
  },
})
