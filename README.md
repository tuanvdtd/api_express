# Express.js MongoDB API Server

Một API server được xây dựng với Node.js, Express.js và MongoDB, cung cấp các tính năng quản lý dự án với boards, columns và cards tương tự như Trello.

## ✨ Tính năng chính

- 🔐 **Authentication & Authorization**: JWT tokens với refresh token
- 👥 **User Management**: Đăng ký, đăng nhập, quản lý profile
- 📋 **Board Management**: Tạo và quản lý boards
- 📝 **Column & Card Management**: Quản lý columns và cards trong boards
- 👨‍👩‍👧‍👦 **Team Collaboration**: Mời thành viên vào board
- 📁 **File Upload**: Upload hình ảnh qua Cloudinary
- 📧 **Email Service**: Gửi email qua Resend
- 🔄 **Real-time Updates**: Socket.IO cho cập nhật real-time
- 🛡️ **Security**: CORS, validation, error handling

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary
- **Email Service**: Resend
- **Real-time**: Socket.IO
- **Validation**: Joi
- **Password Encryption**: bcryptjs
- **Development**: Babel, Nodemon, ESLint

## 📋 Yêu cầu hệ thống

- Node.js >= 18.x
- MongoDB
- npm hoặc yarn

## 🛠️ Cài đặt và chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/tuanvdtd/api_express.git
cd api_express
```

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### 3. Cấu hình môi trường

Tạo file `.env` trong thư mục root dựa trên file `.env.example`:

```bash
cp .env.example .env
```

Sau đó cập nhật các giá trị trong file `.env` với thông tin thực tế của bạn:

```env
# Database
MONGODB_URI=mongodb://localhost:27017
DATABASE_NAME=your_database_name

# Server
APP_PORT=8017
APP_HOST=localhost
AUTHOR=Your Name
BUILD_MODE=dev

# Website Domains
WEBSITE_DOMAIN_DEV=http://localhost:3000
WEBSITE_DOMAIN_PRODUCTION=https://your-domain.com

# JWT Authentication
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_LIFE=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_LIFE=14d

# Cloudinary (for file upload)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Resend (for email service)
RESEND_API_KEY=your_resend_api_key
```

### 4. Chạy ứng dụng

#### Development mode
```bash
npm run dev
```

#### Production mode
```bash
npm run production
```

#### Build project
```bash
npm run build
```

## 📚 API Endpoints

### Authentication
- `POST /v1/users/register` - Đăng ký tài khoản
- `POST /v1/users/login` - Đăng nhập
- `DELETE /v1/users/logout` - Đăng xuất
- `PUT /v1/users/refresh_token` - Refresh access token

### User Management
- `GET /v1/users/profile` - Lấy thông tin profile
- `PUT /v1/users/update` - Cập nhật thông tin user

### Board Management
- `POST /v1/boards` - Tạo board mới
- `GET /v1/boards` - Lấy danh sách boards
- `GET /v1/boards/:id` - Lấy chi tiết board
- `PUT /v1/boards/:id` - Cập nhật board
- `DELETE /v1/boards/:id` - Xóa board

### Column Management
- `POST /v1/columns` - Tạo column mới
- `PUT /v1/columns/:id` - Cập nhật column
- `DELETE /v1/columns/:id` - Xóa column

### Card Management
- `POST /v1/cards` - Tạo card mới
- `PUT /v1/cards/:id` - Cập nhật card
- `DELETE /v1/cards/:id` - Xóa card

### Invite Users
- `POST /v1/invitations/board` - Mời user vào board

## 🔧 Scripts

- `npm run dev` - Chạy ở development mode với hot reload
- `npm run build` - Build project cho production
- `npm run production` - Chạy ở production mode
- `npm run lint` - Kiểm tra code style với ESLint
- `npm run clean` - Xóa thư mục build

## 📁 Cấu trúc thư mục

```
src/
├── config/          # Cấu hình database, CORS, environment
├── controllers/     # Controllers xử lý request
├── middlewares/     # Middlewares (auth, error handling, validation)
├── models/          # MongoDB models
├── providers/       # External service providers
├── routes/          # API routes
├── services/        # Business logic services
├── sockets/         # Socket.IO handlers
├── utils/           # Utility functions
├── validations/     # Request validation schemas
└── server.js        # Entry point
```

## 🤝 Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm thông tin.

## 👨‍💻 Author

- **tuanvdtd** - [GitHub Profile](https://github.com/tuanvdtd)

## 🐛 Bug Reports

Nếu bạn phát hiện bug hoặc có đề xuất tính năng mới, vui lòng tạo issue trên GitHub.

## 📞 Liên hệ

Nếu bạn có câu hỏi về dự án, vui lòng liên hệ qua GitHub issues.