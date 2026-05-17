import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { essays } from '../data/writing'
import type { Essay } from '../data/writing'

export default function Writing() {
    const [selected, setSelected] = useState<Essay | null>(null)
    const [markdown, setMarkdown] = useState<string>('')

    useEffect(() => {
        if (selected) {
            fetch(`/writing/${selected.slug}.md`)
                .then(res => res.text())
                .then(text => setMarkdown(text))
        }
    }, [selected])

    if (selected) {
        return (
            <main className="essay-detail">
                <button className="back-button" onClick={() => { setSelected(null); setMarkdown('') }}>← Back</button>
                <p className="date">{selected.date}</p>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </main>
        )
    }

    return (
        <main>
            <h1>Writing</h1>
            <div className="essay-list">
                {essays.map(essay => (
                    <div key={essay.slug} className="essay-card" onClick={() => setSelected(essay)}>
                        <h2>{essay.title}</h2>
                        <p className="date">{essay.date}</p>
                        <p className="excerpt">{essay.excerpt}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}