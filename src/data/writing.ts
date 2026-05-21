export interface Essay {
    title: string
    date: string
    slug: string
    excerpt: string
    category: string
    image?: string
    imageCaption?: string
}

export const essays: Essay[] = [
    {
        title: "Grief, tangerines and the Moon — lessons on mortality",
        date: "2023-01-23",
        slug: "grief-tangerines-moon",
        excerpt: "With Lunar New Year's coming around, I find myself spending it alone.",
        category: "Lessons Learned",
        image: "/writing-images/dt-grief.jpeg",
        imageCaption: "Art by Daniel Chung | Daily Trojan"
    }
]
