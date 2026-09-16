import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'find · 你有多喜欢TA？', description: '30道情境题，从日常的小反应，看见自己的心意。原创自我探索测试。' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="zh-CN"><body>{children}</body></html>; }
