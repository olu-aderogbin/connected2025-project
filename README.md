
# ConnectED Platform

## Project info

A platform connecting students with career opportunities, mentors, and resources.

## Deployment Instructions

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Building for Production

1. Clone this repository
2. Install dependencies:
```
npm install
```
3. Build the project:
```
npm run build
```
4. The build files will be in the `dist` directory

### Deploying to cPanel

1. Build the project using the steps above
2. Compress the `dist` directory into a ZIP file
3. Log in to your cPanel account
4. Navigate to File Manager
5. Upload and extract the ZIP file to your desired directory (typically `public_html`)
6. If using React Router, configure `.htaccess` file (see below)

### .htaccess Configuration for React Router

Create an `.htaccess` file in your web root with the following content:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
