
# NewsPortal - Modern Newspaper Website

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Inertia.js](https://img.shields.io/badge/Inertia.js-000000?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A full-featured newspaper platform built with Laravel 12, Inertia.js, and React. Features article management, role-based access control, multilingual support, and real-time commenting.


## Features

- **User Authentication** with Laravel Breeze
- **Article Management** Category-based article sections (Entertainment, Business, Travel)
- **Role-Based Access Control** (Admin, Editor, Reader)
- **Multi-language Support** with Spatie Translatable
- **Real-time Comment System**
- **Advanced Search & Filtering**
- **SEO Optimization** with dynamic meta tags
- **Responsive Newspaper Layout**

## Prerequisites

- PHP 8.2+
- Node.js 18+
- Composer 2.5+
- MySQL 8.0+

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/jannatul-faria/newsportal.git
cd newsportal
```

### 2. Install PHP dependencies
```bash
composer install
```

### 3. Install JavaScript dependencies
```bash
npm install
```

### 4. Configure environment
```bash
cp .env.example .env
php artisan key:generate
```

### 5. Configure database
Edit `.env` file with your database credentials:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=newsportal
DB_USERNAME=root
DB_PASSWORD=
```

### 6. Run database migrations and seeders
```bash
php artisan migrate --seed
```

### 7. Build frontend assets
```bash
npm run dev
```

### 8. Start development server
```bash
php artisan serve
```

### 9. Access the application
Open in your browser:  
http://localhost:8000

## Project Structure

```
resources/
├── css/                     # Global CSS files (if any)
├── js/
│   ├── Assets/              # Static assets used in JavaScript components
│   │   ├── css/             # CSS files for components
│   │   ├── fonts/           # Font files
│   │   ├── images/          # Image assets
│   │   ├── IMG_Previews/    # Preview images (if applicable)
│   │   ├── js/              # Additional JavaScript utilities
│   │   └── vendor/          # Third-party vendor scripts
│   ├── Components/          # Reusable React components
│   │   └── Frontend/        # Contains UI components (buttons, inputs, etc.)
│   ├── Layouts/             # Layout components (AuthenticatedLayout, GuestLayout, MainLayout)
│   └── Pages/               # Page components for Inertia
│       ├── Auth/            # Authentication related pages
│       ├── Profile/         # User profile pages
│       ├── Author.jsx       # Author page
│       ├── Category.jsx     # Category page
│       └── Dashboard.jsx    # Dashboard page
public/
├── images/                  # Public images (if used, but note: assets are in resources/js/Assets)
database/
├── migrations/              # Database migration files
└── seeders/                 # Database seeder files
```

### Key Directories Explained:

1. **`js/Assets/`** - Static resources:
   - `images/` - Article images, logos, and UI graphics
   - `fonts/` - Custom font files
   - `css/` - Component-specific stylesheets

2. **`js/Components/Frontend/`** - Core reusable UI elements:
   - Form inputs, buttons, modals, and navigation components
   - Example: `PrimaryButton.jsx`, `TextInput.jsx`, `Modal.jsx`

3. **`js/Layouts/`** - Application scaffolding:
   - `AuthenticatedLayout.jsx` - Layout for logged-in users
   - `GuestLayout.jsx` - Public page layout
   - `MainLayout.jsx` - Primary application wrapper

4. **`js/Pages/`** - Route-based components:
   - `Auth/` - Login/registration flows
   - `Profile/` - User account management
   - `Dashboard.jsx` - Admin control panel
   - Content pages (`Author.jsx`, `Category.jsx`)

5. **`public/images/`** - Publicly accessible images
6. **`database/`** - Database schema and seeders:
   - `migrations/` - Database structure definitions
   - `seeders/` - Test data generators

## Development Workflow

### Running the dev server
```bash
php artisan serve
npm run dev
```

### Building for production
```bash
npm run build
```

### Generating fake content
```bash
php artisan db:seed --class=ArticleSeeder
```

### Creating new components
```bash
php artisan make:inertia ComponentName
```

## Environment Variables

| Key                  | Example Value       | Description                |
|----------------------|---------------------|----------------------------|
| `APP_ENV`            | local               | Application environment    |
| `APP_DEBUG`          | true                | Debug mode                 |
| `DB_CONNECTION`      | mysql               | Database driver            |
| `DB_HOST`            | 127.0.0.1           | Database host              |
| `DB_PORT`            | 3306                | Database port              |
| `DB_DATABASE`        | newsportal          | Database name              |
| `DB_USERNAME`        | root                | Database username          |
| `DB_PASSWORD`        |                     | Database password          |

## Default Accounts

Admin user created by seeder:
- **Email:** admin@newsportal.com
- **Password:** password

Regular user:
- **Email:** reader@newsportal.com
- **Password:** password

## Troubleshooting

**Problem:** Assets not loading  
**Solution:** Run `npm run dev` or `npm run build`

**Problem:** Database connection issues  
**Solution:** Verify `.env` credentials and run `php artisan config:clear`

**Problem:** Inertia components not updating  
**Solution:** Clear view cache: `php artisan view:clear`

**Problem:** Class not found errors  
**Solution:** Run `composer dump-autoload`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
