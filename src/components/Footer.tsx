export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <p>© {year} Man Truong. All rights reserved.</p>
        </footer>
    )
}