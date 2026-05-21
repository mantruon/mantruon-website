import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { essays } from '../data/writing'
import type { Essay } from '../data/writing'

export default function Writing() {
    const [selected, setSelected] = useState<Essay | null>(null)
    const [markdown, setMarkdown] = useState<string>('')
    const [activeCategory, setActiveCategory] = useState<string>('All')

    const categories = ['All', ...Array.from(new Set(essays.map(e => e.category)))]

    const filtered = activeCategory === 'All'
        ? essays
        : essays.filter(e => e.category === activeCategory)

    if (selected) {
        return (
            <main className="essay-detail">
                <button className="back-button" onClick={() => { setSelected(null); setMarkdown('') }}>← Back</button>
                <h1>{selected.title}</h1>
                <p className="date">{selected.date}</p>
                {selected.image && (
                    <figure className="essay-figure">
                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="essay-hero-image"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                        />
                        {selected.imageCaption && (
                            <figcaption className="essay-caption">{selected.imageCaption}</figcaption>
                        )}
                    </figure>
                )}
                <div className="content">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </main>
        )
    }

    return (
        <main>
            <h1>Writing</h1>

            {/* Category filter */}
            <div className="category-filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="essay-list">
                {filtered.map(essay => (
                    <div key={essay.slug} className="essay-card" onClick={() => {
                        setSelected(essay)
                        fetch(`/writing/${essay.slug}.md`)
                            .then(res => res.text())
                            .then(text => setMarkdown(text))
                    }}>
                        {essay.image && (
                            <img
                                src={essay.image}
                                alt={essay.title}
                                className="essay-card-image"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable={false}
                            />
                        )}
                        <div className="essay-card-text">
                            <span className="essay-category">{essay.category}</span>
                            <h2>{essay.title}</h2>
                            <p className="date">{essay.date}</p>
                            <p className="excerpt">{essay.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}