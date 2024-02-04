export const metadata = {
    title: 'BookoSphere',
    description: 'A place to generate books',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
