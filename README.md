# TableCheck Demo (Next.js 16)

Demo ứng dụng đặt bàn nhà hàng với định tuyến theo ngôn ngữ và khu vực:
- `/:lang/:location`
- Ví dụ: `/en/jp`, `/vi/sg`, `/jp/jp/search`

## Tech Stack

- Next.js `16.2.4` (App Router)
- React `19.2.4`
- TypeScript
- Tailwind CSS `v4`
- MapLibre + `react-map-gl`

## Cấu trúc chính

- `src/app/[lang]/[location]/page.tsx`: trang home theo ngôn ngữ/khu vực
- `src/app/[lang]/[location]/search/page.tsx`: trang tìm kiếm
- `src/proxy.ts`: redirect vào route chuẩn và lưu cookie `NEXT_LANG`, `NEXT_LOCATION`
- `src/components/**`: UI components
- `src/data/**`: mock data
- `src/dictionaries/**`: dictionary JSON (`en`, `jp`, `vi`)

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

Khi vào `/`, proxy sẽ tự redirect theo cookie hoặc mặc định về `en/jp`.

## Script

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Ghi chú

- Project dùng `next/font/google` (`Geist`, `Geist Mono`), nên build cần truy cập được Google Fonts.
- Nếu môi trường CI/offline chặn mạng, `npm run build` có thể fail ở bước fetch font.
